import React, { useState, useEffect, createContext, useContext } from 'react'
import { GreetingsDate } from './GreetingsDate';

import { AppContext } from '..';

// สร้าง Context
// export const DataContext = createContext();

const GreetingsTeamSales = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const { setSalesteamID } = useContext(AppContext);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3aWNoYXJhLmgyOSIsImZhbWlseV9uYW1lIjoi4Lin4Li04LiK4Lij4LiwIOC4q-C4reC4oeC4m-C4o-C4sOC5hOC4nuC4ouC5jCIsImp0aSI6IjQ2YmE3OTA3LWIyODktNDJhNi1hODFmLWRkY2M0OTNlMTViYiIsImV4cCI6MTcxNDcyNTI2MiwiaXNzIjoic3J0eXJlcy5jb20iLCJhdWQiOiJzcnR5cmVzLmNvbSJ9._snm1dKdfvHzm8ZgLVvH1onxhXRglYu2ZHGn89GF6p8");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("http://10.1.88.177:5000/api/Salesteam/ShowSalesteam", requestOptions)
        .then((response) => response.json())
        .then(data => setOptions(data))
        .catch((error) => console.error(error));

    }, [])

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        console.log("you select : ", e.target.value);
        let myselect = e.target.value;
        console.log("you select2 : ", myselect);
        setSalesteamID(myselect);
    };


  return (
    <div>
        <select className="form-select form-select-sm js-choice" id="organizerSingle" size="sm" name="organizerSingle" data-options='{"removeItemButton":true,"placeholder":false}' value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select sales team...</option>
            {options.map(option => (
                <option 
                key={option.EmpTeamID} 
                value={option.EmpTeamID}>{option.EmpTeamName}</option>
            ))}
        </select>
        
    </div>
    
  )
}

export default GreetingsTeamSales