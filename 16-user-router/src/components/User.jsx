import React, { useState, useEffect } from 'react'
import { Container, Button, Card, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { useParams } from 'react-router'



const User = () => {

    const [sdata, setSdata] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
 
const {id}  = useParams()

console.log(id)


    
        const fetUsers = async () => {

        try {
            // const res = await fetch(`https://randomuser.me/api?id=${userId}`);
            // const res = await fetch(`https://dummyjson.com/users?id=${id}`);
            // const res = await fetch(`https://api.escuelajs.co/api/v1/users?id=${id}`);
            const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
            const data = await res.json()
            console.log(data.product)
            setSdata(data.product)
                
            setLoading(false)

            } catch (error) {
                setError(true)
            }
         
        }
    
        useEffect(()=>{
       
                fetUsers()
        }, [id])
    
    
console.log(sdata)


  return (

    <>
    {
        loading 
        ? 
        <Container className='text-center my-5 py-5'>
            <Spinner animation="border" />
        </Container>
        :
        error ? 
          <Container className='text-center my-5 py-5'>
        <Alert  variant="danger">
            Something went wrong
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        </Container>
        :
    <Container className='mt-5 '>
       {
        
            <Card className='text-start p-2 bg-dark text-white h-100' >
                <Row>
                <Col className='col-4'>
                    <Card.Img variant="top" className='rounded ' src={sdata.image} />
                </Col>
                <Col className='col-8'>
                        <Card.Body>
                            <Card.Title>{sdata.title} </Card.Title>
                            <Card.Text>
                            {sdata.price}
                            </Card.Text>
                            <Card.Text>
                            {sdata.description}
                            </Card.Text>
                            <Card.Subtitle>
                            {sdata.brand}
                            </Card.Subtitle>
                            <Card.Subtitle>
                            {sdata.model}
                            </Card.Subtitle>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                </Col>
                </Row>
            </Card>
       
       }
    </Container>
     }
    </>
  )
}

export default User