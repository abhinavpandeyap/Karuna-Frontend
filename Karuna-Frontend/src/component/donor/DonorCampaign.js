import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './DonorCampaign.css';
import DonorService from '../../services/DonorService';
import DonorDashboard from "./DonorDashboard";


const DonorCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  const donateToCampaign = (event) => {
    let id = event.target.parentNode.parentNode.parentNode.id;
    console.log(id);
    localStorage.setItem("cmp", id);
  }


  useEffect(() => {
    DonorService.viewCampaigns()
      .then(response => {
        setCampaigns(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div>
        <DonorDashboard></DonorDashboard>
      </div>
      <div className="content">
        <h2>Campaigns</h2>
        <div className='pagecontent'>
          <div className='cards'>
            {campaigns.map(campaign => (
              <Card key={campaign.id} id={campaign.id} className="card">
                <Card.Body>
                  <Card.Title>{campaign.name}</Card.Title>
                  <Card.Text>{campaign.description}</Card.Text>
                  <Link to={"/donatecampaign"}>
                    <Button style={{ width: '10rem' }} variant="primary" onClick={donateToCampaign}>Donate</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorCampaign;
