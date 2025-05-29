import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "./Cards";


const Users = ({friend,list}) => {
  
  const [data, setData] = useState([]);

  const fetUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    console.log(data.results);
    setData(data.results);
  };

  useEffect(() => {
    fetUsers();
  }, []);

  return (
    <Container>
      <Row className="row-cols-4 g-3 mt-5 justify-content-center">
        {data.map((ele) => (
          <Col>
            <Cards {...ele} key={ele.id.value} friend={friend} list={list} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
