import {createContext,useContext,useReducer} from 'react';

const initialState={
    Books:[]
}
export const BookContext =createContext(null)

const BookContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(RootReducer,initialState);
  return <BookContext.Provider value={{...state,dispatch}}>
      {children}
  </BookContext.Provider>;
};

export default BookContextProvider;

const RootReducer =(state,action)=>{
    switch(action.type){
        case "ADD_BOOK":
            return {
                Books:[...action.payload]
            }
        default:
            return state;
    }
}