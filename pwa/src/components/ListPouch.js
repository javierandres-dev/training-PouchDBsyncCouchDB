import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export const ListPouch = ({
  pending,
  getObj,
  update,
  remove,
  completed,
  viewObj,
}) => {
  return (
    <>
      <h3 className='my-5'>Pending</h3>
      <ListGroup as='ol' numbered>
        {pending?.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='fw-bold ms-2 me-auto'>{todo.title}</div>
            <ButtonGroup size='sm'>
              <Button variant='success' onClick={() => update(todo)}>
                Completed
              </Button>
              <Button variant='secondary' onClick={() => getObj(todo.id)}>
                Object
              </Button>
              <Button variant='danger' onClick={() => remove(todo.id)}>
                Remove
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3 className='my-5'>Completed</h3>
      <ListGroup as='ol' numbered>
        {completed?.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='fw-bold ms-2 me-auto'>{todo.title}</div>
            <ButtonGroup size='sm'>
              <Button variant='secondary' onClick={() => getObj(todo.id)}>
                Object
              </Button>
              <Button variant='danger' onClick={() => remove(todo.id)}>
                Remove
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {viewObj && (
        <>
          <h4 className='my-5'>Object</h4>
          <ListGroup>
            <ListGroup.Item>
              <pre>{viewObj}</pre>
            </ListGroup.Item>
          </ListGroup>
        </>
      )}
    </>
  );
};
