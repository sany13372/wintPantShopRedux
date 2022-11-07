import {client} from '../../../backend/lib/client.js'
import ProductPageItem from '../../app/components/screens/ProductPageItem/ProductPageItem';
import { randomnum } from '../../app/const/randonnum.js';




const Product = ({product,products}) => {
  return <ProductPageItem product={product} products={products} key={product._createdAt}/>
}

export default Product;




export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
  const paths = products.map((post) => ({
    params: { slug: post.slug.current },
  }))


  return { paths, fallback: false }

}
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}