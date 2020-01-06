import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Sass.scss';

function App() {
  return (
    <section className="bg-dark">
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="who">
                <h1>Vadim Radermacher</h1>
                <small>Junior Web Developper</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-light">
        <div className="container">
          <Row>
            <Col lg={3}>
              <Dropdown className="dropdown dd-1">
                <Dropdown.Toggle variant="lightblue" className="w-100" id="dropdown-basic">
                  <h2>Bootstrap</h2>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                  <ul className="list-unstyled">
                    <li className="bg-light">Système de grid <FontAwesomeIcon icon={faCheck} className="text-lightblue"></FontAwesomeIcon></li> 
                    <li>Compréhension de tous les Components <FontAwesomeIcon icon={faCheck} className="text-lightblue"></FontAwesomeIcon></li>
                    <li className="bg-light">Override des classes <FontAwesomeIcon icon={faCheck} className="text-lightblue"></FontAwesomeIcon></li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
              <Dropdown className="dropdown dd-2">
                <Dropdown.Toggle variant="pink" className="w-100" id="dropdown-basic">
                  <h2>Sass</h2>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2 dd-menu w-100">
                  <ul className="list-unstyled">
                    <li>Variables, mixins<FontAwesomeIcon icon={faCheck} className="text-pink pl-1"></FontAwesomeIcon></li>
                    <li>Fonctions, maps <FontAwesomeIcon icon={faCheck} className="text-pink pl-1"></FontAwesomeIcon></li>
                    <li>Extend, include, ... <FontAwesomeIcon icon={faCheck} className="text-pink pl-1"></FontAwesomeIcon></li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
            <Dropdown className="dropdown dd-2">
                <Dropdown.Toggle variant="orange" className="w-100" id="dropdown-basic">
                  <h2>HTML</h2>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                  <ul className="list-unstyled">
                    <li>Système de grid</li>
                    <li>Compréhension de tous les Components</li>
                    <li>Override des classes</li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
            <Dropdown className="dropdown dd-2">
                <Dropdown.Toggle variant="darkblue" className="w-100" id="dropdown-basic">
                  <h2>CSS</h2>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                  <ul className="list-unstyled">
                    <li>Système de grid</li>
                    <li>Compréhension de tous les Components</li>
                    <li>Override des classes</li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          
          </Row>
        

        </div>
      </div>
    </section>
  );
}

export default App;
