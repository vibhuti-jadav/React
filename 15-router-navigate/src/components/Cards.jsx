import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

import { useState } from 'react';
import Chat from './Chat';

function Cards({id,name, email, picture,list,friend}) {

     const [show, setShow] = useState(false);

   const handleShow = () => setShow(true);

  return (
    <>
    <Card className='text-center p-2 h-100' >
      <Card.Img variant="top" className='rounded-circle ' src={picture.large} />
      <Card.Body>
        <Card.Title>{name.title} { name.first} {name.last}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Link to={`/user/${id.value}`}><Button variant="primary">More</Button></Link>
             {
               list.some((el)=>id.value == el.id.value)
               ? 
               <Button onClick={handleShow} variant="success" size='sm ms-2'>message 🗨️</Button>
           :
           <Button onClick={()=>friend({id, name, email, picture})} variant="success" size='sm ms-2'>👥 Add +</Button>
          }
          
      </Card.Body>
    </Card>
    
          <Chat show={show} fr={{id, name, picture}} setShow={setShow} />
          </>
  );
}

export default Cards;