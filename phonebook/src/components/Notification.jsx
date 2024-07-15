import React from "react";

const Notification = ({ message }) => {
  if (message == null) {
    console.log("Message null");
    return null;
  }
  return <div className='notif'>{message}</div>;
};

export default Notification;
