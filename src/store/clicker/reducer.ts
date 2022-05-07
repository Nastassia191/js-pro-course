import cloneDeep from "lodash.clonedeep";
import { ClickerActionType, ClickerActionTypes, ClickerStateType } from "./types";


const initialState: ClickerStateType = {
  value: 0,
}

export const clickerReducer = (state = initialState, action: ClickerActionType): ClickerStateType => {
  switch (action.type) {
    case ClickerActionTypes.SET_VALUE: {
      const clone = cloneDeep(state);
      clone.value = action.payload;
      return clone;
    }
    case ClickerActionTypes.SHIFT_VALUE: {
      const clone = cloneDeep(state);
      clone.value = state.value + action.payload;
      return clone;

    }

    default: return state;
  }
}

