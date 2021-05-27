import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Logedout } from "../actions";

const Logout = () => {

const dispatch= useDispatch();
const user = useSelector(state => state.user);
const handleLogout = (e) =>{
  e.preventDefault();
  dispatch(Logedout());
  };
  return (
        <div>
          {user.name.name}
          <button onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
