import Grid from "@mui/material/Grid2"
import { createTheme } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import logo from '../../assets/logo.svg'
import { IconButton } from "@mui/material";


function Header() {
    return (
        <Grid container display='flex' justifyContent='space-between' sx={{ backgroundColor: '#1E261D', px: '5rem' }} >
            <Grid container size='auto' display='flex' alignItems='center' columnSpacing={1}>
                <Grid size={2}>
                    <img src={logo} />
                </Grid>
                <Grid>
                    <p style={{ fontSize: '20px', color: 'white' }}>Plantt</p>
                </Grid>
            </Grid>
            <Grid container size={6} display='flex' alignItems='center' columnSpacing={2}>
                <Grid>
                    <p style={{ color: 'white' }}>Home</p>
                </Grid>
                <Grid>
                    <p style={{ color: '#8D8F8F' }}>Shop</p>
                </Grid>
                <Grid>
                    <p style={{ color: '#8D8F8F' }}>About</p>
                </Grid>
                <Grid>
                    <p style={{ color: '#8D8F8F' }}>FAQ</p>
                </Grid>
                <Grid>
                    <p style={{ color: '#8D8F8F' }}>Contact</p>
                </Grid>
                <Grid>
                    <p style={{ color: '#8D8F8F' }}>Blog</p>
                </Grid>
            </Grid>
            <Grid container size='auto' display='flex' alignItems='center' columnSpacing={1}>
                <Grid>
                    <IconButton sx={{border:1, borderColor:'#8D8F8F', color:'white'}} style={{backgroundColor:'#283025'}}> <SearchIcon /> </IconButton>
                </Grid>
                <Grid>
                    <IconButton sx={{border:1, borderColor:'#8D8F8F', color:'white'}} style={{backgroundColor:'#283025'}}>  <ShoppingCartOutlinedIcon /> </IconButton>
                </Grid>
                <Grid>
                    <IconButton sx={{border:1, borderColor:'#8D8F8F', color:'white'}} style={{backgroundColor:'#283025'}}> <PersonOutlinedIcon /> </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header