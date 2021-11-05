import styled from 'styled-components'

const FooterSection = styled.div`
background: #000;
color: #fff;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`;

const Footer = () => {
    return (
        <FooterSection>
            <p>NEXT 2021 All Rights Reserved - PBAURENS</p>
        </FooterSection>
    )
}

export default Footer
