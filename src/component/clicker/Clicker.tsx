import React from "react";
import { useDispatch } from "react-redux";
//import actions from "../../store/actions";
import { useActions } from "../hooks/useActions";
//import { setValue, shiftValue } from "../../store/clicker/actionCreators";

import { useSelector } from "../hooks/useSelector";



const Clicker: React.FC = () => {

  const count = useSelector(state => state.clicker.value)

  const { setValue, shiftValue } = useActions();
  // const count = useSelector((state: any) => state.clicker.value); 
  //const dispatch = useDispatch();

  //const reset = () => dispatch(x.setValue(0));
  const reset = () => setValue(0);
  const increment = () => shiftValue(1);
  const decriment = () => shiftValue(- 1);


  return (
    <div>
      <button onClick={reset}>
        reset
      </button>
      <button onClick={decriment}>
        -
      </button>
      <span>
        {count}
      </span>

      <button onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Clicker;