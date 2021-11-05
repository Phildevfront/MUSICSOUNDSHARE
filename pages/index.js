import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import {useState, useEffect} from 'react'
import styled from 'styled-components'
import brandImg from '../public/brand_logo.png'



const Hero  = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000
`;

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900
`;



export default function Home({date}) {

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //  const timer = setInterval(() => setCount (n => n + 1), 1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>
          <Image
          src={brandImg}
          alt="Logo of Music Sound Share"
          width={320} automatically provided
          height={276}
          />
        </Heading>
      </Hero>
      {/* <h1>Count :{count} - {date}</h1> */}
    </>
  )
}

