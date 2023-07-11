const redux = require('redux');
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
const reduxLogger=require('redux-logger')

const logger=reduxLogger.createLogger()







const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'first redux action'
    }
}

const initialStateOfCake = {
    noOfCake:10
}


const initialStateOfIcecream={
    noOfIceCream:20
}

// const reducer=(state=initialState,action)=>{
//     switch(action.type) {
//         case BUY_CAKE:return{
//             ...state,
//             noOfCake:state.noOfCake-1
//         }
//         default:return state

//     }
// }


const  cakeReducer=(state=initialStateOfCake,action)=>{
    switch(action.type) {
                case BUY_CAKE:return{
                    ...state,
                    noOfCake:state.noOfCake-1
                }
                default:return state
        
            }
}

const iceCreamReducer=(state=initialStateOfIcecream,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            noOfIceCream:state.noOfIceCream-1
        }
        default:return state
    }
}


const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store=createStore(rootReducer)


console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=>console.log("updated value",store.getState()))
store.dispatch(buyCake())
store.dispatch(iceCream())

unsubscribe();
