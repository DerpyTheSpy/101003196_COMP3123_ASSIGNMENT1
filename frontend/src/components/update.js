import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {

    let history = useHistory();
    const[id,setID] = useState('null');
    const[firstName,setFirstName] = useState(''); 
    const[lastName, setLastName] = useState(''); 
    const[email,setEmail]  = useState(''); 
    const[gender,setGender] = useState( ''  );
    const[salary,setSalary] = useState(''); 
    

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'))
        setSalary(localStorage.getItem('Salary'))
    }, []);

    const updateAPIData = () => {
            axios.put(`https://637dbef49c2635df8f8d96a9.mockapi.io/checkingData/${id}`,{
            firstName,
            lastName,
            email,
            gender,
            salary
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Salary</label>
                    <input placeholder='Salary' value={salary} onChange={(e) => setSalary(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}