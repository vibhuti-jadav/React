
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputSizesExample() {
  return (
    <>
    <h1 className='text-center'> Contact here</h1>
    <div className='w-50 mx-auto mt-5 border p-3 rounded bg-secondary shadow'>

      <Form.Control  type="text" placeholder="Enter first Name" className='mt-2'/>
      <Form.Control  type="text" placeholder="Enter second Name" className='mt-2'/>
      <Form.Control  type="text" placeholder="Enter Email" className='mt-2'/>

       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" className='mt-4' placeholder='enter message' rows={3} />
      </Form.Group>

      <Button variant="dark" className='px-5'>Submit</Button>
    </div>
    </>
  );
}

export default InputSizesExample;