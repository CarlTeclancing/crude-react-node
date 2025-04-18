import { useEffect, useState } from 'react';
import './App.css';

const STUDENT_URL = 'http://localhost:8081/students';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetching, setErrorFetching] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(STUDENT_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }
    
        setStudents(data);
        console.table(data);
      } catch (error) {
        console.error("Error fetching students:", error.message);
        setErrorFetching(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    

    fetchStudents();
  }, []);

  if (isLoading) {
    return <h1>Fetching data...</h1>;
  }

  if (errorFetching) {
    return <h1>Error Fetching Data: {errorFetching}</h1>;
  }

  return (
    <div className="container">
      <button className="btn primary">Add Student</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button className="btn update">Update</button>
                <button className="btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
