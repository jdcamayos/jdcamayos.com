import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  console.log(router)
  return (
    <>
    <Head>
      <title>Blog - Juan Camayo</title>
    </Head>
    <div>This is a blog</div>
    </>
  )
}
