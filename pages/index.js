import Layout from '@components/Layout'
import Avatar from '@components/Avatar'
import IntroText from '@components/IntroText'
import { dark } from '@components/constants'

const Home = () => (
  // HOMEPAGE
  <Layout bgColor={dark} theme="dark">
    <Avatar />
    <IntroText />
  </Layout>
)

export default Home
