import setUserProfileDetails from '../src/redux/userProfile/reducer';

const defaultState = {
  firstName: 'John',
  lastName: 'William',
  company: 'innow8',
  department: 'Computer science',
  position: 'Developer',
  email: 'contact@innow8apps.com',
  id: '123',
};
const dataToSend = {
  data: {
    user: {
      firstname: 'John',
      lastname: 'William',
      company: 'innow8',
      department: 'Computer science',
      position: 'Developer',
      email: 'contact@innow8apps.com',
      _id: '123',
    },
  },
};

const expectedData = {
  firstName: 'John',
  lastName: 'William',
  company: 'innow8',
  department: 'Computer science',
  position: 'Developer',
  email: 'contact@innow8apps.com',
  id: '123',
};

describe('Reducers', () => {
  test('should handle USER_PROFILE_DETAILS', () => {
    expect(
      setUserProfileDetails(defaultState, {
        type: 'USER_PROFILE_DETAILS_SUCCESS',
        payload: dataToSend,
      })
    ).toEqual(expectedData);
  });

  test('should handle GET_USER_PROFILE_DETAILS', () => {
    expect(
      setUserProfileDetails(defaultState, {
        type: 'GET_USER_PROFILE_DETAILS_SUCCESS',
        payload: dataToSend,
      })
    ).toEqual(expectedData);
  });
});
