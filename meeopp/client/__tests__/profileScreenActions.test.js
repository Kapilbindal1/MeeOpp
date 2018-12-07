/**
 * @jest-environment node
 */
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { getUserDetails, userProfileDetails } from '../src/redux/userProfile/action';

const client = axios.create({
  baseURL: 'http://localhost:5000',
  responseType: 'json',
});

const middlewares = [axiosMiddleware(client)];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

test('Set User Profile Details Action', () => {
  const data = {
    firstName: 'John',
    lastName: 'William',
    company: 'innow8',
    department: 'Computer science',
    position: 'Developer',
    email: 'contact@innow8apps.com',
  };
  const expectedAction = { type: 'USER_PROFILE_DETAILS_SUCCESS' };
  return store.dispatch(userProfileDetails(data)).then(() => {
    expect(store.getActions().find(a => a.type === expectedAction.type)).toBeDefined();
  });
});

test('Get User Profile Details Action', () => {
  const data = {
    id: '12345',
  };
  const expectedAction = { type: 'GET_USER_PROFILE_DETAILS' };
  return store.dispatch(getUserDetails(data)).then(() => {
    expect(store.getActions().find(a => a.type === expectedAction.type)).toBeDefined();
  });
});
