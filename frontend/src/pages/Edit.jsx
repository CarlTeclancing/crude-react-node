import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Edit() {
  const location = useLocation();
  const { state: student } = location || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Set form state from student prop
  useEffect(() => {
    if (student) {
      setName(student.name || '');
      setEmail(student.email || '');
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Info:', { name, email });
    // Add your API update logic here
  };

  if (!student) {
    return <h2>No student data found.</h2>;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Student</h2>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="btn">Submit Information</button>
      </form>
    </div>
  );
}

export default Edit;
