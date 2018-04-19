import { FETCHALLPRODUCTS } from '../actions/products';

const fetchProducts = (state = [], action) => {
  console.log(action);
  if (action.type === FETCHALLPRODUCTS) return action.payload;
  return state;
};

export default fetchProducts;
