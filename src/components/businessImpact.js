import React from 'react';
import { ListGroup, ListGroupItem,ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import '../sections.css';

const BusinessImpact = (props) => {
  return (
    <ListGroup>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">Premium less than zero <Badge color="danger" pill>HIGH</Badge><span style={{color:"red"}} className="values">1500</span></ListGroupItemHeading>
            <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading justify-content-between">Sum insured less than zero <Badge color="danger" pill>HIGH</Badge><span style={{color:"red"}} className="values">1500</span></ListGroupItemHeading>
            <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">Incorrect city names & address <Badge color="warning" pill>MEDIUM</Badge><span style={{color:"orange"}} className="values">1500</span></ListGroupItemHeading>
            <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">Discharge date before admission date <Badge color="danger" pill>HIGH</Badge><span style={{color:"red"}} className="values">1500</span></ListGroupItemHeading>
            <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>        
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">Wrong telephone numbers <Badge color="success" pill>LOW</Badge><span style={{color:"green"}}className="values">1500</span></ListGroupItemHeading>
            <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
        </ListGroupItem>
    </ListGroup>
  );

}

export default BusinessImpact;

