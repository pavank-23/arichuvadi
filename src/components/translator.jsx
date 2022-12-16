import React, {useState} from 'react'
import Navbarx from './navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel , Card} from 'react-bootstrap';
import Axios from 'axios';

function Translator(){
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field] : value
    })
  }
  
  const [text,setText] = useState("");

  const Translate = s => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", s);
    encodedParams.append("target", "ta");
    encodedParams.append("source", "en");

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'cb41e0fd7cmshf856915e88b5c7cp1e5db2jsn6c3d6468b66f',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams
    };
    Axios.request(options).then(function (response) {
        // console.log(response.data);
        setText(response.data["data"]["translations"][0].translatedText);
    }).catch(function (error) {
        console.error(error);
    });
}

  const handleSubmit = e => {
    e.preventDefault();
    Translate(form.phrase);
  }

  return (
    <div className="translator">
        <Navbarx />
        <Form className='mt-5 d-flex my-auto flex-column justify-content-center align-items-center'>
          <Form.Group className="mb-3" controlId="phrase">
          <FloatingLabel controlId="floatingInput" label="Phrase" className="mb-3">
            <Form.Control type="text" name="phr" placeholder = "Example phrase" value = {form.phrase} onChange={(e) => setField('phrase', e.target.value)}/>
          </FloatingLabel>
            <Form.Text className="text-muted justify-content-center">
              Enter a phrase in any language.
            </Form.Text>
          </Form.Group> 
          <Button variant='dark' type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        <Card className='mt-5 d-flex justify-content-center align-items-center'>
              <Card.Header>Translated Text</Card.Header>
              <Card.Body>{text}</Card.Body>
        </Card>
    </div>
    )
}

export default Translator