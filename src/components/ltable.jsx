import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbarx from './navbar';

function LTable() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  return (
    <div className='ltable'>
        <Navbarx />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Letter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h2>அ</h2> 
            {/* <img src={require('../assets/speaker.png')} className='d-inline-block'></img> */}
            <p className='text-weight-light' style={{fontSize:"1.2em"}}>ä</p> 
            <br />
            <br /> 
            <h3>Examples:</h3> 
            <span style={{color:"red"}}>அ</span>டுப்பு - Stove <br />
            <span style={{color:"red"}}>அ</span>ழகு - Beauty <br />
            <span style={{color:"red"}}>அ</span>ளவு - Quantity
          </Offcanvas.Body>
        </Offcanvas>
        <Table striped bordered hover size="sm" className='mt-3' variant='secondary'>
        <thead>
            <tr style={{backgroundColor:"#67e8f9",cursor: "pointer"}}>
            <th scope="col"> </th>
            <th scope="col" onClick={handleShow}>அ</th>
            <th scope="col">ஆ</th>
            <th scope="col">இ</th>
            <th scope="col">ஈ</th>
            <th scope="col">உ</th>
            <th scope="col">ஊ</th>
            <th scope="col">எ</th>
            <th scope="col">ஏ</th>
            <th scope="col">ஐ</th>
            <th scope="col">ஒ</th>
            <th scope="col">ஓ</th>
            <th scope="col">ஔ</th>
            </tr>
        </thead>
        <tbody>
            <tr style={{cursor:"pointer"}}>
            <th scope="row">க்</th>
            <td>க</td>
            <td>கா</td>
            <td>கி</td>
            <td>கீ</td>
            <td>கு</td>
            <td>கூ</td>
            <td>கெ</td>
            <td>கே</td>
            <td>கை</td>
            <td>கொ</td>
            <td>கோ</td>
            <td>கௌ</td>
            </tr>
            <tr>
            <th scope="row">ங்</th>
            <td>ங</td>
            <td>ஙா</td>
            <td>ஙி</td>
            <td>ஙீ</td>
            <td>ஙு</td>
            <td>ஙூ</td>
            <td>ஙெ</td>
            <td>ஙே</td>
            <td>ஙை</td>
            <td>ஙொ</td>
            <td>ஙோ</td>
            <td>ஙௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ச்</th>											
            <td>ச</td>
            <td>சா</td>
            <td>சி</td>
            <td>சீ</td>
            <td>சு</td>
            <td>சூ</td>
            <td>செ</td>
            <td>சே</td>
            <td>சை</td>
            <td>சொ</td>
            <td>சோ</td>
            <td>சௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>											
            <th scope="row">ஞ்</th>  
            <td>ஞ</td>
            <td>ஞா</td>
            <td>ஞி</td>
            <td>ஞீ</td>
            <td>ஞு</td>
            <td>ஞூ</td>
            <td>ஞெ</td>
            <td>ஞே</td>
            <td>ஞை</td>
            <td>ஞொ</td>
            <td>ஞோ</td>
            <td>ஞௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ட்</th> 	
            <td>ட</td>
            <td>டா</td>
            <td>டி</td>
            <td>டீ</td>
            <td>டு</td>
            <td>டூ</td>
            <td>டெ</td>
            <td>டே</td>
            <td>டை</td>
            <td>டொ</td>
            <td>டோ</td>
            <td>டௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ண்</th>
            <td>ண</td>
            <td>ணா</td>
            <td>ணி</td>
            <td>ணீ</td>
            <td>ணு</td>
            <td>ணூ</td>
            <td>ணெ</td>
            <td>ணே</td>
            <td>ணை</td>
            <td>ணொ</td>
            <td>ணோ</td>
            <td>ணௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">த்</th>
            <td>த</td>
            <td>தா</td>
            <td>தி</td>
            <td>தீ</td>
            <td>து</td>
            <td>தூ</td>
            <td>தெ</td>
            <td>தே</td>
            <td>தை</td>
            <td>தொ</td>
            <td>தோ</td>
            <td>தௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ந்</th>
            <td>ந</td>
            <td>நா</td>
            <td>நி</td>
            <td>நீ</td>
            <td>நு</td>
            <td>நூ</td>
            <td>நெ</td>
            <td>நே</td>
            <td>நை</td>
            <td>நொ</td>
            <td>நோ</td>
            <td>நௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ப்</th>
            <td>ப</td>
            <td>பா</td>
            <td>பி</td>
            <td>பீ</td>
            <td>பு</td>
            <td>பூ</td>
            <td>பெ</td>
            <td>பே</td>
            <td>பை</td>
            <td>பொ</td>
            <td>போ</td>
            <td>பௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ம்</th>
            <td>ம</td>
            <td>மா</td>
            <td>மி</td>
            <td>மீ</td>
            <td>மு</td>
            <td>மூ</td>
            <td>மெ</td>
            <td>மே</td>
            <td>மை</td>
            <td>மொ</td>
            <td>மோ</td>
            <td>மௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ய்</th>								
            <td>ய</td>
            <td>யா</td>
            <td>யி</td>
            <td>யீ</td>
            <td>யு</td>
            <td>யூ</td>
            <td>யெ</td>
            <td>யே</td>
            <td>யை</td>
            <td>யொ</td>
            <td>யோ</td>
            <td>யௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ர்</th>
            <td>ர</td>
            <td>ரா</td>
            <td>ரி</td>
            <td>ரீ</td>
            <td>ரு</td>
            <td>ரூ</td>
            <td>ரெ</td>
            <td>ரே</td>
            <td>ரை</td>
            <td>ரோ</td>
            <td>கோ</td>
            <td>ரௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ல்</th>							
            <td>ல</td>
            <td>லா</td>
            <td>லி</td>
            <td>லீ</td>
            <td>லு</td>
            <td>லூ</td>
            <td>லெ</td>
            <td>லே</td>
            <td>லை</td>
            <td>லொ</td>
            <td>லோ</td>
            <td>லௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">வ்</th>												
            <td>வ</td>
            <td>வா</td>
            <td>வி</td>
            <td>வீ</td>
            <td>வு</td>
            <td>வூ</td>
            <td>வெ</td>
            <td>வே</td>
            <td>வை</td>
            <td>வொ</td>
            <td>வோ</td>
            <td>வௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ழ்</th>								
            <td>ழ</td>
            <td>ழா</td>
            <td>ழி</td>
            <td>ழீ</td>
            <td>ழு</td>
            <td>ழூ</td>
            <td>ழெ</td>
            <td>ழே</td>
            <td>ழை</td>
            <td>ழொ</td>
            <td>ழோ</td>
            <td>ழௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ள்</th>									
            <td>ள</td>
            <td>ளா</td>
            <td>ளி</td>
            <td>ளீ</td>
            <td>ளு</td>
            <td>ளூ</td>
            <td>ளெ</td>
            <td>ளே</td>
            <td>ளை</td>
            <td>ளொ</td>
            <td>ளோ</td>
            <td>ளௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ற்</th>												
            <td>ற</td>
            <td>றா</td>
            <td>றி</td>
            <td>றீ</td>
            <td>று</td>
            <td>றூ</td>
            <td>றெ</td>
            <td>றே</td>
            <td>றை</td>
            <td>றொ</td>
            <td>றோ</td>
            <td>றௌ</td>
            </tr> 
            <tr style={{cursor: "pointer"}}>
            <th scope="row">ன்</th>																
            <td>ன</td>
            <td>னா</td>
            <td>னி</td>
            <td>னீ</td>
            <td>னு</td>
            <td>னூ</td>
            <td>னெ</td>
            <td>னே</td>
            <td>னை</td>
            <td>னொ</td>
            <td>னோ</td>
            <td>னௌ</td>
            </tr>
        </tbody>
        </Table>
    </div>
  );
}

export default LTable;