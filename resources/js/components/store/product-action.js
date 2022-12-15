import { productActions } from './productSlice';


export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:8000/api/product'
      );

      if (!response.ok) {
        throw new Error('Could not fetch product data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(
        productActions.loadProduct({
          products: productData
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};


