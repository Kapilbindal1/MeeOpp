const defaultState = {
  firstName: '',
  lastName: '',
  company: '',
  department: '',
  position: '',
  email: '',
  id: '',
};

// Function to return updated state based on responce of API's
const setUserProfileDetails = (state = defaultState, action) => {
  if (action && action.payload && action.payload && action.payload.data) {
    const data = action.payload.data.user;
    return {
      ...state,
      firstName: data.firstname,
      lastName: data.lastname,
      company: data.company,
      department: data.department,
      position: data.position,
      email: data.email,
      // eslint-disable-next-line no-underscore-dangle
      id: data._id,
    };
  }
  return {};
};

const getFormattedMessage = action => {
  const message = 'Internal server error.';
  if (action && action.error) {
    if (action.error.response) {
      const { response } = action.error;
      if (response && response.data && response.data.message) {
        return response.data.message;
      }
    } else if (action.error.data) {
      const { data } = action.error;
      if (typeof data === 'string') {
        return data;
      }
    }
  }
  return message;
};

const handleFailedCase = action => {
  const actionType = action.type;
  if (actionType && actionType.toUpperCase().includes('_FAIL')) {
    const message = getFormattedMessage(action);
    // eslint-disable-next-line no-console
    console.log('message: ', message);
    return message;
  }
  return null;
};

// Reducer for setting and getting user profile details (database)
const setUserProfileDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_PROFILE_DETAILS_SUCCESS': {
      const updatedState = setUserProfileDetails(state, action);
      return {
        ...updatedState,
      };
    }
    case 'GET_USER_PROFILE_DETAILS_SUCCESS': {
      const updatedState = setUserProfileDetails(state, action);
      return {
        ...updatedState,
      };
    }
    case 'GET_USER_PROFILE_DETAILS_FAIL': {
      const failedResult = handleFailedCase(action);
      return {
        failedResult,
      };
    }
    case 'USER_PROFILE_DETAILS_FAIL': {
      const failedResult = handleFailedCase(action);
      return {
        failedResult,
      };
    }
    default:
      return state;
  }
};

export default setUserProfileDetailsReducer;
