import React from 'react'


const Styling=({ status }) => {
  let message = ""
  let style = {};
  if (status === "success") {
    message = 'Operation Successful';
    style = { backgroundColor: 'green', color: 'white', padding: '10px', textAlign: 'center' };
  } else if (status === 'error') {
    message = 'Operation Failed';
    style = { backgroundColor: 'red', color: 'white', padding: '10px', textAlign: 'center' };
  } 
  else {
    message = 'Pending...';
    style = { backgroundColor: 'yellow', color: 'black', padding: '10px', textAlign: 'center' };
  }

  return <div style={style}>{message}</div>;
};




export default Styling