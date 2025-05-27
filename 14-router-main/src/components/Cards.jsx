import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Cards({id,name, email, picture}) {
  return (
    <Card className='text-center p-2 h-100' >
      <Card.Img variant="top" className='rounded-circle ' src={picture.large} />
      <Card.Body>
        <Card.Title>{name.title} { name.first} {name.last}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Link to={`/user/${id.value}`}><Button variant="primary">More</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;