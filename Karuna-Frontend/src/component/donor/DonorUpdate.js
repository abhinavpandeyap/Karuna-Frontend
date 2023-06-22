import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import {toast} from 'react-toastify'; 
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import DonorService from "../../services/DonorService";
import { useNavigate } from "react-router-dom";

const DonorUpdate=()=>{

  const navigate = useNavigate();
  
  const don = JSON.parse(localStorage.getItem("user")).data
  

    const [donor,setDonor] = useState({
      name:'',
      address:'',
      phone:'',
      email:'',
      password:'',
      location: {
        latitude: null,
      longitude: null
      }
        })

    const handleChange=(event,property)=>{
      setDonor({...donor,[property]:event.target.value})
    }

    const shareLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setDonor({ ...donor, location: {latitude: latitude, longitude: longitude} });
            console.log(donor);
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    const submitform=(event)=>{
        event.preventDefault()
        DonorService.updateDonor(donor,don.id).then((response)=>{
          localStorage.setItem("user",JSON.stringify(response.data))
          setDonor({
            name: "",
            address: "",
            phone: "",
            email: "",
            password: "",
          })
          console.log(response)
          toast.success("Donor Updated Successfully!!")
          navigate("/donorprofile")
        }).catch((error)=>{
          console.log(error)
        })
    }

    return (
    <div className='signup'>
        <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Update Donor</h3>

      <MDBRow>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Name' size='lg' id='name' type='text' name="name" onChange={(e)=>handleChange(e,"name")} value={donor.name}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Address' size='lg' id='address' type='text' name="address" onChange={(e)=>handleChange(e,"address")} value={donor.address}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Phone Number' size='lg' id='phone' type='text' name="phonenumber" onChange={(e)=>handleChange(e,"phone")} value={donor.phone}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='email' type='email' name="email" onChange={(e)=>handleChange(e,"email")} value={donor.email}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='password' type='password' name="password" onChange={(e)=>handleChange(e,"password")} value={donor.password}/>
        </MDBCol>


       </MDBRow>
      <br></br>

              <button className='mb-4 w-100 gradient-custom-4' size='lg' variant="light" onClick={shareLocation}>Share Location</button>
            
      <br></br>
      <Link to={"/donorlogin"}><Button className='mb-4 w-100 gradient-custom-4' size='lg' variant="light" onClick={submitform}>Update </Button></Link>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
    </div>
    )
}
export default DonorUpdate;