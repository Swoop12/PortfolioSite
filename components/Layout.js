import Head from 'next/head'

import utilStyles from '../styles/Home.module.css'
import mimoji from '../public/mimoji.png'
import NavBar from '../components/NavBar'
import Footer from './Footer'

export default function Layout ({ children, title, image }) {
  return (
    <div>
      <div className={utilStyles.background} />
      <Head>
        <title>Trevor Adcock</title>
        <meta
          name='description'
          content='👨🏼‍💻 80% Developer  -  🎨 20% Designer'
        />
        <meta property='og:title' content={title ? title : 'Trevor Adcock'} />
        <meta property='og:image' content={mimoji} />
        <link rel='icon' href='/mimoji.png' />
      </Head>
      <header>
        <NavBar />
      </header>
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
