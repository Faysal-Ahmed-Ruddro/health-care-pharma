import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceId } = useParams();
     const [details, setDetails] = useState([]);
     const [singleServices,setSingleServices] = useState({})
     useEffect(() => {
       fetch("/singleData.json")
         .then((res) => res.json())
         .then(data => setDetails(data))
         }, [])
     useEffect(() => {
       const singleService = details.find((detail) => detail.id == serviceId);
       setSingleServices(singleService);
     }, [details]);
    return (
        
          <Card className="card-bg m-2 mx-auto" style={{width:"18rem", height: "480px" }}>
            <Card.Img
              style={{ width: "100%", height: "200px" }}
              variant="top"
              src={singleServices?.photoUrl}
            />
            <Card.Body>
              <Card.Title>{singleServices?.title} </Card.Title>
              <Card.Text>{singleServices?.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/home">
                <button className="btn btn-info">Go To Home</button>
              </Link>
            </Card.Footer>
          </Card>

    );
};

export default ServiceDetails;
