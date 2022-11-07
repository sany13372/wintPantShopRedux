
import HomePage from '../app/components/screens/HomePage/HomePage'
import { client } from '../../backend/lib/client.js'


export default function Home({ products}) {
  return <HomePage products={products}/>
}

export const getStaticProps = async () => {
  try {
    const query = '*[_type == "product"]';

    const products = await client.fetch(query);

    return {
      props: {products}
    }
    
  } catch (error) {
    console.log(error)

    return {
      props: {products:[]}
    }
  }
}
