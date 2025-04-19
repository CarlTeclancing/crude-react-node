import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const deleteEntry = (event)=>{

    const [id, setId] = useState("");
    const navigate = useNavigate();

    axios.post('http://localhost:8081/create', {name, email})
    .then(res =>{
        console.log(res);
        navigate("/");
    }).catch(err => console.log(err))
    console.log(name);  
}