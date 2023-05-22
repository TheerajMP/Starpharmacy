import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from './helper';

const Editrequestmed = () => {
  const [drugname, setDrugname] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserById();
  }, []);
  const getUserById = async () => {
    const response = await axios.get(`${BASE_URL}/user/postmedicine/${id}`);
    setDrugname(response.data.drugname);
    setQuantity(response.data.quantity);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${BASE_URL}/user/postmedicine/${id}`, {
        drugname,
        quantity
      });
      navigate("/Requestedlist");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='outerdiv'>
      <div className='box'>
        <form className='ppp' onSubmit={updateUser}>
          <h3>Edit Requested Medicine</h3>
          <div class="form-group">
            <label for="exampleInputEmail1">Drug Name :</label>
            <input type="text" class="form-control" onChange={(e) => setDrugname(e.target.value)} required name="drugname" value={drugname} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Quantity :</label>
            <input type="text" class="form-control" onChange={(e) => setQuantity(e.target.value)} required name="quantity" value={quantity} />
          </div>
          <button class=" sub btn " type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default Editrequestmed;