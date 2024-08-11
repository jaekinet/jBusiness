import React, { forwardRef, useEffect, useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '..';

const GreetingsDateInput = forwardRef(({ value, onClick }, ref) => (
  <div className="position-relative">
    <Form.Control
      size="sm"
      ref={ref}
      onClick={onClick}
      value={value}
      className="ps-4"
      onChange={e => {
        console.log({ e });
      }}
    />
    <FontAwesomeIcon
      icon="calendar-alt"
      className="text-primary position-absolute top-50 translate-middle-y ms-2"
    />
    {/* <p>Selected date: {startDate && startDate.toDateString()}</p> */}
    
  </div>
));

const GreetingsDate = () => {
  const date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(date.setDate(date.getDate() + 7));

  const { setSalesstartdate } = useContext(AppContext);
  const { setSalesenddate } = useContext(AppContext);

  const onChange = dates => {
    const [start, end] = dates;
    
    setStartDate(start);
    setEndDate(end);
    
  };

  return (
    <>
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      formatWeekDay={day => day.slice(0, 3)}
      endDate={endDate}
      selectsRange
      dateFormat="MMM dd"
      customInput={<GreetingsDateInput />} />
      {console.log('Start Date : ', startDate)}
      {console.log('End Date : ', endDate)}
      {
        setSalesstartdate(startDate)
      }
      {
        setSalesenddate(endDate)
      }
    </>
  );
};

GreetingsDateInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default GreetingsDate;
