import styled from "styled-components"
import Link from 'next/link'
import Logo from "./Logo";


const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center
    `;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`;

const Navbar = () => {
    return (
        <Nav>
                <Link href='/' passHref>
                    <Logo />
                </Link>

            <div>
                <Link href='/' passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href='/about' passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href='/audio' passHref>
                    <StyledLink>Audio</StyledLink>
                </Link>
                <Link href='/blog' passHref>
                    <StyledLink>Blog</StyledLink>
                </Link>
                <Link href='/contact' passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>

            </div>
        </Nav>
    )
}

export default Navbar
