// productsList
export const productsRequested = () => {
  return { type: "FETCH_PRODUCTS_REQUEST" };
};

export const productsLoaded = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

export const productsError = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

export const fetchCakes = (serviceFunctions) => () => (dispatch) => {
  dispatch(productsRequested());
  serviceFunctions
    .getAllCakes()
    .then((data) => dispatch(productsLoaded(data)))
    .catch((error) => dispatch(productsError(error)));
};

// selectProduct
export const productRequested = () => {
  return { type: "FETCH_PRODUCT_REQUEST" };
};

export const productLoaded = (product) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload: product,
  };
};

export const productError = (error) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    payload: error,
  };
};

export const fetchCake = (serviceFunctions) => (id) => (dispatch) => {
  dispatch(productRequested());
  serviceFunctions
    .getCake(id)
    .then((data) => dispatch(productLoaded(data)))
    .catch((error) => dispatch(productError(error)));
};
