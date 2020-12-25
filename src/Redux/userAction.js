import { COMPANY_SUBMIT, FINAL_SUBMIT, PERSONAL_SUBMIT } from "./userType"

export const personalSubmit = (data) => {
    return{
        type:PERSONAL_SUBMIT,
        payLoad:data
    }
}

export const companySubmit = (data) => {
    return{
        type:COMPANY_SUBMIT,
        payLoad:data
    }
}

export const finalSubmit = (data) => {
    return{
        type:FINAL_SUBMIT,
        payLoad:data
    }
}