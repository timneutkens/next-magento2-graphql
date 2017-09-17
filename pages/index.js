import Layout from '../components/layout'
import ProductsList from '../components/products-list'
import withData from '../lib/with-data'

export default withData((props) => (
  <Layout>
    <h1>Magento + GraphQL + Next.js</h1>
    <ProductsList />
  </Layout>
))
