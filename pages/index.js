import Layout from '@components/Layout'
import Avatar from '@components/Avatar'
import BracesText from '@components/BracesText'
import { dark } from '@components/constants'

const Home = () => (
  // HOMEPAGE
  <Layout bgImage={"url('./images/home_background.jpg')"} theme="dark">
    <Avatar />
    <BracesText>
      <b>nocategory</b>'s portfolio
    </BracesText>
  </Layout>
)

export default Home
