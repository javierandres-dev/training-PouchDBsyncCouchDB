import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import { initialPouchObj } from '../constants/initialPouchObj';
import { localAddDoc } from '../helpers/pouchRequests';

export const EntryPouch = ({ getTodos }) => {
  const [pouchObj, setPouchObj] = useState(initialPouchObj);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const n = Date.now();
    const d = new Date();
    setPouchObj({
      ...pouchObj,
      _id: n.toString(),
      obj: {
        ...pouchObj.obj,
        id: n,
        log: d.toISOString(),
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localAddDoc(pouchObj);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Row className='align-items-center'>
        <Col xs='auto'>
          <Form.Label htmlFor='inlineFormInput' visuallyHidden>
            To Do
          </Form.Label>
          <Form.Control
            required
            className='mb-2'
            id='inlineFormInput'
            placeholder='To Do ...'
            type='text'
            name='title'
            value={pouchObj.title}
            onChange={handleChange}
          />
        </Col>
        <Col xs='auto'>
          <Button type='submit' className='mb-2' variant='info'>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
