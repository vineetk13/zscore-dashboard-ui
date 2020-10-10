import React from 'react';
import { ListGroup, ListGroupItem,ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faCodeBranch, faPlayCircle, faBug, faCommentDots, faChartLine, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../sections.css';

const ActivityStream = (props) => {
  return (
    <ListGroup>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">
                <FontAwesomeIcon icon={faCodeBranch} style={{color:"black"}}/> Workflow - Marketing data 1
                <span style={{color:"#99AAAB"}} className="values">Today</span>
            </ListGroupItemHeading>
            <ListGroupItemText className="section-body">Finished running and 10,000 errors have been detected</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">
                <FontAwesomeIcon icon={faServer} style={{color:"black"}}/> Data Library - earthquakes.csv added
                <span style={{color:"#99AAAB"}} className="values">Today</span>
            </ListGroupItemHeading>
            <ListGroupItemText className="section-body">earthquakes.csv added and data profiling begun</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">
                <FontAwesomeIcon icon={faCommentDots} style={{color:"black"}}/> @deleeps tagged you in a comment
                <span style={{color:"#99AAAB"}} className="values">Today</span>
            </ListGroupItemHeading>
            <ListGroupItemText className="section-body">Have a look at this dataset and see it...more</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">
                <FontAwesomeIcon icon={faBug} style={{color:"black"}}/> Error - 10,000 errors detected
                <span style={{color:"#99AAAB"}} className="values">Today</span>
            </ListGroupItemHeading>
            <ListGroupItemText className="section-body">New errors detected in Marketing data 1</ListGroupItemText>        
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading className="section-heading">
            <FontAwesomeIcon icon={faPlayCircle} style={{color:"black"}}/> Job - Marketing data 1 successfully run
            <span style={{color:"#99AAAB"}} className="values">Today</span>
            </ListGroupItemHeading>
            <ListGroupItemText className="section-body">Finished running and 10,000 errors have been detected</ListGroupItemText>
        </ListGroupItem>
    </ListGroup>
  );

}

export default ActivityStream;

