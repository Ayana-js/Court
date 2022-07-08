const SET_CASES = 'SET_CASES'
const SET_DEBTOR = 'SET_DEBTOR'
const SET_ERROR = 'SET_ERROR'

const initialState = {
    cases: null,
    debtor: null,
    error: false
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_CASES:
            return {
                ...state,
                cases: action.cases
            }
        case SET_DEBTOR:
            return {
                ...state,
                debtor: action.debtor
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const setCases = (cases) => ({ type: SET_CASES, cases })
export const setDebtor = (debtor) => ({ type: SET_DEBTOR, debtor })
export const setError = (payload) => ({ type: SET_ERROR, payload })

export default reducer