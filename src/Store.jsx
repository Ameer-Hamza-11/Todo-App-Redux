import { createStore } from "redux"
//Step 1: Create Reducer
//Reducer: pure function that takes the previous state and an action, and returns the next state
const ADD_TASK = 'task/add'
const DEL_TASK = 'task/del'


const initialState = {
    task: [],
}

//Reducer Function
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DEL_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                task: updatedTask
            }
        default:
            return state
    }
}

//Initial State
//Step 2: Create Store
//Store: object that holds the application state
export const store = createStore(taskReducer);
console.log('Initial State: ', store.getState());


//1st Method: directingly dispatching action
//Update State
// store.dispatch({type: ADD_TASK, payload: 'Hamza'})
// console.log('Updated State: ',store.getState());


// //Update State
// store.dispatch({type: ADD_TASK, payload: 'Muied'})
// console.log('Updated State: ',store.getState());



//Deleted State
// store.dispatch({type: DEL_TASK, payload:1})
// console.log('Deleted State: ',store.getState());


//2nd Method: using action creator
//Action Creator: function that returns an action
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}




store.dispatch(addTask('Wake up at 7:00 AM'))
console.log('Updated State: ', store.getState());

store.dispatch(addTask('Shower at 7:30 AM to 7:59 AM'))
store.dispatch(addTask('Breakfast at 8:00 AM to 8:15 AM'))
store.dispatch(addTask('Go to Work at 9:00 AM to 5:00 PM'))
console.log('Updated State: ', store.getState());

export const deleteTask = (id) => {
    return { type: DEL_TASK, payload: id }
}

// store.dispatch(deleteTask(1))
console.log('Deleted State: ',store.getState());



