import { COMPANY_SUBMIT, FINAL_SUBMIT, PERSONAL_SUBMIT } from "./userType"

const initState = {
    loading: false,
    isPersonalDone: false,
    isCompanyDone: false,
    isFinalDone: false,
    personalData: {},
    companyData: {},
    finalSubmit: ''
}

export const userReducer = (state = initState, action) => {

    switch (action.type) {

        case PERSONAL_SUBMIT:
            return {
                ...state,
                personalData: action.payLoad,
                isPersonalDone: true
            }

        case COMPANY_SUBMIT:
            return {
                ...state,
                companyData: action.payLoad,
                isCompanyDone: true
            }

        case FINAL_SUBMIT:
            return {
                ...state,
                finalSubmit: action.payLoad,
                personalData: {}, 
                companyData: {},
                isFinalDone: true
            }

        default:
            return state
    }
}