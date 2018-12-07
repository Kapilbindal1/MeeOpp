import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileScreen } from '../src/views/profileScreen/index';
import { getUserDetails, userProfileDetails } from '../src/redux/userProfile/action';

describe('Profile Screen', () => {
  test('should render correctly', () => {
    const data = {
      firstName: 'John',
      lastName: 'William',
      company: 'innow8',
      department: 'Computer science',
      position: 'Developer',
      email: 'contact@innow8apps.com',
    };
    const testRenderer = renderer.create(
      <ProfileScreen
        allDetails={data}
        getUserDetails={getUserDetails}
        userProfileDetails={userProfileDetails}
      />
    );
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
