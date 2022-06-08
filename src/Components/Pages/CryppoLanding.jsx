import React from "react";
import styled from "styled-components";
import { container } from "../../theme";
import {useDispatch, useSelector} from 'react-redux'
import {operationSlice} from "../../Redux/operationSlice"
const Text = styled.div`
  ${container}
`;
export default function CryppoLanding() {
    const {count} = useSelector(state => state.operationr)
    const {increment, decrement} = operationSlice.actions;
    const dispatch = useDispatch();
  return (
    <div className="main container">
        {/*<div className="cryppo">Страница в разработке</div>*/}
        <button onClick={()=> dispatch(increment())}>+</button>
        <div>{count}</div>
        <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}
