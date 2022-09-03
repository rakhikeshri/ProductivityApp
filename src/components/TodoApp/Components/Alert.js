import React,{ useEffect } from 'react';
import '../todo.css'

const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        removeAlert()
      }, 3000)
      return () => clearTimeout(timeout);
      // eslint-disable-next-line
    },[list])
    return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert