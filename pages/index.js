import Layout from '@components/Layout'
import Avatar from '@components/Avatar'
import BracesText from '@components/BracesText'
import { dark } from '@components/constants'

const Home = () => (
  // HOMEPAGE
  <Layout bgColor={dark} theme="dark">
    <Avatar />
    <BracesText fontSize="2rem">
      <b>nocategory</b>'s portfolio
    </BracesText>
  </Layout>
)

export default Home
