import React from 'react'
import {NavLink} from 'react-router-dom'

const LoginFrom = ()=> {
    return (
      <>
      <NavLink to="/student/login"><button className="btn btn-danger" >STUDENT</button></NavLink>
      <NavLink to="/teacher/login"><button className="btn btn-success ml-3">TEACHER</button></NavLink>
      </>
    );
}

export default LoginFrom;