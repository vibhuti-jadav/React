import React, { useState, useEffect } from 'react'
import { Container, Button, Card, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { useParams } from 'react-router'



const User = () => {

    const [sdata, setSdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
 
const {userId}  = useParams()

console.log(userId)


    
        const fetUsers = async () => {

        try {
            const res = await fetch(`https://randomuser.me/api?id=${userId}`);
            const data = await res.json()
            console.log(data.results)
            setSdata(data.results)
                
            setLoading(false)

            } catch (error) {
                setError(true)
            }
         
        }
    
        useEffect(()=>{
       
                fetUsers()
        }, [userId])
    
    



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
        sdata.map((ele)=>(
            <Card className='text-start p-2 border-0 shadow bg-secondary h-100' >
                <Row>
                <Col className='col-4'>
                    <Card.Img variant="top" className='rounded-circle ' src={ele.picture.large} />
                </Col>
                <Col className='col-8 mt-5  '>
                        <Card.Body>
                            <Card.Title className=' mt-5' >{ele.name.title} { ele.name.first} {ele.name.last}</Card.Title>
                            <Card.Text className=' mt-3'>
                            {ele.email}
                            </Card.Text>
                            <Card.Subtitle className=' mt-3'>
                            {ele.cell}
                            </Card.Subtitle>
                            <Button variant="dark" className=' mt-3 px-5 rounded'>More</Button>
                        </Card.Body>
                </Col>
                </Row>
            </Card>
        ))
       }
    </Container>
     }
    </>
  )
}

export default User