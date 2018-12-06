/* eslint-disable */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import '../../App.css';
import PropTypes from 'prop-types';
import logo from '../../assets/meeopplogo.png';
import { userProfileDetails, getUserDetails } from '../../redux/userProfile/action';
import Validation from '../validations';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { firstName, lastName, company, department, position, email } = props.allDetails;
    this.state = {
      firstName,
      lastName,
      company,
      department,
      position,
      email,
    };
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { allDetails, getUserDetails } = this.props;
    const payload = {
      id: allDetails.id,
    };
    if (allDetails && allDetails.id) {
      getUserDetails(payload).then(res => {
        if (res.type === 'GET_USER_PROFILE_DETAILS_SUCCESS') {
          // eslint-disable-next-line react/destructuring-assignment
          const details = this.props.allDetails;
          this.setState({
            firstName: details.firstName,
            lastName: details.lastName,
            company: details.company,
            department: details.department,
            position: details.position,
            email: details.email,
          });
        }
        return null;
      });
    }
  }

  onUpdate(key, value) {
    this.setState({ [key]: value }, () => {});
  }

  /**
   * @method onSave : Method called on form submition to store user profile details in reducer and database
   */
  onSave() {
    const { firstName, lastName, company, department, position, email } = this.state;
    if (email === '' || !email) {
      alert('Please enter the email', 'danger');
      return false;
    }
    if (!Validation.validateEmail(email)) {
      alert('Please enter correct email', 'danger');
      return false;
    }
    // eslint-disable-next-line no-shadow
    const { userProfileDetails } = this.props;
    const payload = {
      firstName,
      lastName,
      company,
      department,
      position,
      email,
    };
    // Function to call set user details API
    userProfileDetails(payload).then(() => {
      alert('User Details saved successfully', 'danger');
    });
    return true;
  }

  render() {
    const { firstName, lastName, company, department, position, email } = this.state;
    return (
      <div>
        <header className="headerOfUserProfile">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="userProfileDiv">
          <Card className="GridcolSize2 newRegisterPage disabled-card">
            <CardBody>
              <p className="pTag">Please fill in this form to create an account.</p>
            </CardBody>
          </Card>
          <div style={{ margin: '30px' }}>
            <form>
              <div>
                <label>
                  <b>First Name</b>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  onChange={e => this.onUpdate('firstName', e.currentTarget.value)}
                />
                <label>
                  <b>Last Name</b>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => this.onUpdate('lastName', e.currentTarget.value)}
                />
                <label>
                  <b>Company</b>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter Company"
                  name="company"
                  value={company}
                  onChange={e => this.onUpdate('company', e.currentTarget.value)}
                />
                <label>
                  <b>Department</b>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter department"
                  name="department"
                  value={department}
                  onChange={e => this.onUpdate('department', e.currentTarget.value)}
                />
                <label>
                  <b>Position</b>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter Position"
                  name="position"
                  value={position}
                  onChange={e => this.onUpdate('position', e.currentTarget.value)}
                />
                <label>
                  <b>Email</b> <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  className="inputField"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={e => this.onUpdate('email', e.currentTarget.value)}
                />

                <div className="saveButton">
                  <Button className="submitOrCancel" onClick={() => this.onSave()}>
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ProfileScreen.propTypes = {
  userProfileDetails: PropTypes.func.isRequired,
  getUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allDetails: state.SetUserProfileDetailsReducer,
});

const mapDispatchToProps = {
  userProfileDetails,
  getUserDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
