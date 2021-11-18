import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import { createTodo } from '../helpers/apiRequests';
import { initialObj } from '../constants/initialObj';

export const Entry = ({ getTodos }) => {
  const [obj, setObj] = useState(initialObj);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      id: Date.now(),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const r = await createTodo(obj);
      if (r) {
        setObj(initialObj);
        getTodos();
        formRef.current.reset();
      }
    })();
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
            value={obj.title}
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
