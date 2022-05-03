import React from 'react';

function Button ({innerText, type, disabledValue}) {
  return (<button type={type} onClick={(e) => console.log(e.target.innerText)} disabled={disabledValue}>{innerText}</button>);
}

export default Button;