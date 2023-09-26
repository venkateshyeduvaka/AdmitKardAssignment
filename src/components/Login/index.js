import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {mobileNumber: '', errMsg: false}

  onChangeMobileNumber = event => {
    this.setState({mobileNumber: event.target.value})
  }

  generateOTP = () => {
    const {mobileNumber} = this.state

    const {history} = this.props

    const otp = Math.floor(1000 + Math.random() * 9000)

    const sendData = {
      mobileNumber,
      otp,
    }
    const numberPattern = /^[0-9]+$/
    const check = numberPattern.test(mobileNumber)

    if (mobileNumber !== '' && mobileNumber.length === 10 && check) {
      history.push('/verify', sendData)
    } else {
      this.setState({errMsg: true})
    }
  }

  render() {
    const {mobileNumber, errMsg} = this.state
    return (
      <div className="con">
        <div className="block1">
          <div className="block2">
            <img
              src="https://res.cloudinary.com/dpvr2hwtj/image/upload/v1695654202/AK_logo_da3kd6.png"
              className="logo1"
              alt="title"
            />
            <h1 className="wel-h1">Welcome Back</h1>
            <p className="para">Please sign in to your Account</p>
            <div className="inp-bl">
              <label className="lab" htmlFor="lab">
                Enter Contact Number
              </label>
              <div className="inner">
                <img
                  src="https://res.cloudinary.com/dpvr2hwtj/image/upload/v1695655478/image_1_a7exch.png"
                  alt="india"
                  className="flag"
                />
                <p className="num">+91</p>
                <input
                  id="lab"
                  type="tel"
                  className="inp-box"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={this.onChangeMobileNumber}
                  required
                />
              </div>
              {errMsg && (
                <p className="warn">Enter the Mobile Number properly</p>
              )}
            </div>
            <p className="para1">
              We will send you a one time SMS message.
              <br />
              Charges may apply.
            </p>

            <button className="send" type="button" onClick={this.generateOTP}>
              Send OTP
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
