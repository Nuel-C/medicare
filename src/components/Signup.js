import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { login } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from '../actions/index'




export const Signup = () => {

    const loggedin = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [cadre, setCadre] = useState('')
    const [department, setDepartment] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    function submit(e){
        e.preventDefault()
        setMessage('*Creating Account*')
        setError('')
        var details = {
            username: username,
            password: password,
            name: name,
            surname: surname,
            age: age,
            gender: gender,
            cadre: cadre,
            department: department
        }
        axios.post('/signup', details)
        .then(res => {
        console.log(res.data);
        if(res.data.success === false){
            setMessage('')
            setError(res.data.msg)
        }if(res.data.success === true){
            const userDetails = {
                username: username,
                patients: res.data.patients,
                patientsList: res.data.patientsList,
                encounters: res.data.encounters,
                encountersList: res.data.encountersList
            }
            dispatch(login())
            dispatch(updateName(userDetails))
        }
        })
        .catch((error) => {
            console.log(error)
            setMessage('')
            setError('Server Error')
        })

        setTimeout(()=>{
            setMessage('')
            setError('')
            }, 7000)
    } 

    return (
        
        <div>
            {
                loggedin ? <Redirect to={{
                    pathname: "/dashboard"
                  }} /> : null
            }
            <div id='form' className='container' style={{paddingTop: '10%'}}>
                    <h2 style={{textAlign:'center'}}>Sign Up</h2>
                    <div className='form-div'>
                    <span style={{color:'green'}}>{message}</span>
                    <span style={{color:'red'}}>{error}</span>
                        <form onSubmit={submit}>
                        Name:
                        <input required type = 'text'
                        placeholder = 'Name'
                        onChange = {(e)=>{setName(e.target.value)}}
                        value = {name}
                        className = 'form-control form-group'
                        /><br/>
                        Surname:
                        <input required type = 'text'
                        placeholder = 'Surname'
                        onChange = {(e)=>{setSurname(e.target.value)}}
                        value = {surname}
                        className = 'form-control form-group'
                        /><br/>
                        Age:
                        <input required type = 'number'
                        placeholder = 'Age'
                        onChange = {(e)=>{setAge(e.target.value)}}
                        value = {age}
                        className = 'form-control form-group'
                        /><br/>
                        Gender:
                        <select required onChange = {(e)=>{setGender(e.target.value)}} className = 'form-control form-group'>
                            <option value="">-- Choose Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select><br/>
                        Cadre:
                        <select required onChange = {(e)=>{setCadre(e.target.value)}} className = 'form-control form-group'>
                            <option value="">-- Choose Cadre --</option>
                            <option value="Doctor">Doctor</option>
                        </select><br/>
                        Department:
                        <select required onChange = {(e)=>{setDepartment(e.target.value)}} className = 'form-control form-group'>
                            <option value="">-- Choose Department --</option>
                            <option value="Medicine">Medicine</option>
                        </select><br/>
                        Username:
                        <input required type = 'text'
                        onChange = {(e)=>{setUsername(e.target.value)}}
                        value = {username}
                        className = 'form-control form-group'
                        /><br/>
                        Password:
                        <input required type = 'password'
                        placeholder = 'Password'
                        onChange = {(e)=>{setPassword(e.target.value)}}
                        value = {password}
                        className = 'form-control form-group'
                        /><br/>
                        <input 
                        type = 'submit'
                        className = 'btn btn-danger btn-block form-control form-group'
                        value = 'submit'
                        />
                        </form><br/>
                        <Link to='/' style={{color:'red'}}>*Login*</Link>
                    </div>
                </div>
        </div>
        
    )
}
