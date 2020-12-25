import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { finalSubmit } from '../Redux/userAction';
import './Verify.css'

const Verify = ({ finalSubmit, select, userData }) => {

    const [otp, setOtp] = useState('')
    const [isCorrect, setisCorrect] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ otp });
        if (otp === '1234') {
            finalSubmit(otp);
            localStorage.setItem('personalData', JSON.stringify(userData.personalData));
            localStorage.setItem('companyData', JSON.stringify(userData.companyData));
            var companyData = localStorage.getItem('companyData');
            var personalData = localStorage.getItem('personalData');
            console.log('companyData: ', JSON.parse(companyData));
            console.log('personalData: ', JSON.parse(personalData));
        } else {
            setisCorrect(false)
        }
    }


    return (
        <div className="container_ver">
            <div className="body_ver">
                {
                    !userData.isFinalDone ?
                        <form onSubmit={handleSubmit}>
                            <h1>Enter Your OTP</h1>
                            <h6>For Security, we need to verify your identity. We Sent a 5 digit code to your E-mail Please Enter it Below</h6>
                            <div className="input_content">
                                <h6>Enter Your Code</h6>
                                <input type='text' maxLength='4' onChange={e => { setOtp(e.target.value) }} />
                            </div>
                            <Button onClick={() => select('back')}>Back</Button>
                            <Button style={{ background: 'orange', width: '220px' }} type="submit">Next</Button><br></br>
                            {isCorrect ? <h6>Didn't recieve the mail ? Kindly Check in SPAM Folder.</h6> : <h6>Provided Wrong OTP</h6>}
                        </form> :
                        <h1> Submission Done. Check in Console for LocalStorage Values. </h1>
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        userData: state
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        finalSubmit: (name) => dispatch(finalSubmit(name))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Verify);
