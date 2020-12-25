import React, { useState } from 'react'
import { connect } from 'react-redux';
import Company from '../Company/Company';
import Personal from '../Personal/Personal';
import Verify from '../Verify/Verify';
import './Tabs.css'

const Tabs = ({userData}) => {
    

    const [currentTab, setCurrentTab] = useState('Personal');

    const handleNexttoCompany = (val) => {
        val && setCurrentTab('Company')
    }

    const handleComapnyNav = (val) => {
        val === 'next' ? setCurrentTab('Verification') : setCurrentTab('Personal')
    }

    const handleVerifyNav = (val) => {
        val === 'back' && setCurrentTab('Company')
    }

    const toggleTab = () => {
        switch (currentTab) {
            case 'Personal':
                return <Personal select={(val)=>handleNexttoCompany(val)}/>;
            case 'Company':
                return <Company select={(val)=>handleComapnyNav(val)}/>;
            case 'Verification':
                return <Verify select={(val)=>handleVerifyNav(val)}/>;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="tabs">
                <h3 style={
                    currentTab === "Personal" ?
                        { color: "white" } : { color: "#535C68" }}
                    onClick={() => setCurrentTab('Personal')}>
                    1.Personal Details
                </h3>
                <h3 style={
                    currentTab === "Company" ?
                        { color: "white" } : { color: "#535C68" }}
                    onClick={() => userData.isPersonalDone && setCurrentTab('Company')}>
                    2.Company Details
                    </h3>
                <h3
                    style={
                        currentTab === "Verification" ?
                            { color: "white" } : { color: "#535C68" }}
                    onClick={() => userData.isCompanyDone && setCurrentTab('Verification')}>
                    3.Verification
                </h3>
            </div>
            {toggleTab()}
        </div>
    )
}


const mapStatetoProps = state => {
    return {
        userData: state
    }
}

export default connect(mapStatetoProps)(Tabs)