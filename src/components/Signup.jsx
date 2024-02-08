import { Link, Divider, Button, Card, TextField, Typography, Snackbar, Alert } from '@mui/material'
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            if(password !== confirmPassword) {
                setError("Password doesn't match");
                throw new Error("Password doesn't match");
                
            }
            
            const url = "http://localhost:3000/admin/signup/";
            const { data: res } = await axios.post(url, {
                Name: Name,
                PhoneNumber: Phonenumber,
                username: email,
                password: password
            });

            setOpen(true);
            setTimeout(() =>{navigate("/login");},3000);
            
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 5rem', }}>
        <Card variant="outlined" style={{ minHeight: '36rem', width: '25rem' }}>
            <div style={{ margin: '2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <center style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }} >
                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>Signup</Typography>
                    <TextField required id="outlined-basic" label="Name" variant="outlined" onChange={(e) => {
                        let elemt = e.target;
                        setName(elemt.value);
                    }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e) => {
                            let elemt = e.target;
                            setEmail(elemt.value);
                        }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField required id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => {
                            let elemt = e.target;
                            setPhonenumber(elemt.value);
                        }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField required id="outlined-basic" label="Password" variant="outlined" type='password' onChange={(e) => {
                            let elemt = e.target;
                            setPassword(elemt.value);
                        }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField required id="outlined-basic" label="Confirm Password" variant="outlined" type='password' onChange={(e) => {
                            let elemt = e.target;
                            setconfirmPassword(elemt.value);
                        }} />
                    </div>
                    {error && <Alert severity="error">{error}</Alert>}
                    <Button variant='contained' onClick={() => {handleSubmit()}
                    }
                    >Signup</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity="success"
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            Admin created successfully!!
                        </Alert>
                    </Snackbar>
                    <Divider>Or</Divider>
                    <Button variant='text' startIcon={<GoogleIcon />}>Signup with Google</Button>
                </center>
            </div>
        </Card>
    </div>

}

export default Signup