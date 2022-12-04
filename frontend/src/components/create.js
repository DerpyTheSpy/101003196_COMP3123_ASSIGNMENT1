import React , {useState} from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './create.css';


export default function Create(){
    
    const[firstName,setFirstName] = useState(''); 
    const[lastName, setLastName] = useState(''); 
    const[email,setEmail]  = useState(''); 
    const[gender,setGender] = useState( ''  );
    const[salary,setSalary] = useState(''); 
    
    const postData = () => {
        axios.post(`https://638cc3f8d2fc4a058a5f746c.mockapi.io/checkingData`,{
            firstName,
            lastName,
            email,
            gender,
            salary
        })
    }

    return( 
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input type="text"placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Salary</label>
                <input type="number" placeholder='Salary' onChange={(e) => setSalary(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Gender</label>
                <input type="text" placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
)
    }

