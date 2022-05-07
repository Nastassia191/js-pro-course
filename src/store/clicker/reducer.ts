import { createReducer } from "@reduxjs/toolkit";
//import cloneDeep from "lodash.clonedeep";
import { setValue, shiftValue } from "./actionCreators";
import { ClickerActionType, ClickerActionTypes, ClickerStateType } from "./types";


const initialState: ClickerStateType = {
  value: 0,
}

export const clickerReducer = createReducer(initialState, {
  [ClickerActionTypes.SET_VALUE]: (state, action: ClickerActionType) => {
    //const clone = cloneDeep(state);
    state.value = action.payload;
    // return state;
  },
  [ClickerActionTypes.SHIFT_VALUE]: (state, action: ClickerActionType) => {
    //const clone = cloneDeep(state);
    state.value = state.value + action.payload;
    // return state; 
  },
});

// export const _clickerReducer = (state = initialState, action: ClickerActionType): ClickerStateType => {
//   switch (action.type) {
//     case setValue.type: {
//       const clone = cloneDeep(state);
//       clone.value = action.payload;
//       return clone;
//     }
//     case shiftValue.type: {
//       const clone = cloneDeep(state);
//       clone.value = state.value + action.payload;
//       return clone;

//     }

//     default: return state;
//   }
// }

