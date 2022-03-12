import { Link, Paper, Typography } from "@mui/material";

export default function Footer(){
    return <footer><Paper sx={{backgroundColor: "#212529", marginTop:"50px", borderRadius:"0", textAlign: "center", color: "white", width: "100%", padding: "20px"}}>
        <Typography variant="h6" sx={{ margin: "10px"}}>Copyright © Windell Gann 2022</Typography>
        <Link href={'https://rogersvillecoc.org/'} sx={{ display: "inline-block", color: "white", textAlign:"center"}}>Rogersville Church of Christ</Link>
    </Paper>
    </footer>
}