import { client } from '@/libs/microcms'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/footer/Footer'

export default async function Home() {
 const data = await client.get({
  endpoint: 'blogs',
 })

 return (
  <>
   <Header></Header>
   <main>
    {data.contents.map((content: { id: string }) => (
     <div key={content.id}>{content.id}</div>
    ))}
   </main>
   <Footer></Footer>
  </>
 )
}
