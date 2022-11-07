
import { useState, createContext, useContext, useEffect,useRef,useMemo} from 'react';


export const ProductsContext = createContext()
const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]) // Массив объектов в корзине
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, settotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)
    const [priceBox, setPriceBox] = useState(135)
    const isMounted = useRef(false)

    const localItems = {
        cartItems,
        totalPrice,
        totalQuantities
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("cartItems"))) {
            const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
            setCartItems(storedCartItems);
        }

        if (JSON.parse(localStorage.getItem("totalPrice"))) {
            const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
            setTotalPrice(storedTotalPrice);
        }

        if (JSON.parse(localStorage.getItem("totalQuantities"))) {
            const storedTotalQuantities = JSON.parse(localStorage.getItem("totalQuantities"));
            settotalQuantities(storedTotalQuantities);
        }
    }, []);

    useEffect(() => {
        if (isMounted.current) {
             localStorage.setItem('cartItems', JSON.stringify(cartItems))
             localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
             localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));


        }
        isMounted.current = true;
    }, [cartItems])

    let foundProduct;
    let index;

    const incqty = () => {
        setQty((prevQuty) => prevQuty + 1)
    }

    const onAdd = (product, quantity, size, color) => {
        const checkProductInCart = cartItems.find((item) => item.slug.current === product.slug.current && item.cartSize === size && item.cartColor === color) // Проверка на наличие добавляемого товара в корзине
        const checkProductInCartIndex = cartItems.indexOf((item) => item.slug.current === product.slug.current && item.cartSize === size && item.cartColor === color)
        setTotalPrice((prevTotal) => prevTotal + product.price * quantity) // Изменение общей суммы
        settotalQuantities((prevTotalQuanity) => prevTotalQuanity + quantity)


        if (checkProductInCart) { // Проверка на наличие добавляемого товара в корзине, если да, кол-во + 1
            checkProductInCart.quantity += 1;

            const updateCartItems = [...cartItems];
            updateCartItems[checkProductInCartIndex] = checkProductInCart;

            setCartItems(updateCartItems)
        } else {
            product.quantity = quantity;
            product.cartSize = size;
            product.cartColor = color;
            setCartItems([...cartItems, { ...product }]);
        }
    }

    const onRemove = (product, size, color) => {
        foundProduct = cartItems.find((item) => item.slug.current === product.slug.current && item.cartSize === size && item.cartColor === color);

        const newCartItems = cartItems.filter((item) => item !== foundProduct);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemQuanitity = (product, value) => {
        foundProduct = cartItems.find((item) => item._id === product._id && item.cartSize === product.cartSize && item.cartColor === product.cartColor);
        index = cartItems.findIndex((product) => product === foundProduct);
        const newCartItems = [...cartItems]


        if (value === 'inc') {
            newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 }
            setCartItems(newCartItems);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            settotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity >= 2) {
                newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 }
                setCartItems(newCartItems);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                settotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            } else if (foundProduct.quantity = 1) {
                const newCartItems = cartItems.filter((item) => item !== foundProduct);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                settotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
                setCartItems(newCartItems);
            }
        }
    }

    const decqty = () => {
        setQty((prevQuty) => {
            if (prevQuty - 1 < 1) return 1
            return prevQuty - 1
        })
    }


    const zakazPrice = (price) => {
        setPriceBox(price + totalPrice)
    }

    const value = useMemo(() => ({cartItems, totalPrice, totalQuantities, qty, incqty, decqty, onAdd, toggleCartItemQuanitity, onRemove, setCartItems, setTotalPrice, settotalQuantities, zakazPrice, priceBox, setPriceBox}),[cartItems,totalPrice,totalQuantities,qty,priceBox])
    return (
        <ProductsContext.Provider value={value}>

                {children}

        </ProductsContext.Provider>
    );
};
export const useStateProducts = () => useContext(ProductsContext)
export default CartProvider;