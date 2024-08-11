import React, { useState } from "react";
import Select from 'react-select'
import { Col, Form } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const GreetingsCustomer = () => {
  const [value, setValue] = useState(null);

  const organizerOptions = [
    { value: '1', label: ' Massachusetts Institute of Technology' },
    { value: '2', label: 'University of Chicago' },
    { value: '3', label: 'GSAS Open Labs At Harvard' },
    { value: '4', label: 'California Institute of Technology' }
  ];

  

  return (
    <>
    <Select
      closeMenuOnSelect={false}
      options={organizerOptions}
      placeholder='Select...'
      isMulti
      classNamePrefix="react-select"
      value={value}
      onChange={value => setValue(value)}
    />
   {console.log('you select : ', value)}
   </>
    // <DropdownMultiselect
    //     options={["Australia", "Canada", "USA", "Poland", "Spain", "France", "AAAA", "BBBB", "CCCCC", "DDDDDD", "EEEEEE", "GGGGGG", "HHHHHHH", "IIIIIIII", "J", "K", "L", "M"]}
    //     name="countries"
    // />
  )
}

export default GreetingsCustomer