import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const StyledHomeLink = styled(NavLink)({
    margin: 0,
    cursor: "pointer",
    textDecoration: "none", // Remove underline for h1
    color: "inherit", // Inherit the color
    fontSize: "2.5rem",
    fontFamily: "Bold"
});

const StyledLinkContainer = styled("div")({
    display: "flex",
});

const StyledLink = styled(NavLink)({
    margin: "0 12px",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
    fontSize: "20px"
});

const NavBar = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
                <StyledHomeLink to={"/"}>ANIK AKASH</StyledHomeLink>
                <StyledLinkContainer>
                    <StyledLink to={"/"}>Student List</StyledLink>
                    <StyledLink to={"/add"}>Add Students</StyledLink>
                </StyledLinkContainer>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
