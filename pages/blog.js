import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'


const Hero  = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
color: blue;
font-size: 10rem;
font-weight: 900
`;


export default function Blog({posts}) {
  return (
    <>
      <Head>
        <title>Blog page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>BLOG</Heading>
      </Hero>
        <div className={styles.news}>
            <ul className={styles.article}>
                  {posts.map(post => <li key={post}>
                  <Link href={`/blog/${post.id}`}>
                      <a>
                        <h3>{post.title}</h3>
                      </a>
                  </Link>
              </li>)}
            </ul>
        </div>
    </>
  )
}

export async function getServerSideProps () {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(r => r.json())// récupération des data et conversion en json
      return {
        props: {
          posts,
        //   date: (new Date()).toString()
        }
      }
  }