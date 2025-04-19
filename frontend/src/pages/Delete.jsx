import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function DeleteEntry() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state: student } = location || {};

  const [id, setId] = useState("");

  useEffect(() => {
    if (student && student.id) {
      setId(student.id);

      // Call delete when ID is set
      axios.post('http://localhost:8081/delete', { id: student.id })
        .then(res => {
          console.log("Deleted:", res.data);
          navigate("/");
        })
        .catch(err => {
          console.error("Delete failed:", err);
        });
    }
  }, [student, navigate]);

  return null; // nothing to render
}

export default DeleteEntry;
