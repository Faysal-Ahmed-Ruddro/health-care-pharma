import React, { useEffect, useState } from 'react';
import "./Team.css"
import { Card, Button } from "react-bootstrap";

const Team = () => {
    const [members , setMembers] = useState([]);
    useEffect(()=>{
        fetch("./fakeDataDr.json")
          .then((res) => res.json())
          .then((data) => setMembers(data));
    },[])
    return (
      <div>
        <div className="team-title container mt-4 p-3">
          <h2 className="p-1">Our Doctor's Team</h2>
        </div>
        <div className="row container mx-auto p-4">
          {members.map((member) => (
            <div className="col-lg-4 col-md-6 col-12">
              <Card className="m-2 custom-card " style={{ height: "600px" }}>
                <Card.Img
                  style={{ width: "100%", height: "300px" }}
                  variant="top"
                  src={member.photoUrl}
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Title>{member.specialist} Specialist </Card.Title>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Details</Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Team;