import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbarx from './navbar';
import Letters from './table.json';
import speakerLogo from '../assets/speaker.png';
import { useSpeechSynthesis } from 'react-speech-kit';


function LTable() {

  const [show, setShow] = useState(false);
  const [letter, setLetter] = useState("");
  const [phonetics, setPhonetics] = useState("");
  const [example1, setExample1] = useState("");
  const [meaning1, setMeaning1] = useState("");
  const [example2, setExample2] = useState("");
  const [meaning2, setMeaning2] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const find = (l) => {
    for (let i=0;i < Letters.length;i++){
      var obj = Letters[i];
      for (var key in obj){
        var value = obj[key];
        if (obj.letter===l){
          setLetter(obj.letter);
          setPhonetics(obj.ph);
          setExample1(obj.example1);
          setMeaning1(obj.meaning1);
          setExample2(obj.example2);
          setMeaning2(obj.meaning2);
        };
      }
    }
  }

  const handleContent = (l) => {
    var obj = find(l);
    handleShow();
  }
  const { speak, voices } = useSpeechSynthesis({});
  
  return (
    <div className='ltable'>
        <Navbarx />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Letter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <h2 className='d-inline-block'>{letter}</h2> <img src={speakerLogo} style={{width:"10%", cursor: "pointer"}} className='mx-2' onClick={() => speak({ text: letter, voice:voices[5] })}></img>
              <p className='text-weight-light' style={{fontSize:"1.2em"}}>{phonetics}</p> 
              <br />
              <br /> 
              <h3>Examples:</h3> 
              <span>{example1} - {meaning1} <img src={speakerLogo} style={{width:"5%", cursor: "pointer"}} className='mx-2' onClick={() => speak({ text: example1, voice: voices[5] })}></img></span><br />
              <span>{example2} - {meaning2} <img src={speakerLogo} style={{width:"5%", cursor: "pointer"}} className='mx-2' onClick={() => speak({ text: example2, voice: voices[5] })}></img></span><br />
          </Offcanvas.Body>
        </Offcanvas>
        <Table striped bordered hover size="sm" className='mt-3' variant='secondary'>
        <thead>
            <tr style={{backgroundColor:"#67e8f9",cursor: "pointer"}}>
            <th scope="col"> </th>
            <th scope="col" onClick={() => handleContent("அ")}>அ</th>
            <th scope="col" onClick={() => handleContent("ஆ")}>ஆ</th>
            <th scope="col" onClick={() => handleContent("இ")}>இ</th>
            <th scope="col" onClick={() => handleContent("ஈ")}>ஈ</th>
            <th scope="col" onClick={() => handleContent("உ")}>உ</th>
            <th scope="col" onClick={() => handleContent("ஊ")}>ஊ</th>
            <th scope="col" onClick={() => handleContent("எ")}>எ</th>
            <th scope="col" onClick={() => handleContent("ஏ")}>ஏ</th>
            <th scope="col" onClick={() => handleContent("ஐ")}>ஐ</th>
            <th scope="col" onClick={() => handleContent("ஒ")}>ஒ</th>
            <th scope="col" onClick={() => handleContent("ஓ")}>ஓ</th>
            <th scope="col" onClick={() => handleContent("ஔ")}>ஔ</th>
            </tr>
        </thead>
        <tbody>
            <tr style={{cursor:"pointer"}}>
            <th scope="row" onClick={() => handleContent("க்")}>க்</th>
            <td  onClick={() => handleContent("க")}>க</td>
            <td  onClick={() => handleContent("கா")}>கா</td>
            <td  onClick={() => handleContent("கி")}>கி</td>
            <td  onClick={() => handleContent("கீ")}>கீ</td>
            <td  onClick={() => handleContent("கு")}>கு</td>
            <td  onClick={() => handleContent("கூ")}>கூ</td>
            <td  onClick={() => handleContent("கெ")}>கெ</td>
            <td  onClick={() => handleContent("கே")}>கே</td>
            <td  onClick={() => handleContent("கை")}>கை</td>
            <td  onClick={() => handleContent("கொ")}>கொ</td>
            <td  onClick={() => handleContent("கோ")}>கோ</td>
            <td  onClick={() => handleContent("கௌ")}>கௌ</td>
            </tr>
            <tr>
            <th scope="row" onClick={() => handleContent("ங்")}>ங்</th>
            <td onClick={() => handleContent("ங")}>ங</td>
            <td onClick={() => handleContent("ஙா")}>ஙா</td>
            <td onClick={() => handleContent("ஙி")}>ஙி</td>
            <td onClick={() => handleContent("ஙீ")}>ஙீ</td>
            <td onClick={() => handleContent("ஙு")}>ஙு</td>
            <td onClick={() => handleContent("ஙூ")}>ஙூ</td>
            <td onClick={() => handleContent("ஙெ")}>ஙெ</td>
            <td onClick={() => handleContent("ஙே")}>ஙே</td>
            <td onClick={() => handleContent("ஙை")}>ஙை</td>
            <td onClick={() => handleContent("ஙொ")}>ஙொ</td>
            <td onClick={() => handleContent("ஙோ")}>ஙோ</td>
            <td onClick={() => handleContent("ஙௌ")}>ஙௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ச்")}>ச்</th>											
            <td onClick={() => handleContent("ச")}>ச</td>
            <td onClick={() => handleContent("சா")}>சா</td>
            <td onClick={() => handleContent("சி")}>சி</td>
            <td onClick={() => handleContent("சீ")}>சீ</td>
            <td onClick={() => handleContent("சு")}>சு</td>
            <td onClick={() => handleContent("சூ")}>சூ</td>
            <td onClick={() => handleContent("செ")}>செ</td>
            <td onClick={() => handleContent("சே")}>சே</td>
            <td onClick={() => handleContent("சை")}>சை</td>
            <td onClick={() => handleContent("சொ")}>சொ</td>
            <td onClick={() => handleContent("சோ")}>சோ</td>
            <td onClick={() => handleContent("சௌ")}>சௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>											
            <th scope="row" onClick={() => handleContent("ஞ்")}>ஞ்</th>  
            <td onClick={() => handleContent("ஞ")}>ஞ</td>
            <td onClick={() => handleContent("ஞா")}>ஞா</td>
            <td onClick={() => handleContent("ஞி")}>ஞி</td>
            <td onClick={() => handleContent("ஞீ")}>ஞீ</td>
            <td onClick={() => handleContent("ஞு")}>ஞு</td>
            <td onClick={() => handleContent("ஞூ")}>ஞூ</td>
            <td onClick={() => handleContent("ஞெ")}>ஞெ</td>
            <td onClick={() => handleContent("ஞே")}>ஞே</td>
            <td onClick={() => handleContent("ஞை")}>ஞை</td>
            <td onClick={() => handleContent("ஞொ")}>ஞொ</td>
            <td onClick={() => handleContent("ஞோ")}>ஞோ</td>
            <td onClick={() => handleContent("ஞௌ")}>ஞௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ட்")}>ட்</th> 	
            <td onClick={() => handleContent("ட")}>ட</td>
            <td onClick={() => handleContent("டா")}>டா</td>
            <td onClick={() => handleContent("டி")}>டி</td>
            <td onClick={() => handleContent("டீ")}>டீ</td>
            <td onClick={() => handleContent("டு")}>டு</td>
            <td onClick={() => handleContent("டூ")}>டூ</td>
            <td onClick={() => handleContent("டெ")}>டெ</td>
            <td onClick={() => handleContent("டே")}>டே</td>
            <td onClick={() => handleContent("டை")}>டை</td>
            <td onClick={() => handleContent("டொ")}>டொ</td>
            <td onClick={() => handleContent("டோ")}>டோ</td>
            <td onClick={() => handleContent("டௌ")}>டௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ண்")}>ண்</th>
            <td onClick={() => handleContent("ண")}>ண</td>
            <td onClick={() => handleContent("ணா")}>ணா</td>
            <td onClick={() => handleContent("ணி")}>ணி</td>
            <td onClick={() => handleContent("ணீ")}>ணீ</td>
            <td onClick={() => handleContent("ணு")}>ணு</td>
            <td onClick={() => handleContent("ணூ")}>ணூ</td>
            <td onClick={() => handleContent("ணெ")}>ணெ</td>
            <td onClick={() => handleContent("ணே")}>ணே</td>
            <td onClick={() => handleContent("ணை")}>ணை</td>
            <td onClick={() => handleContent("ணொ")}>ணொ</td>
            <td onClick={() => handleContent("ணோ")}>ணோ</td>
            <td onClick={() => handleContent("ணௌ")}>ணௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("த்")}>த்</th>
            <td onClick={() => handleContent("த")}>த</td>
            <td onClick={() => handleContent("தா")}>தா</td>
            <td onClick={() => handleContent("தி")}>தி</td>
            <td onClick={() => handleContent("தீ")}>தீ</td>
            <td onClick={() => handleContent("து")}>து</td>
            <td onClick={() => handleContent("தூ")}>தூ</td>
            <td onClick={() => handleContent("தெ")}>தெ</td>
            <td onClick={() => handleContent("தே")}>தே</td>
            <td onClick={() => handleContent("தை")}>தை</td>
            <td onClick={() => handleContent("தொ")}>தொ</td>
            <td onClick={() => handleContent("தோ")}>தோ</td>
            <td onClick={() => handleContent("தௌ")}>தௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ந்")}>ந்</th>
            <td onClick={() => handleContent("ந")}>ந</td>
            <td onClick={() => handleContent("நா")}>நா</td>
            <td onClick={() => handleContent("நி")}>நி</td>
            <td onClick={() => handleContent("நீ")}>நீ</td>
            <td onClick={() => handleContent("நு")}>நு</td>
            <td onClick={() => handleContent("நூ")}>நூ</td>
            <td onClick={() => handleContent("நெ")}>நெ</td>
            <td onClick={() => handleContent("நே")}>நே</td>
            <td onClick={() => handleContent("நை")}>நை</td>
            <td onClick={() => handleContent("நொ")}>நொ</td>
            <td onClick={() => handleContent("நோ")}>நோ</td>
            <td onClick={() => handleContent("நௌ")}>நௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ப்")}>ப்</th>
            <td onClick={() => handleContent("ப")}>ப</td>
            <td onClick={() => handleContent("பா")}>பா</td>
            <td onClick={() => handleContent("பி")}>பி</td>
            <td onClick={() => handleContent("பீ")}>பீ</td>
            <td onClick={() => handleContent("பு")}>பு</td>
            <td onClick={() => handleContent("பூ")}>பூ</td>
            <td onClick={() => handleContent("பெ")}>பெ</td>
            <td onClick={() => handleContent("பே")}>பே</td>
            <td onClick={() => handleContent("பை")}>பை</td>
            <td onClick={() => handleContent("பொ")}>பொ</td>
            <td onClick={() => handleContent("போ")}>போ</td>
            <td onClick={() => handleContent("பௌ")}>பௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ம்")}>ம்</th>
            <td onClick={() => handleContent("ம")}>ம</td>
            <td onClick={() => handleContent("மா")}>மா</td>
            <td onClick={() => handleContent("மி")}>மி</td>
            <td onClick={() => handleContent("மீ")}>மீ</td>
            <td onClick={() => handleContent("மு")}>மு</td>
            <td onClick={() => handleContent("மூ")}>மூ</td>
            <td onClick={() => handleContent("மெ")}>மெ</td>
            <td onClick={() => handleContent("மே")}>மே</td>
            <td onClick={() => handleContent("மை")}>மை</td>
            <td onClick={() => handleContent("மொ")}>மொ</td>
            <td onClick={() => handleContent("மோ")}>மோ</td>
            <td onClick={() => handleContent("மௌ")}>மௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ய்")}>ய்</th>								
            <td onClick={() => handleContent("ய")}>ய</td>
            <td onClick={() => handleContent("யா")}>யா</td>
            <td onClick={() => handleContent("யி")}>யி</td>
            <td onClick={() => handleContent("யீ")}>யீ</td>
            <td onClick={() => handleContent("யு")}>யு</td>
            <td onClick={() => handleContent("யூ")}>யூ</td>
            <td onClick={() => handleContent("யெ")}>யெ</td>
            <td onClick={() => handleContent("யே")}>யே</td>
            <td onClick={() => handleContent("யை")}>யை</td>
            <td onClick={() => handleContent("யொ")}>யொ</td>
            <td onClick={() => handleContent("யோ")}>யோ</td>
            <td onClick={() => handleContent("யௌ")}>யௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ர்")}>ர்</th>
            <td onClick={() => handleContent("ர")}>ர</td>
            <td onClick={() => handleContent("ரா")}>ரா</td>
            <td onClick={() => handleContent("ரி")}>ரி</td>
            <td onClick={() => handleContent("ரீ")}>ரீ</td>
            <td onClick={() => handleContent("ரு")}>ரு</td>
            <td onClick={() => handleContent("ரூ")}>ரூ</td>
            <td onClick={() => handleContent("ரெ")}>ரெ</td>
            <td onClick={() => handleContent("ரே")}>ரே</td>
            <td onClick={() => handleContent("ரை")}>ரை</td>
            <td onClick={() => handleContent("ரொ")}>ரொ</td>
            <td onClick={() => handleContent("ரோ")}>ரோ</td>
            <td onClick={() => handleContent("ரௌ")}>ரௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("அ")}>ல்</th>							
            <td onClick={() => handleContent("ல")}>ல</td>
            <td onClick={() => handleContent("லா")}>லா</td>
            <td onClick={() => handleContent("லி")}>லி</td>
            <td onClick={() => handleContent("லீ")}>லீ</td>
            <td onClick={() => handleContent("லு")}>லு</td>
            <td onClick={() => handleContent("லூ")}>லூ</td>
            <td onClick={() => handleContent("லெ")}>லெ</td>
            <td onClick={() => handleContent("லே")}>லே</td>
            <td onClick={() => handleContent("லை")}>லை</td>
            <td onClick={() => handleContent("லொ")}>லொ</td>
            <td onClick={() => handleContent("லோ")}>லோ</td>
            <td onClick={() => handleContent("லௌ")}>லௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("வ்")}>வ்</th>												
            <td onClick={() => handleContent("வ")}>வ</td>
            <td onClick={() => handleContent("வா")}>வா</td>
            <td onClick={() => handleContent("வி")}>வி</td>
            <td onClick={() => handleContent("வீ")}>வீ</td>
            <td onClick={() => handleContent("வு")}>வு</td>
            <td onClick={() => handleContent("வூ")}>வூ</td>
            <td onClick={() => handleContent("வெ")}>வெ</td>
            <td onClick={() => handleContent("வே")}>வே</td>
            <td onClick={() => handleContent("வை")}>வை</td>
            <td onClick={() => handleContent("வொ")}>வொ</td>
            <td onClick={() => handleContent("வோ")}>வோ</td>
            <td onClick={() => handleContent("வௌ")}>வௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ழ்")}>ழ்</th>								
            <td onClick={() => handleContent("ழ")}>ழ</td>
            <td onClick={() => handleContent("ழா")}>ழா</td>
            <td onClick={() => handleContent("ழி")}>ழி</td>
            <td onClick={() => handleContent("ழீ")}>ழீ</td>
            <td onClick={() => handleContent("ழு")}>ழு</td>
            <td onClick={() => handleContent("ழூ")}>ழூ</td>
            <td onClick={() => handleContent("ழெ")}>ழெ</td>
            <td onClick={() => handleContent("ழே")}>ழே</td>
            <td onClick={() => handleContent("ழை")}>ழை</td>
            <td onClick={() => handleContent("ழொ")}>ழொ</td>
            <td onClick={() => handleContent("ழோ")}>ழோ</td>
            <td onClick={() => handleContent("ழௌ")}>ழௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ள்")}>ள்</th>									
            <td onClick={() => handleContent("ள")}>ள</td>
            <td onClick={() => handleContent("ளா")}>ளா</td>
            <td onClick={() => handleContent("ளி")}>ளி</td>
            <td onClick={() => handleContent("ளீ")}>ளீ</td>
            <td onClick={() => handleContent("ளு")}>ளு</td>
            <td onClick={() => handleContent("ளூ")}>ளூ</td>
            <td onClick={() => handleContent("ளெ")}>ளெ</td>
            <td onClick={() => handleContent("ளே")}>ளே</td>
            <td onClick={() => handleContent("ளை")}>ளை</td>
            <td onClick={() => handleContent("ளொ")}>ளொ</td>
            <td onClick={() => handleContent("ளோ")}>ளோ</td>
            <td onClick={() => handleContent("ளௌ")}>ளௌ</td>
            </tr>
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ற்")}>ற்</th>												
            <td onClick={() => handleContent("ற")}>ற</td>
            <td onClick={() => handleContent("றா")}>றா</td>
            <td onClick={() => handleContent("றி")}>றி</td>
            <td onClick={() => handleContent("றீ")}>றீ</td>
            <td onClick={() => handleContent("று")}>று</td>
            <td onClick={() => handleContent("றூ")}>றூ</td>
            <td onClick={() => handleContent("றெ")}>றெ</td>
            <td onClick={() => handleContent("றே")}>றே</td>
            <td onClick={() => handleContent("றை")}>றை</td>
            <td onClick={() => handleContent("றொ")}>றொ</td>
            <td onClick={() => handleContent("றோ")}>றோ</td>
            <td onClick={() => handleContent("றௌ")}>றௌ</td>
            </tr> 
            <tr style={{cursor: "pointer"}}>
            <th scope="row" onClick={() => handleContent("ன்")}>ன்</th>																
            <td onClick={() => handleContent("ன")}>ன</td>
            <td onClick={() => handleContent("னா")}>னா</td>
            <td onClick={() => handleContent("னி")}>னி</td>
            <td onClick={() => handleContent("னீ")}>னீ</td>
            <td onClick={() => handleContent("னு")}>னு</td>
            <td onClick={() => handleContent("னூ")}>னூ</td>
            <td onClick={() => handleContent("னெ")}>னெ</td>
            <td onClick={() => handleContent("னே")}>னே</td>
            <td onClick={() => handleContent("னை")}>னை</td>
            <td onClick={() => handleContent("னொ")}>னொ</td>
            <td onClick={() => handleContent("னோ")}>னோ</td>
            <td onClick={() => handleContent("னௌ")}>னௌ</td>
            </tr>
        </tbody>
        </Table>
    </div>
  );
}

export default LTable;