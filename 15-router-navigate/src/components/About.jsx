import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="primary" className='mt-2 w- ml-3'>
      <Alert.Heading>About Page</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important About message. This
        example text is going to run a bit longer so that you can see how
        spacing within an About works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;