import Axios from 'axios';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const API_URL = 'http://rest.learncode.academy/api/learncode/plus65examFrontEndOct31/';

export const loadProducts = () => {
    return {
        type: LOAD_PRODUCTS,
        payload: Axios.get(API_URL).then(response => {
            const productData = [];
            const productList = response.data;
            productList.forEach(product => {
                productData.push(
                    {
                        imgUrl: product.imgUrl,
                        name: product.name,
                        price: product.price,
                        desc: product.desc,
                        isSoldOut: product.isSoldOut,
                        id: product.id
                    }
                );
            });
            return productData;
        })
    };
};

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: Axios.post(API_URL, data)
    };
};

export const removeProduct = (productID) => {
    return {
        type: REMOVE_PRODUCT,
        payload: Axios.delete(API_URL + productID).then(() => {
            return productID;
        })
    };
};