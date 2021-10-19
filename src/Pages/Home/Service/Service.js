import React from 'react';
import "./Service.css"
import { Card, Button } from "react-bootstrap";

const Service = (props) => {
    const {title,photoUrl,description} = props.service
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Card className="card-bg m-2" style={{ height: "480px" }}>
          <Card.Img
            style={{ width: "100%", height: "200px" }}
            variant="top"
            src={photoUrl}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="info" className="text-w">Details</Button>
          </Card.Footer>
        </Card>
      </div>
    );
};

export default Service;