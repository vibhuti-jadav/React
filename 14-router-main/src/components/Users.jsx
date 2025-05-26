import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router'
import Cards from './Cards'
const Users = () => {
    const [data, setData] = useState([])

    const fetUsers = async () => {
        const res = await fetch('https://randomuser.me/api/?results=20');
        const data = await res.json()
        console.log(data.results)
        setData(data.results)
    }

    useEffect(()=>{
            fetUsers()
    }, [])



  return (
    <Container>
        <Row className='row-cols-4 g-3 justify-content-center'>
            {
                data.map((ele) =>(
                    <Col>
                        <Cards {...ele}/>
                    </Col>
                ))
            }
          
         
        </Row>
    </Container>
  )
}

export default Users