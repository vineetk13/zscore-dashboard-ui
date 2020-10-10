import React from 'react';
import { ListGroup, ListGroupItem,ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import '../sections.css';


const AssignedToMe = (props) => {
  return (
    <ListGroup>
    <ListGroupItem className="listItem">
    <ListGroupItemHeading className="section-heading">Premium less than zero <Badge color="danger" pill>HIGH</Badge></ListGroupItemHeading>
    <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
    <ListGroupItemHeading className="section-heading">Sum insured less than zero <Badge color="danger" pill>HIGH</Badge></ListGroupItemHeading>
    <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
    <ListGroupItemHeading className="section-heading">Incorrect city names & address <Badge color="warning" pill>MEDIUM</Badge></ListGroupItemHeading>
    <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
    <ListGroupItemHeading className="section-heading">Discharge date before admission date <Badge color="danger" pill>HIGH</Badge></ListGroupItemHeading>
    <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>        
</ListGroupItem>
<ListGroupItem>
    <ListGroupItemHeading className="section-heading">Wrong telephone numbers <Badge color="success" pill>LOW</Badge></ListGroupItemHeading>
    <ListGroupItemText className="section-body">MARKETING WORKFLOW 1</ListGroupItemText>
</ListGroupItem>
    </ListGroup>
  );

}

export default AssignedToMe;

