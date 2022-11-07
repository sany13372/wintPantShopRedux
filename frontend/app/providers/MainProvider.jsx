
import Layout from '../components/Layout/Layout';
import CartProvider from './CartProvider';


const MainProvaider = ({ children, Component }) => {



    return (
        <CartProvider>
            <Layout>
                {children}
            </Layout>
        </CartProvider>

    );
};


export default MainProvaider;