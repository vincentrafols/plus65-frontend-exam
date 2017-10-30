const initialState = {
    productsData: [],
    fetching: false,
    fetched: false
};

function getInventory(collection) {
    const productData = [];
    collection.forEach(product => {
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
}

export const InventoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCTS_PENDING':
            return {
                ...state,
                fetching: true
            };
        case 'LOAD_PRODUCTS_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                productsData: getInventory(action.payload)
            };
        case 'LOAD_PRODUCTS_REJECTED':
            return {
                ...state,
                fetching: false,
                fetched: true
            };
        case 'ADD_PRODUCT_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                productsData:  [...state.productsData, action.payload.data]
            };
        case 'REMOVE_PRODUCT_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                productsData: state.productsData.filter(function( object ) {
                    return object.id !== action.payload;
                })
            };
    }

    return state;
};
