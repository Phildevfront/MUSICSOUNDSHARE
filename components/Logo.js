import styled from 'styled-components'
import styles from  '../styles/Logo.module.css'

const SoundShareLogo = styled.a`
font-size: 1.2rem;
padding: 20px;
cursor: pointer;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`;


const Logo = () => {
    return (

            <SoundShareLogo href='/' passHref
                className={styles.brand}>
                   <StyledLink> Music-Sound-Share</StyledLink>
            </SoundShareLogo>

    )
}

export default Logo
