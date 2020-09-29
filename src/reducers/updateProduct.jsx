export const updateProduct = (state, action) => {
  if (state === undefined) {
    return {
      selectedItem: null,
      loading: false,
      error: null,
    };
  }

  if (state.productSelected === undefined) {
    return {
      selectedItem: null,
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        selectedItem: null,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        selectedItem: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        selectedItem: null,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        selectedItem: null,
        loading: false,
        error: null,
      };
  }
};
