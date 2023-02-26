// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    submitForm: true,
    errorFirstName: false,
    errorLastName: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const condition = firstName === ''
    if (condition) {
      this.setState({errorFirstName: true})
    } else {
      this.setState({errorFirstName: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const condition = lastName === ''
    if (condition) {
      this.setState({errorLastName: true})
    } else {
      this.setState({errorLastName: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({submitForm: false})
    } else if (firstName === '' && lastName === '') {
      this.setState({errorFirstName: true, errorLastName: true})
    } else if (lastName === '') {
      this.setState({errorLastName: true})
    } else if (firstName === '') {
      this.setState({errorFirstName: true})
    }
  }

  onAddAnotherForm = () => {
    this.setState({
      submitForm: true,
      firstName: '',
      lastName: '',
      errorFirstName: false,
      errorLastName: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      submitForm,
      errorFirstName,
      errorLastName,
    } = this.state
    const firstNameStyle = errorFirstName ? 'error-input' : null
    const lastNameStyle = errorLastName ? 'error-input' : null
    return (
      <div className="registration-container">
        <h1 className="registration-heading">Registration</h1>
        {submitForm ? (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="container">
              <label htmlFor="first-name" className="label-style">
                FIRST NAME
              </label>
              <br />
              <input
                placeholder="First name"
                id="first-name"
                className={`input-field ${firstNameStyle}`}
                onChange={this.onChangeFirstName}
                onBlur={this.onBlurFirstName}
                value={firstName}
                type="text"
              />
              {errorFirstName && <p className="error-msg">Required</p>}
            </div>
            <div className="container">
              <label htmlFor="last-name" className="label-style">
                LAST NAME
              </label>
              <br />
              <input
                placeholder="Last name"
                id="last-name"
                className={`input-field ${lastNameStyle}`}
                onChange={this.onChangeLastName}
                onBlur={this.onBlurLastName}
                value={lastName}
                type="text"
              />
              {errorLastName && <p className="error-msg">Required</p>}
            </div>
            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success">Submitted Successfully</p>
            <button
              type="button"
              className="submit-another"
              onClick={this.onAddAnotherForm}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
