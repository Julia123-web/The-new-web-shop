const initialState = { products: [], categories: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "products/FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
