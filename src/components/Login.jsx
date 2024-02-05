import { Link, Divider, Button, Card, TextField, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 5rem', }}>
        <Card style={{ height: '30rem', width: '25rem' }}>
            <div style={{ margin: '2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <center style={{ display: 'flex', flexDirection: 'column', gap: '1.7rem' }} >
                    <Typography variant='h6'>Login</Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) =>{
                        let elemt = e.target;
                        setEmail(elemt.value);
                    }} />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={(e) =>{
                        let elemt = e.target;
                        setPassword(elemt.value);
                    }} />
                        <Link href="#" underline="always" style={{display:"flex", width:'100%', justifyContent:'end'}}>
                            Forgot Password
                        </Link>
                    </div>
                    <Button variant='contained' onClick={() => {
                        function callback2(data) {
                            localStorage.setItem("token","Bearer " + data.token);
                            window.location = "/"
                        }

                        function callback1(res) {
                            res.json().then(callback2);
                        }

                        fetch("http://localhost:3000/admin/login/", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1);
                    }}>Login</Button>
                    <Divider>Or</Divider>
                    <Button variant='text' startIcon={<GoogleIcon/>}>Login with Google</Button>
                </center>
                

            </div>
        </Card>
    </div>
}

export default Login