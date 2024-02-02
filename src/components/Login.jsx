import { Link, Divider, Button, Card, TextField, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    return <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 5rem', }}>
        <Card style={{ height: '30rem', width: '25rem' }}>
            <div style={{ margin: '2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <center style={{ display: 'flex', flexDirection: 'column', gap: '1.7rem' }} >
                    <Typography variant='h6'>Login</Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{}} />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <Link href="#" underline="always" style={{display:"flex", width:'100%', justifyContent:'end'}}>
                            Forgot Password
                        </Link>
                    </div>
                    <Button variant='contained'>Login</Button>
                    <Divider>Or</Divider>
                    <Button variant='text' startIcon={<GoogleIcon/>}>Login with Google</Button>
                </center>
                

            </div>
        </Card>
    </div>
}

export default Login