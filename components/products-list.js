import { gql, graphql } from 'react-apollo'
import ProductCard from './product-card'

function ProductList ({ products, currencySymbol }) {
  return (
    <section>
        {products.map((product, index) =>
          <ProductCard key={product.sku} product={product} currencySymbol={currencySymbol} />
        )}
        <style jsx>{`
          section {
            display: flex;
            flex-flow: row wrap;
          }
          section :global(.card) {
            width: 24%;
            margin: 0.5%;
          }
          .price {
            font-size: 24px;
            font-weight: bold;
          }
        `}</style>
    </section>
  )
}

const products = gql`
  query {
    MagentoCatalogProductSearchResults(searchCriteria: {page_size: 100, current_page: 1}) {
      items {
        id,
        sku,
        name,
        price
      }
    },
    MagentoDirectoryCurrencyInformation {
      base_currency_symbol
    }
  }
  
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(products, {
  props: ({ data }) => {
    const {MagentoCatalogProductSearchResults, MagentoDirectoryCurrencyInformation} = data
    const {items: products} = MagentoCatalogProductSearchResults
    const {base_currency_symbol: currencySymbol} = MagentoDirectoryCurrencyInformation

    return {
      products,
      currencySymbol
    }
  }
})(ProductList)
