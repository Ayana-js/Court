const SET_CASES = 'SET_CASES'
const SET_DEBTOR = 'SET_DEBTOR'

const initialState = {
    cases: null,
    debtor: null
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
        default:
            return state
    }
}

export const setCases = (cases) => ({ type: SET_CASES, cases })
export const setDebtor = (debtor) => ({ type: SET_DEBTOR, debtor })

export default reducer