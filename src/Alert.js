import React, { useEffect } from 'react';

const Alert = ({ type, msg }) => {
  return <p className={type}>{msg}</p>;
};

export default Alert;
