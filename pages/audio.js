import Head from 'next/head'
import styled from 'styled-components'

const Hero  = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900
`;


export default function Audio() {
  return (
    <>
      <Head>
        <title>Audio page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Audio</Heading>
      </Hero>
    </>
  )
}


