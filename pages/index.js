import Head from 'next/head'
import Avatar from '@components/Avatar'

const Home = () => (
  <div className="container">
    <Head>
      <title>nocategory's portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Avatar />
    </main>

    <style jsx>{`
      .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #201f24;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
