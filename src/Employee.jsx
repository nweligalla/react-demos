import React from "react";

//accept props
const Employee = (props) => {

   console.log(props); 
  // destucturing props
  const { firstName, lastName: ln } = props;
  return (
    <>
      <h6> {`Employee name : ${firstName} ${ln}.`}</h6>
    </>
  );
};

export default Employee;
