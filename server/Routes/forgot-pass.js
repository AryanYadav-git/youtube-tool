const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { Admin } = require("../DB/user");
require('dotenv').config();

function generateRandomToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let token = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }
    return token;
}

const forgot = async (req, res) => {
    const username = req.body.username;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            res.status(400).send({ message: "Invalid email" });
            throw new Error(`Invalid email`);
        }
        const token = generateRandomToken();
        console.log(token);
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(token, salt);
        await admin.updateOne({password: hashPassword});
        const transporter = nodemailer.createTransport({
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: process.env.MAILUSER,
                pass: process.env.MAILPASSWORD
            }
        });

        const info = await transporter.sendMail({
            from: '"Middleman" <middlewoman1024@gmail.com>', // sender address
            to: `${username}`, // list of receivers
            subject: "Forgot Password", // Subject line
            text: "Rest your password", // plain text body
            html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2" ><div style="margin:50px auto;width:70%;padding:20px 0"><div style="border-bottom:1px solid #eee"><a href="https://www.google.com/" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Middleman</a></div><p style="font-size:1.1em">Hi,</p><p>Thank you for choosing Middleman. Use the following temperory password to complete your Password Recovery Procedure. You can change your password after logging in with this password in your profile section</p><h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">New password : ${token} </h2><p style="font-size:0.9em;">Regards,<br />Middleman</p><hr style="border:none;border-top:1px solid #eee" /><div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"><p>Middleman Inc</p><p>F717,HEADQUARTER </p><p>JURS</p></div></div></div >`
        });

        console.log("Message sent: %s", info.messageId);
        res.status(201).json(info.response);
    } catch (e) { res.status(400).json(e) }
}

router.post('/passwords', forgot);
module.exports = router;