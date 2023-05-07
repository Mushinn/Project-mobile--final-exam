import PRODUCTS from "../products";

const initialState = {
    products: PRODUCTS,
    filterProducts: PRODUCTS,
    favProducts: [],
    cartProducts: []
}

const reducer = (state = initialState, action) => {

    if (action.type === 'TOGGLE_FAVORITE') {

        const existsIndex = state.favProducts.findIndex(product => product.id === action.productId);
        console.log(existsIndex);

        if (existsIndex >= 0) {
            const updatedFavProducts = [...state.favProducts]
            updatedFavProducts.splice(existsIndex, 1)
            return { ...state, favProducts: updatedFavProducts }
        }
        else {
            const product = state.products.find(product => product.id === action.productId);
            return { ...state, favProducts: state.favProducts.concat(product) }
        }
    }

    if (action.type === 'TOGGLE_CART') {

        const existsIndex = state.cartProducts.findIndex(product => product.id === action.productId);
        console.log(existsIndex);

        if (existsIndex >= 0) {
            const updatedCartProducts = [...state.cartProducts]
            updatedCartProducts.splice(existsIndex, 1)
            return { ...state, cartProducts: updatedCartProducts }
        }
        else {
            const product = state.products.find(product => product.id === action.productId);
            return { ...state, cartProducts: state.cartProducts.concat(product) }
        }
    }

    if (action.type === 'SET_FILTER') {
        const appliedFilters = action.filters;
        let updatedFilteredProducts = state.products;

        if (appliedFilters.isBrandOn || appliedFilters.isSaleOn) {
            updatedFilteredProducts = state.products.filter(product => {
                if (appliedFilters.isBrandOn && appliedFilters.isBrandOn !== product.isBrand) {
                    return false;
                }
                if (appliedFilters.isSaleOn && appliedFilters.isSaleOn !== product.isSale) {
                    return false;
                }
                return true;
            });
        }

        return { ...state, filterProducts: updatedFilteredProducts };
    }

    return state;

}

export default reducer