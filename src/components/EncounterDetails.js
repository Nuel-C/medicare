import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/index'
import { updateName } from '../actions/index'
import { Link, Redirect } from 'react-router-dom'
import img from '../assets/power.svg'
import imgg from '../assets/clipboard.svg'
import userimg from '../assets/user.png'

export const EncounterDetails = (props) => {

    const user = useSelector(state => state.userReducer)
    const login = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()

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
                <div style={{backgroundColor: 'rgb(15, 15, 15)', borderRadius: '10px', padding: '1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><Link to='/dashboard' style={{color:'white'}}><h6><img src={imgg} alt='' style={{height:'2rem'}}/>Dashboard</h6></Link><h6><button onClick={logoutt} className='btn btn-success btn-sm' style={{borderRadius:'50%'}}><img src={img} alt='' style={{height:'1rem'}}/></button> Log out</h6></div><hr style={{border: '1px solid white'}}/>
            </div>

            {
                    user.encountersList.map((dat) => {
                        if(dat._id === props.location.state.id){
                            
                            return(   
                                <div className='container' style={{marginTop:'5%'}} key={dat._id}>
                                    <h5 style={{background:'#198754'}}>Encounter Details</h5><br/>
                                    <table className='container'>
                                        <tbody>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Surname</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.surname}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Name</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.name}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Username</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.username}e</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Age</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.age}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Gender</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.gender}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Height</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.height}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Weight</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.weight}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>BMI</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.bmi}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Visit Type</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.type}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>B.P</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.bp}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Temperature</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.temperature}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Respiratory Rate</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.rr}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Complaint</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.complaint}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Diagnosis</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.diagnosis}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Treatment</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.treatment}</td>
                                            </tr>
                                            <tr>
                                                <th style={{width:'20%', borderBottom:'1px solid black'}}>Date</th>
                                                <td style={{width:'80%', textAlign:'left', paddingLeft:'2%'}}>{dat.date}</td>
                                            </tr>
                                        </tbody>
                                    </table><br/><br/>
                                </div> 
                            ) 
                        }
                    }).reverse()
            }
            
        </div>
    )
}
