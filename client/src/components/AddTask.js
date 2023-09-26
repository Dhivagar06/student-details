import React, { useState } from 'react';
import axios from 'axios';
import'../App.css'

const AddTask = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/tasks', {
        name,
        number,
        email,
        date,
        address,
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setName('');
      setNumber('');
      setEmail('');
      setDate('');
      setAddress('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="animate__animated animate__fadeInDown">Student Details</h2>
      <form onSubmit={handleSubmit}  className="animate__animated animate__fadeInUp"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control custom-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            className="form-control custom-input"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control custom-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control custom-input"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control custom-input"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary animate__animated animate__fadeIn my-3">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddTask;
