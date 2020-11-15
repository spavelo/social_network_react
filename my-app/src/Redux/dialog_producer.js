const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
    dialogs: [
        {name: "Alex", id: 1},
        {name: "Oleg", id: 2},
        {name: "Lo", id: 3},
        {name: "Lena", id: 4},
        {name: "Po", id: 5},
    ],
    messages: [
        {id: 1, message: 'Hi, there!'},
        {id: 2, message: 'Hello, everyone!'},
        {id: 3, message: 'Hi, guys!'},
    ],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            debugger
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: Math.random(), message: state.newMessageText})
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText
            return stateCopy
        }

        default:
            return state
    }
}

export const addMessage = (text) => ({type: ADD_MESSAGE, message: text})
export const updateMessage = (text) => ({type: UPDATE_MESSAGE, newText: text})

export default dialogReducer