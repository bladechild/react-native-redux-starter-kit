import axios from 'axios';

export const FETCHALLPRODUCTS = 'Fetch all products';
export const FAILFETCHPRODUCTS = 'Fail to fetch all products';
export const fetchAllProducts = () => {
  const url = 'https://dd01e1d3a7d88d0f74f5d961c8586692:4e79f12dcf920fadcd8e99effa72e16f@modern-edge-razors.myshopify.com/admin/products.json?limit=50';
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        console.log(response);
        dispatch({
          type: FETCHALLPRODUCTS,
          payload: response.data.products,
        });
      })
      .catch(() => dispatch({
        type: FAILFETCHPRODUCTS,
        payload: [],
      }));
  };
};

