import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import SimpleBar from 'simplebar-react';
import { Table } from 'react-bootstrap';
//import DealForeCastTable from './DealForeCastTable';
//import { dealForecastByOwnerData } from 'data/dashboard/crm';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SimpleLogin from 'components/authentication/simple/Login';

import { AppContext } from '..';

const DealForeCast = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const { salesteamid } = useContext(AppContext);

  console.log("DealForeCast รับค่า SalesTeamID : ", salesteamid);

  useEffect(() => {
    const apiUrl = 'http://10.1.88.177:5000/api';

    // Login
    const axios = require('axios');
    let data = JSON.stringify({
      "username": "wichara.h29",
      "password": "P$ssw0rd"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://10.1.88.177:5000/api/Login2',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      //console.log(JSON.stringify(response.data['token']));
      let jsonData = JSON.stringify(response.data);
      let accessToken = JSON.parse(jsonData);
      //console.log('decodeData.token : ', accessToken.token);
      
      //ดึงข้อมูล โดยอ้างอิง token
      const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
          Authorization: `Bearer ${accessToken.token}`
        }
      })

      authAxios.post(`/Post/GetPost`)
        .then((res) => {
          setItems(res.data);
          //console.log(`RESPONSE RECEIVED: `, res.data);
          // console.log("useInfo : ", useInfo);
        })
        .catch((err) => {
          console.log(`AXIOS ERROR: `, err);
        })

      //navigate('/authentication/simple/login');
      
    })
    .catch((error) => {
      console.log(error);
    });

  }, []);

  const itemss = items.map(item => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.title}</td>
        <td>{item.post}</td>
        <td>{item.posta}</td>
        <td>{item.postb}</td>
        {/* <td>
          <div style={{width:"110px"}}>
            <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
            {' '}
            <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>
          </div>
        </td> */}
      </tr>
      )
    })

  

  return (
    <Card className="overflow-hidden">
      {/* <FalconCardHeader title="Deal Forecast by Owner2" titleTag="h6" /> */}
      <FalconCardHeader title={props.title + ' ' + salesteamid} titleTag="h6" />
      <Card.Body className="p-0">
        {/* <DealForeCastTable data={dealForecastByOwnerData} /> */}
        <SimpleBar>
          <Table className="fs-10 mb-0">
            <thead className="bg-200">
              <tr>
                <th className="text-800 text-nowrap">ID</th>
                <th className="text-800 text-nowrap">Title</th>
                <th className="text-800 text-nowrap">Post</th>
                <th className="text-800 text-nowrap">Posta</th>
                <th className="text-800 text-nowrap">Postb</th>
              </tr>
            </thead>
            <tbody>
              {/* {itemss} */}
              {items.map(item => (
                <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.post}</td>
                <td>{item.posta}</td>
                <td>{item.postb}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </SimpleBar>
      </Card.Body>
    </Card>
  );
};

export default DealForeCast;

