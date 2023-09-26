import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class OTPScreen extends Component {
  state = {enteredOTP: '', usertextOtp: false}

  verifyOTP = () => {
    const {enteredOTP} = this.state
    const {location} = this.props
    const {otp} = location.state

    if (
      enteredOTP === otp.toString() &&
      enteredOTP.length === 4 &&
      enteredOTP !== ''
    ) {
      const {history} = this.props
      history.push('/success')
    } else {
      console.log('FAIL')
      this.setState({usertextOtp: true})
    }
  }

  onEnterOtpNumber = event => {
    this.setState({enteredOTP: event.target.value})
  }

  render() {
    const {usertextOtp} = this.state
    const {location} = this.props
    const {mobileNumber, otp} = location.state

    return (
      <div className="con">
        <div className="block1">
          <div className="block2">
            <img
              src="https://res.cloudinary.com/dpvr2hwtj/image/upload/v1695657966/undraw_confirmed_81ex_ebpdb9.png"
              className="image"
              alt="title"
            />

            <h4 className="para">Please verify Mobile number </h4>
            <p className="para">An OTP is sent to +91{mobileNumber}</p>
            {otp && <p className="para4">OTP GENERATED IS:{otp}</p>}
            <Link to="/" className="bio">
              <h6 className="link-to">Change Phone Number</h6>
            </Link>
            <input
              className="inp-box Otp-box"
              type="text"
              placeholder="Enter OTP"
              onChange={this.onEnterOtpNumber}
            />
            {usertextOtp && (
              <p className="warn para">
                Your OTP was Invalid? Please check your Otp
              </p>
            )}
            <p className="para1">
              Didn’t receive the code?<span className="resend">Resend</span>
            </p>

            <button className="send" type="button" onClick={this.verifyOTP}>
              Verify
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default OTPScreen
