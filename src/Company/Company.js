import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import '../Company/Company.css'
import { connect } from 'react-redux';
import { companySubmit } from '../Redux/userAction';

const Company = ({ companySubmit, select, userData }) => {

    const [values, setValues] = useState({
        cname: "",
        mail: "",
        job: "",
        xp: ""
    })

    const { cname, mail, job, xp } = values;

    const [checked, setChecked] = useState(false);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ cname, mail, job, xp, checked });
        companySubmit(values)
        select('next');
    }

    return (
        <div className="container_company">
            <div className="body_company">
                <form onSubmit={(e) => checked ? handleSubmit(e) : e.preventDefault()}>
                    <h2>Add Your Personal Details</h2>
                    <h6>Lorem ipsium is Dummy Text of printing Type industry</h6>
                    <div className="form-body_comp">

                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload Company Logo
                            </Button>
                        </label>


                        <TextField required
                            id="Company-Name"
                            label="Company-Name"
                            onInput={handleChange("cname")}
                            value={userData && userData.companyData && userData.companyData.cname} />

                        <TextField required
                            id="Email"
                            label="Email"
                            type="email"
                            onInput={handleChange("mail")}
                            value={userData && userData.companyData && userData.companyData.cname} />

                        <TextField required
                            id="Job-Title"
                            label="Job-Title"
                            onInput={handleChange("job")}
                            value={userData && userData.companyData && userData.companyData.job} />

                        <TextField required
                            id="Experiance"
                            label="Experiance"
                            onInput={handleChange('xp')}
                            value={userData && userData.companyData && userData.companyData.xp} />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={() => setChecked(prevProps => !prevProps)}
                                    name="Accept Signin"
                                />
                            }
                            label="I have Accepted"
                        />

                        <Button onClick={() => select('back')}>Back</Button>
                        <Button style={{ background: 'orange' }} type="submit">Next</Button><br></br>

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
        companySubmit: (name) => dispatch(companySubmit(name))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Company);