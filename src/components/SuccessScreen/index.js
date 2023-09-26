import {Component} from 'react'

import './index.css'

class SuccessScreen extends Component {
  render() {
    return (
      <div className="con">
        <div className="block1">
          <div className="block2">
            <h2 className="main">LoginSuccessfully </h2>

            <img
              src="https://res.cloudinary.com/dpvr2hwtj/image/upload/v1695660613/Artboard_1_uwtqsw.png"
              alt="logo-success"
              className="success-logo"
            />
            <h1 className="para">Welcome to AdmitKard</h1>
            <p className="para">
              In order to provide you with a custom experience
              <br />
              we need to ask you a few questions.
            </p>

            <button className="send" type="button">
              Get Started
            </button>
            <p className="para">*This will only take 5 min.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SuccessScreen
