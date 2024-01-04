import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Showfilter from './Showfilter'


const Lorem = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '50px 30px',
      }}>
        <h1 style={{
          font: '100px'
        }}>Discover Your Products</h1>
        <p style={{
          fontSize: '20px',
          fontWeight: '500',
          marginTop: '30px'
        }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <hr/>
      <div className="filters" style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 20px', 
      }}>
        <span style={{ 
          fontWeight: '600' ,
          marginRight:'80%'
        }}>3425 ITEMS</span>
        

        <span style={{ 
          fontWeight: '500'
        }}>
          <Dropdown data-bs-theme="Bright">
          <Dropdown.Toggle
            id="dropdown-button-white-example1"
            variant="secondary"
            style={{ backgroundColor: "white", color: "black", border:'none' }}
          >RECOMMENDED
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
            NEWEST FIRST
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">POPULAR</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PRICE: LOW TO HIGH</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">PRICE: HIGH TO LOW</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </span>
      </div>
      <hr />
    </>
  );
};

export default Lorem;
