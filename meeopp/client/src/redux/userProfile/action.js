import action from '../action';
// Constant
export const USER_PROFILE_DETAILS = 'user_profile_details';
export const GET_USER_PROFILE_DETAILS = 'get_user_profile_details';
// Action to call to a backend set user details API
export const userProfileDetails = data =>
  action({
    type: 'USER_PROFILE_DETAILS',
    payload: {
      request: {
        url: '/userProfileDetails',
        method: 'POST',
        data,
      },
    },
  });

// Action to call to a backend get user details  API
export const getUserDetails = data =>
  action({
    type: 'GET_USER_PROFILE_DETAILS',
    payload: {
      request: {
        url: '/getUserDetails',
        method: 'POST',
        data,
      },
    },
  });
