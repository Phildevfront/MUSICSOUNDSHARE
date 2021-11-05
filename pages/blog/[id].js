import Link from 'next/link'


export default function Post ({posts}) {
    return <>

    <Link href="/blog">
        <a>Retour BLOG</a>
    </Link>
        <main>
            <h1>{posts.title}</h1>
             <p>{posts.body}</p>
        </main>

    </>
}

export async function getServerSideProps ({params}) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(r => r.json())// récupération des data et conversion en json
      return {
        props: {
          posts
        }
      }
}

