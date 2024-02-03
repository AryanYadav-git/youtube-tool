import { Link, Divider, Button, Card, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

function Signup() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setconfirmPassword] = useState(""); 

    return <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 5rem', }}>
        <Card variant="outlined" style={{ height: '36rem', width: '25rem' }}>
        <div style={{ margin: '2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <center style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }} >
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Signup</Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) =>{
                        let elemt = e.target;
                        setFirstName(elemt.value);
                    }} />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) =>{
                        let elemt = e.target;
                        setEmail(elemt.value);
                    }} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) =>{
                        let elemt = e.target;
                        setPhonenumber(elemt.value);
                    }} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={(e) =>{
                        let elemt = e.target;
                        setPassword(elemt.value);
                    }} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' onChange={(e) =>{
                        let elemt = e.target;
                        setconfirmPassword(elemt.value);
                    }} />
                    </div>

                    <Button variant='contained' onClick={() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                            window.location = "/"
                        }

                        function callback1(res) {
                            res.json().then(callback2);
                        }

                        fetch("http://localhost:3000/admin/signup/", {
                            method: "POST",
                            body: JSON.stringify({
                                firstName: FirstName,
                                lastName: "as",
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(alert("heelo"));
                    }}>Signup</Button>
                    <Divider>Or</Divider>
                    <Button variant='text' startIcon={<GoogleIcon/>}>Signup with Google</Button>

            </center>
            </div>
        </Card>
    </div>
    
}

export default Signup