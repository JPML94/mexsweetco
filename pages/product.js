import Layout from '../components/Layout';

import { getProductById } from '../lib/moltin';

const ProductPage = props => (
  <Layout title="product">
    <pre>{JSON.stringify(props, '\t', 2)}</pre>
  </Layout>
);

ProductPage.getInitialProps = async ({query: {id}}) => {
  const data = await getProductById(id);

  return {
    data
  }
}

export default ProductPage;