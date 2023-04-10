import { AppBar, Toolbar, Box, styled }  from '@mui/material';

// top app bar color changed here
const StyledHeader = styled(AppBar)` 
  background: #413845;
  height: 55px;

`
const Component = styled(Box)`
    margin-left: 12%;
` 



const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
 
    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src = {logoURL} alt="logo" style={{ width: 75}} />
                    
                </Component>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;