import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { personalSubmit } from '../Redux/userAction';
import './Personal.css'

const Personal = ({ personalSubmit, select,userData }) => {

    const [values, setValues] = useState({
        name: "",
        phone: "",
        gender: "male",
        country: 1,
        state: 1
    })

    const { name, phone, gender, country, state } = values

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, phone, gender, country, state });
        personalSubmit(values);
        select(true);
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    return (
        <div className="container">
            <div className="body">
                <form onSubmit={handleSubmit}>
                    <h2>Add Your Personal Details</h2>
                    <h6>Lorem ipsium is Dummy Text of printing Type industry</h6>
                    <div className="form-body">
                        <TextField required
                            id="Full-Name"
                            label="Full-Name"
                            onInput={handleChange("name")}
                            value={userData && userData.personalData && userData.personalData.name} />

                        <label>Gender</label>
                        <RadioGroup row aria-label="gender"
                            name="gender1"
                            value={userData && userData.personalData && userData.personalData.gender}
                            onChange={handleChange("gender")}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>

                        <label>Country</label>
                        <select value={userData && userData.personalData && userData.personalData.country} onChange={handleChange("country")} required >
                            <option value="1">India</option>
                            <option value="2">US</option>
                            <option value="3">UK</option>
                        </select><br></br>

                        <label>State</label>
                        <select value={userData && userData.personalData && userData.personalData.state} onChange={handleChange("state")} required >
                            <option value="1">Tamilnadu</option>
                            <option value="2">Kerala</option>
                        </select>

                        <TextField required id="Phone" label="Phone" onInput={handleChange("phone")} value={userData && userData.personalData && userData.personalData.phone}/>

                        <Button style={{ background: 'orange' }} type="submit">Next</Button>

                    </div>

                    <h5>
                        Already have an Account ? <a href='login'>Login</a>
                    </h5>

                </form>

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
        personalSubmit: (name) => dispatch(personalSubmit(name))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Personal);