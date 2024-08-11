import React, { useState, createContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import CrmStats from './CrmStats';
//import DealForecastBar from './DealForecastBar';
//import DealStorageFunnel from './deal-storage-funnel/DealStorageFunnel';
import MostLeads from './most-leads/MostLeads';
import Revenue from './revenue/Revenue';
import DealVsGoal from './deal-vs-goal/DealVsGoal';
import DealForeCast from './deal-forecast/DealForeCast';
import DealForeCast2 from './deal-forecast2/DealForeCast';
//import LocationBySession from './LocationBySession/LocationBySession';
//import AvgCallDuration from './avg-call-duration/AvgCallDuration';
//import LeadConversation from './lead-conversation/LeadConversation';
//import ToDoList from './ToDoList';
//import RecentLeads from './recent-leads/RecentLeads';
import Greetings from './greetings/Greetings';

import Logins from './greetings/Logins';
import Users from './Users';

export const AppContext = createContext(null);

const Crm = () => {
  const [username, setUsername] = useState("");
  const [salesteamid, setSalesteamID] = useState("");
  const [salesstartdate, setSalesstartdate] = useState("");
  const [salesenddate, setSalesenddate] = useState("");

  return (
    <>
      <AppContext.Provider 
        value=
          {{ 
          salesteamid, setSalesteamID, 
          salesstartdate, setSalesstartdate,
          salesenddate, setSalesenddate 
          }}>

        <Greetings />
        <Row className="g-3 mb-3">
          <Col xxl={3}>
            <MostLeads />
          </Col>
          <Col xxl={9}>
            {/* <CrmStats /> */}
            <Revenue />
            <br></br>
              <DealForeCast2 title="Deal Forecast by Owner2"/>
            <br></br>
            <AppContext.Provider value={{ username, setUsername }}>
              <Logins />
              <Users />
            </AppContext.Provider>
          </Col>
          {/* <Col xxl={15}>
            <DealForeCast2 />
          </Col> */}
          
          {/* <Col md={12} xxl={8}>
            <DealForecastBar />
          </Col>
          <Col xxl={4}>
            <DealStorageFunnel />
          </Col> */}
          {/* <Col xxl={6}>
            <DealVsGoal />
          </Col> */}
          {/* <Col xxl={6}>
            <DealForeCast />
          </Col> */}

          {/* <Col xxl={6}>
            <DealForeCast2 />
          </Col> */}
        </Row>
        {/* <Row className="g-3 mb-3">
          <Col lg={7}>
            <LocationBySession />
          </Col>
          <Col lg={5}>
            <Row className="g-3">
              <Col xs={12}>
                <AvgCallDuration />
              </Col>
              <Col xs={12}>
                <LeadConversation />
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* <Row className="g-3">
          <Col lg={5}>
            <ToDoList />
          </Col>
          <Col lg={7}>
            <RecentLeads />
          </Col>
        </Row> */}
      </AppContext.Provider>
    </>
  );
};

export default Crm;
