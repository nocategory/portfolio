import Head from 'next/head'

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>nocategory's portfolio</title>
      <link rel="icon" href="/favicon.ico" /> {/* TODO: change the favicon */}
    </Head>
    <main>{children}</main>

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
        color: rgba(255, 255, 255, 0.8);
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, Ubuntu, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Layout
