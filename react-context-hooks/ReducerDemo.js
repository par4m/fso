import { createContext, useState, useReducer } from 'react'


const AgeContext = createContext();


const ageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'ADD_FIVE':
      return state + 5;
    case 'ADD_NUM':
      return state + action.num;
    default:
      return state;
  }
}

dispatch({ type: 'ADD_ONE' });
dispatch({ type: 'ADD_ONE', num: 7 });

const AgeContextProvider = (props) => {
  // const [age, setAge] = useState(20);
  //
  const [age, dispatch] = useReducer(ageReducer, 20)
  //
  // const addOneToAge = () => setAge(age + 1);
  // const addFiveToAge = () => setAge(age + 5);
  //
  // const addNumtoAge = (num) => setAge(age + num);
  //
  // value = {
  //   age, setAge, addFiveToAge, addOneToAge, addNumtoAge
  // }

  return (


    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  )

}
