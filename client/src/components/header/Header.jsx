import { AppBar, Toolbar, styled }  from '@mui/material';

// top app bar color changed here
const StyledHeader = styled(AppBar)` 
  background: #413845;
`
  



const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>

            </Toolbar>
        </StyledHeader>
    );
}

export default Header;