import React from "react";
import { useState } from "react";
import axios from 'axios';
import {
    Link,
    Button,
    Card,
    TextField,
    Typography,
} from "@mui/material";

const handleSubmit = async (e) => {
    const {data : res} = await axios.post("http://localhost:3000/pass/passwords", {
        username: Email
    });
    console.log(res);
}

function ForgotPassword() {
    const [Email, setEmail] = useState("");

    return (
        <div
            style={{ display: "flex", justifyContent: "center", margin: "10rem 5rem" }}
        >
            <Card style={{ height: "20rem", width: "25rem" }}>
                <div
                    style={{
                        margin: "3rem 2rem", // Updated margin value
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.7rem",
                    }}
                >
                    <center
                        style={{ display: "flex", flexDirection: "column", gap: "1.7rem" }}
                    >
                        <Typography variant="h6">Forgot Password</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => {
                                let elemt = e.target;
                                setEmail(elemt.value);
                            }}
                        />
                        <Button variant="contained" style={{
                            margin: "1rem 0", // Updated margin value
                        }} onClick={async () => {
                            const {data : res} = await axios.post("http://localhost:3000/pass/passwords", {
                                username: Email
                            })
                        }}>Send</Button>
                    </center>
                </div>
            </Card>
        </div>
    );
}

export default ForgotPassword;