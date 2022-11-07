const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_USER_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.message,
      };

    case "GET_USER_BY_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    case "EDIT_USER_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "EDIT_USER_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "EDIT_USER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    default: {
      return state;
    }
  }
};

export default user;
