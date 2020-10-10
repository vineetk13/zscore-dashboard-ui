
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopErrors from './topErrors';
import AssignedToMe from './assignedToMe';
import BusinessImpact from './businessImpact';

import ActivityStream from './activityStream';
import ChartComponent from './chartComponent';
import DonutComponent from './donutComponent';
import DonutComponentTwo from './donutComponentTwo';

import '../sections.css';

export function Dashboard(){
    return(
        <Container>
        <Row><Col><ChartComponent /></Col></Row>
        <Row xs="3">
          <Col><DonutComponentTwo /></Col>
          <Col><h4 style={{display:"inline"}}>Top Errors</h4><span className="more" >MORE &#129170;</span><TopErrors /></Col>
          <Col><h4 style={{display:"inline"}}>Assigned to me</h4><span className="more">MORE &#129170;</span><AssignedToMe/></Col>
        </Row>
        <Row xs="3"> 
          <Col><DonutComponent /></Col>
          <Col><h4 style={{display:"inline"}}>Highest Business Impact</h4><span className="more" >MORE &#129170;</span><BusinessImpact /></Col>
          <Col><h4 style={{display:"inline"}}>Activity Stream</h4><span className="more" >MORE &#129170;</span><ActivityStream /></Col>
        </Row>
        </Container>
    )
}