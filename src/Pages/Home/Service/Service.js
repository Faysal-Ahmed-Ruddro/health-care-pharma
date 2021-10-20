import React from 'react';
import "./Service.css"
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,title,photoUrl,description} = props.service;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Card className="card-bg m-2" style={{ height: "480px" }}>
          <Card.Img
            style={{ width: "100%", height: "200px" }}
            variant="top"
            src={photoUrl}
          />
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/serviceDetails/${id}`}>
              <button className="btn btn-info">Details</button>
            </Link>
          </Card.Footer>
        </Card>
      </div>
    );
};

export default Service;