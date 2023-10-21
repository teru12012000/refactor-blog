import Image from 'next/image'
import BlogTitleList from './_home/blogTitleList'
import Header from './components/Header'
import BlogDetail from './_home/blogDetail'


export default function Home() {
  return (
    <main>
      <Header/>
      <BlogDetail/>
      <BlogTitleList/>
    </main>
  )
}
