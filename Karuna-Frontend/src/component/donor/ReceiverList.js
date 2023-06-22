import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useState,useEffect } from 'react';
import DonorDashboard from "./DonorDashboard";
import DonorService from '../../services/DonorService';
const ReceiverList = () => {

  const [receiverList, setReceiverList] = useState([]);

  useEffect(() => {
    DonorService.viewReceivers()
      .then(response => {
        setReceiverList(response.data);
        console.log(receiverList);
      })
      .catch(error => console.log(error));
  }, []);

  const donateToReceiver = (event)=>{
    let id = event.target.parentNode.parentNode.parentNode.id;
    localStorage.setItem("rec", id);
  }

  return (
    <div>
        <div className="container">
            <div>
                <DonorDashboard></DonorDashboard>
            </div>
            <div className="content">

            <h3>Receivers List</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
  
          <th>Address</th>
          <th>Email</th>
          <th>Phone No</th>


        </tr>
      </thead>
      <tbody>
        
        {receiverList.map((receiver, index) => (
  <tr key={receiver.id} id={receiver.id}>
    <td>{index + 1}</td>
    <td>{receiver.name}</td>
    
    <td>{receiver.address}</td>
    <td>{receiver.email}</td>
    <td>{receiver.phone}</td>
    <td><Link to={`/donorpagecontent`}><Button variant="outline-success" onClick={donateToReceiver}>Donate</Button></Link></td>
    </tr>
))}
       
        
      </tbody>
    </Table>


            </div>
        </div>
    </div>


   
  );
};

export default ReceiverList;
