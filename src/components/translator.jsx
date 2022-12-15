import React, {useState} from 'react'
import Navbarx from './navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Translate } from './translate';

function Translator(){
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field] : value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    Translate(form.phrase);
  }
  return (
    <div className="translator">
        <Navbarx />
        <Form className='mt-5 d-flex my-auto flex-column  justify-content-center align-items-center'>
          <Form.Group className="mb-3" controlId="phrase">
            <Form.Label>Enter phrase</Form.Label>
            <Form.Control 
              type="text"
              name="phr" 
              style={{height:"15em",width:"30em"}} 
              className='input-large'
              value = {form.phrase}
              onChange={(e) => setField('phrase', e.target.value)}/>
            <Form.Text className="text-muted justify-content-center">
              Enter a phrase in any language.
            </Form.Text>
          </Form.Group> 
          <Button variant='dark' type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
    </div>
    )
}

export default Translator