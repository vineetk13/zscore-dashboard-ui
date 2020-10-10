import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faCodeBranch, faPlayCircle, faBug, faCommentDots, faChartLine, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ZSCORE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink ><FontAwesomeIcon icon={faServer} style={{color:"black"}}/> Data Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><FontAwesomeIcon icon={faCodeBranch} style={{color:"black"}}/> Workflows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><FontAwesomeIcon icon={faPlayCircle} style={{color:"black"}}/> Scheduler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><FontAwesomeIcon icon={faBug} style={{color:"black"}}/> Error Manager</NavLink>
            </NavItem>
            <NavItem>
            <NavLink><FontAwesomeIcon icon={faCommentDots} style={{color:"black"}}/> Notifications</NavLink>
            </NavItem>
            <NavItem>
            <NavLink><FontAwesomeIcon icon={faChartLine} style={{color:"black"}}/> Reports</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <FontAwesomeIcon icon={faQuestionCircle} style={{color:"black",marginRight:"8px"}} size="lg"/>
            <FontAwesomeIcon icon={faUserCircle} style={{color:"black"}} size="lg"/>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;