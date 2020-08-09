import Layout from '@components/Layout'
import Avatar from '@components/Avatar'
import IntroText from '@components/IntroText'
import Menu from '@components/Menu'

const Home = () => (
  // HOMEPAGE
  <Layout bgColor="#201f24">
    <Avatar />
    <IntroText />
    <Menu activePage="home" />
  </Layout>
)

export default Home
