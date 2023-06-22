import './DonorDashboard.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import DonorService from '../../services/DonorService';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";
function DonorHistory() {

  const don = JSON.parse(localStorage.getItem("user")).data
  const [history, setHistory] = useState([]);

  useEffect(() => {
    DonorService.viewHistory(don.id)
      .then(response => {
        console.log("loading")
        setHistory(response.data);
        console.log(history);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <DonorDashboard></DonorDashboard>
        </div>
        <div className="content">

          <h3>History</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Receiver</th>
                <th>Campaign</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>

              {history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.receiver !== null)? item.receiver.name: ''}</td>
                  <td>{(item.campaign !== null)? item.campaign.name: ''}</td>
                  <td>{item.listedDateTime}</td>
                </tr>
              ))}


            </tbody>
          </Table>


        </div>
      </div>
    </div>



  );
};

export default DonorHistory;
