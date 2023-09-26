import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import'../App.css'
const EditTask = () => {
  const history = useHistory();
  const { id } = useParams();

  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/tasks/${id}`);
        setEditedTask(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:4000/api/tasks/${id}`, editedTask);
      history.push('/tasklist');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    history.push('/tasklist');
  };

  if (!editedTask) {
    return null; // Or display a loading indicator
  }

  return (
    <div className="container mt-5">
      <h2 className="animate__animated animate__fadeInDown">Edit Details</h2>
      <form className="animate__animated animate__fadeInUp">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control custom-input1"
            id="name"
            name="name"
            value={editedTask.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            className="form-control custom-input1"
            id="number"
            name="number"
            value={editedTask.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control custom-input1"
            id="email"
            name="email"
            value={editedTask.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control custom-input1"
            id="date"
            name="date"
            value={editedTask.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control custom-input1"
            id="address"
            name="address"
            value={editedTask.address}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary mx-1 my-4 animate__animated animate__fadeIn" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="btn btn-secondary ml-2 animate__animated animate__fadeIn" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTask;
