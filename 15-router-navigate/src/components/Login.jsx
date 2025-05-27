import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Login = ({handleChange, handleLogin}) => {
    


  return (
    <Container className='mt-5 pt-5'>
    <Form style={{maxWidth:"500px"}} className='shadow-3 bg-secondary rounded-3 p-4 mx-auto'>
        <h3 className='text-center'>Login</h3>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="formGroupPassword">
        <Button onClick={()=>handleLogin()} variant='success'>Login</Button>
      </Form.Group>
    </Form>
    </Container>
  )
}

export default Login