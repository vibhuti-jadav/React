import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Cards({id,image,title,brand,price,model}) {
  return (
    <Card className='text-center p-2 h-100 mt-5 border bg-dark text-white' >
      <Card.Img variant="top" className='rounded ' src={image} />
      <Card.Body>
        <Card.Title className='fs-6'>{title}</Card.Title>
        <Card.Text className='text-white fs-2 '>
          ${price}
        </Card.Text>
        <Card.Text className=''>
          {brand} 
        </Card.Text>
       
        <Link to={`/user/${id}`}><Button variant="primary" size='md' className='px-5'>More</Button></Link>
      </Card.Body>
    </Card>



  );
}

export default Cards;