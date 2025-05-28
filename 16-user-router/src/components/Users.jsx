import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "./Cards";
const Users = () => {
  const [data, setData] = useState([]);

  const fetUsers = async () => {
    // const res = await fetch("https://randomuser.me/api/?results=20");
    // const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const res = await fetch("https://fakestoreapi.in/api/products");
    const data = await res.json();
    console.log(data.products);
    setData(data.products);
  };

  useEffect(() => {
    fetUsers();
  }, []);

  return (
    <Container fluid>
      <Row className="row-cols-4 g-3 justify-content-center">
        {data.map((ele) => (
          <Col>
            <Cards {...ele} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
