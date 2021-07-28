import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import img from '../assets/power.svg'
import imgg from '../assets/clipboard.svg'
import userimg from '../assets/user.png'
import { logout } from '../actions/index'
import { updateName } from '../actions/index'

export const Dashboard = () => {

    const user = useSelector(state => state.userReducer)
    const login = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [handler, setHandler] = useState('')
    const [showAddP, setShowAddP] = useState(false)
    const [showAddE, setShowAddE] = useState(false)
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [ward, setWard] = useState('')
    const [lga, setLga] = useState('')
    const [state, setState] = useState('')
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [bp, setBp] = useState('')
    const [temperature, setTemperature] = useState('')
    const [rr, setRr] = useState('')
    const [complaint, setComplaint] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [treatment, setTreatment] = useState('')


    function showAddPatient(){
        setShowAddP(!showAddP)
    }

    function showAddEncounter(){
        setShowAddE(!showAddE)
    }

    function submit(e){
        e.preventDefault()
        setMessage('*creating...*')
        setError('')
        var details = {
                user: user.username,
                handler,
                username,
                surname,
                password,
                name,
                age,
                gender,
                height,
                weight,
                bmi: (weight/height),
                ward,
                lga,
                state,
        }
        axios.post('/addpatient', details)
        .then(res => {
        console.log(res.data);
        setSuccess(res.data.success)
        if(res.data.success === false){
            setMessage('')
            setError(res.data.message)
        }
        if(res.data.success === true){
            setMessage('*Success*')
            setError('')
            
            dispatch(updateName({
                username: user.username,
                patients: res.data.patients,
                patientsList: res.data.patientsList,
                encounters: user.encounters,
                encountersList: user.encountersList
            }))
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

    function submite(e){
        e.preventDefault()
        setMessage('*creating...*')
        setError('')
        var details = {
                user: user.username,
                surname,
                name,
                age,
                gender,
                height,
                weight,
                bmi: (weight/height),
                type,
                bp,
                temperature,
                rr,
                complaint,
                diagnosis,
                treatment,
        }
        axios.post('/addencounter', details)
        .then(res => {
        console.log(res.data);
        setSuccess(res.data.success)
        if(res.data.success === false){
            setMessage('')
            setError(res.data.message)
        }
        if(res.data.success === true){
            setMessage('*Success*')
            setError('')
            
            dispatch(updateName({
                username: user.username,
                patients: user.patients,
                patientsList: user.patientsList,
                encounters: res.data.encounters,
                encountersList: res.data.encountersList
            }))
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

    const logoutt = () => {
        dispatch(logout())
        dispatch(updateName({
            username: ' ',
            patients:0,
            patientsList:[],
            encounters:0,
            encountersList:[]
        }))
    }

    return (
        <div>
            {
                login === false ? <Redirect to = '/'/> : null
            }
            <div className="container" style={{paddingTop: "5%"}}>
                <h5><img src={userimg} alt='' style={{height:'2rem', width:'2rem', borderRadius:'50%'}}/> {user.username}</h5>
                <div style={{backgroundColor: 'rgb(15, 15, 15)', borderRadius: '10px', padding: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><h6><img src={imgg} alt='' style={{height:'2rem'}}/>Dashboard</h6><h6><button onClick={logoutt} className='btn btn-success btn-sm' style={{borderRadius:'50%'}}><img src={img} alt='' style={{height:'1rem'}}/></button> Log out</h6></div><hr style={{border: '1px solid white'}}/>


                <div id='dashboard' className='row' style={{marginTop:'5%'}}>

                   
                <div className='col-sm-6' style={{margin:'0%'}}>
                    <div id = 'dashboard-item' style={{ borderRadius: '10px', marginTop:'5%', padding: '5%', margin: '5%', backgroundColor: 'rgb(15, 15, 15)'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <h3 style={{ padding: '5px'}}>Patients</h3><h3 style={{textAlign:'right', padding: '5px'}}>{user.patients}</h3>
                        </div>
                        <hr style={{border: '1px solid white'}}/>

                        
                        {
                            user.patientsList.slice(0, 3).map(list => {
                                return(
                                    <ul key={list._id}>
                                    <li  style={{background:'blue', borderRadius:'10px', paddingLeft:'2%'}}>{list.surname + " "+ list.name}</li>
                                    </ul>
                                ) 
                            }).reverse()
                        }
                        <br/>
                        
                        <span id='addspan' style={{ marginTop:'10%'}}><button onClick={showAddPatient} id='addbtn' className='btn btn-success btn-sm' style={{borderRadius:'50%', paddingLeft:'3%', paddingRight:'3%'}}>+</button> <span id='add'>Add Patient</span><span id='addd'>New</span></span>
                        
                        <div id='addpform' style={{marginTop:'10%', display: showAddP ? 'block' : 'none'}}>
                            <hr style={{border: '1px solid white'}}/><h2 style={{textAlign:'center'}}>Add Patient</h2><hr style={{border: '1px solid white'}}/>
                            <div className='form-div'>
                            <span style={{color:'green'}}>{message}</span>
                            <span style={{color:'red'}}>{error}</span>
                                <form onSubmit={submit}>
                                Handler:
                                <input required readOnly type = 'text'
                                placeholder = 'Handler'
                                onChange = {(e)=>{setHandler(e.target.value)}}
                                value = {user.username}
                                className = 'form-control form-group'
                                /><br/>
                                Username:
                                <input required type = 'text'
                                placeholder = 'Username'
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
                                Surname:
                                <input required type = 'text'
                                placeholder = 'Surname'
                                onChange = {(e)=>{setSurname(e.target.value)}}
                                value = {surname}
                                className = 'form-control form-group'
                                /><br/>
                                Name:
                                <input required type = 'text'
                                placeholder = 'Name'
                                onChange = {(e)=>{setName(e.target.value)}}
                                value = {name}
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
                                Height:
                                <input required type = 'number'
                                placeholder = 'Height'
                                onChange = {(e)=>{setHeight(e.target.value)}}
                                value = {height}
                                className = 'form-control form-group'
                                /><br/>
                                Weight:
                                <input required type = 'number'
                                placeholder = 'Weight'
                                onChange = {(e)=>{setWeight(e.target.value)}}
                                value = {weight}
                                className = 'form-control form-group'
                                /><br/>
                                BMI:
                                <input required readOnly type='number'
                                placeholder = 'BMI'
                                onChange = {(e)=>{setBmi(e.target.value)}}
                                value = {(weight/height)}
                                className = 'form-control form-group'
                                /><br/>
                                Ward:
                                <input required type = 'text'
                                placeholder = 'Ward'
                                onChange = {(e)=>{setWard(e.target.value)}}
                                value = {ward}
                                className = 'form-control form-group'
                                /><br/>
                                L.G.A:
                                <input required type = 'text'
                                placeholder = 'L.G.A'
                                onChange = {(e)=>{setLga(e.target.value)}}
                                value = {lga}
                                className = 'form-control form-group'
                                /><br/>
                                State:
                                <input required type = 'text'
                                placeholder = 'State'
                                onChange = {(e)=>{setState(e.target.value)}}
                                value = {state}
                                className = 'form-control form-group'
                                /><br/>
                                <input 
                                type = 'submit'
                                className = 'btn btn-danger btn-block form-control form-group'
                                value = 'submit'
                                />
                                </form><br/>
                                </div>  
                        </div>
                    </div>
                </div>


                <div className='col-sm-6' style={{margin:'0%'}}>
                    <div id = 'dashboard-item' style={{ borderRadius: '10px', marginTop:'5%', padding: '5%', margin: '5%', backgroundColor: 'rgb(15, 15, 15)'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <h3 style={{ padding: '5px'}}>Encounters</h3><h3 style={{textAlign:'right', padding: '5px'}}>{user.encounters}</h3>
                        </div>
                        <hr style={{border: '1px solid white'}}/>
                        {
                            user.encountersList.slice(0, 3).map(list => {
                                return(
                                    <ul key={list._id}>
                                    <li  style={{background:'blue', borderRadius:'10px', paddingLeft:'2%'}}>{list.surname + " "+ list.name}</li>
                                    </ul>
                                ) 
                            }).reverse()
                        }
                        <br/>
                        <span id='addspan' style={{ marginTop:'10%'}}><button onClick={showAddEncounter} id='addbtn' className='btn btn-success btn-sm' style={{borderRadius:'50%', paddingLeft:'3%', paddingRight:'3%'}}>+</button> <span id='add'>Add Encounter</span><span id='addd'>New</span></span>

                        <div id='addpform' style={{marginTop:'10%', display: showAddE ? 'block' : 'none'}}>
                            <hr style={{border: '1px solid white'}}/><h2 style={{textAlign:'center'}}>Add Encounter</h2><hr style={{border: '1px solid white'}}/>
                            <div className='form-div'>
                            <span style={{color:'green'}}>{message}</span>
                            <span style={{color:'red'}}>{error}</span>
                                <form onSubmit={submite}>
                                Surname:
                                <input required type = 'text'
                                placeholder = 'Surname'
                                onChange = {(e)=>{setSurname(e.target.value)}}
                                value = {surname}
                                className = 'form-control form-group'
                                /><br/>
                                Name:
                                <input required type = 'text'
                                placeholder = 'Name'
                                onChange = {(e)=>{setName(e.target.value)}}
                                value = {name}
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
                                Type:
                                <select required onChange = {(e)=>{setType(e.target.value)}} className = 'form-control form-group'>
                                    <option value="">-- Choose Encounter Type --</option>
                                    <option value="First time">First time</option>
                                    <option value="Recurring visit">Recurring visit</option>
                                </select><br/>
                                BMI:
                                <input required readOnly type = 'text'
                                placeholder = 'BMI'
                                onChange = {(e)=>{setBmi(e.target.value)}}
                                value = {weight/height}
                                className = 'form-control form-group'
                                /><br/>
                                Height:
                                <input required type = 'number'
                                placeholder = 'Height'
                                onChange = {(e)=>{setHeight(e.target.value)}}
                                value = {height}
                                className = 'form-control form-group'
                                /><br/>
                                Weight:
                                <input required type = 'number'
                                placeholder = 'Weight'
                                onChange = {(e)=>{setWeight(e.target.value)}}
                                value = {weight}
                                className = 'form-control form-group'
                                /><br/>
                                Complaint:
                                <textarea required
                                className = 'form-control form-group'
                                onChange = {(e)=>{setComplaint(e.target.value)}}
                                value = {complaint}
                                ></textarea><br/>
                                Blood Pressure:
                                <input required type = 'number'
                                placeholder = 'Bp'
                                onChange = {(e)=>{setBp(e.target.value)}}
                                value = {bp}
                                className = 'form-control form-group'
                                /><br/>
                                Temperature:
                                <input required type = 'number'
                                placeholder = 'Temperature'
                                onChange = {(e)=>{setTemperature(e.target.value)}}
                                value = {temperature}
                                className = 'form-control form-group'
                                /><br/>
                                Respiratory Rate:
                                <input required type = 'number'
                                placeholder = 'Respiratory Rate'
                                onChange = {(e)=>{setRr(e.target.value)}}
                                value = {rr}
                                className = 'form-control form-group'
                                /><br/>
                                Diagnosis:
                                <select required onChange = {(e)=>{setDiagnosis(e.target.value)}} className = 'form-control form-group'>
                                    <option value="">-- Choose Diagnosis --</option>
                                    <option value="Hypertension">Hypertension</option>
                                    <option value="Pneumonia">Pneumonia</option>
                                    <option value="Malaria">Malaria</option>
                                    <option value="Diabetes">Diabetes</option>
                                </select><br/>
                                Treatment Plan:
                                <textarea required
                                className = 'form-control form-group'
                                onChange = {(e)=>{setTreatment(e.target.value)}}
                                value = {treatment}
                                ></textarea><br/>
                                <input 
                                type = 'submit'
                                className = 'btn btn-danger btn-block form-control form-group'
                                value = 'submit'
                                />
                                </form><br/>
                                </div>  
                        </div>
                    </div>
                </div>

                </div>
            </div>    
        </div>
    )
}
