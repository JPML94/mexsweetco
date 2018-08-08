import { getProducts } from '../lib/moltin'
import Layout from '../components/Layout'

const Home = ({ products }) => (
  <Layout title="Home">
    <pre>{JSON.stringify(products, '\t', 2)}</pre>
  </Layout>
)

Home.getInitialProps = async () => {
  const products = await getProducts()

  return {
    products
  };
};

export default Home
