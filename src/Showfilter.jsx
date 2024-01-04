import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = () => {
  const [showFilters, setShowFilters] = useState(true);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div style={{ marginLeft: '10px', padding: '10px' }}>
        <input type="checkbox" onClick={toggleFilters} /> {showFilters ? 'HIDE' : 'SHOW'} FILTER
        {showFilters && (
          <>
            <div style={{ marginLeft: '10px' }}>
              
              <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Bab & Kids</Dropdown.Item>
          </Dropdown.Menu>
        
        <hr/>
        
        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            OCCASION
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Bab & Kids</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>

        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            WORK
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">SPORTS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RUNNING</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">GYMING</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>

        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            FABRIC
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">COTTON</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SYNTHETIC</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">WOOLEN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>

        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            SEGMENT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">HEAVY</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LIGHT</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">MEDIUM</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>


        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            SUITABLE FOR
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Bab & Kids</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>

        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            RAW MATERIALS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Women</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Bab & Kids</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>


        <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >
            PATTERN
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">DESIGN</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PLAIN</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">HAND WORK</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>
        </div>
        </>
        )}
      </div>
    </>
    );
};

export default Filter;