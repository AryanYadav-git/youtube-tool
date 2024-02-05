import { Typography, Button} from "@mui/material"
// import Button from '@mui/material-next/Button';/



function Home() {
    return <div style={{ margin: "2rem 5rem"}}>
        <div >
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Work Smarter,</Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Faster with <Typography variant="h1" sx={{ fontWeight: 'bold', color: "#3b82f6" }}>MIDDLEMAN</Typography></Typography>
            <div style={{width:"35rem", marginTop:"2rem"}}>
                <Typography variant="h4" sx={{fontSize:"2rem", fontWeight:"lighter", color:"GrayText"  }}> Middleman connects everyone in the design process so team can deliver better and faster.</Typography>
            </div>
            <Button size="large" variant="contained" sx={{marginTop:"2rem", backgroundColor:"black", color:"white", width:"10rem"}}>Try now</Button>
        </div>
    </div>
}

export default Home