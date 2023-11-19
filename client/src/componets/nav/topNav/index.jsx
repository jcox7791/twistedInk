import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import DropDownMenu from '@mui/material/DropDownMenu';
// import Select from '@material-ui/core/Select';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {

    // CSS
    const appBarStyle = {
        backgroundColor: "red"
        
    }
    const navButtonStyle = {
        color:"whitesmoke",
        font:"20px Copperplate, Papyrus, fantasy",
        marginLeft: "25px"
    }
    const toolBarStyle = {
        marginLeft: "15px"
    }
    return (
        <>
            <Box >
                <AppBar style={appBarStyle} >
                    <Toolbar style={toolBarStyle}>
                        <Button href="/" style={navButtonStyle}>home</Button>                       
+                        <Button href="/" style={navButtonStyle}>Artists</Button>
                        <Button href="/" style={navButtonStyle}>Shop Swag</Button>
                        <Button href="/" style={navButtonStyle}>Contact Us</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}


export default NavBar