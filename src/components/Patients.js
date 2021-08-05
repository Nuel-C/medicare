import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/index'
import { updateName } from '../actions/index'
import { Link, Redirect } from 'react-router-dom'
import img from '../assets/power.svg'
import imgg from '../assets/clipboard.svg'
import userimg from '../assets/user.png'

export const Patients = () => {

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

            <div className='container' style={{marginTop:'5%'}}>

                {
                    user.patientsList.map(dat => {
                        return(
                            <div id='patient'>
                                <div key={dat._id} className='container' style={{background:'rgb(15, 15, 15)', borderRadius:'10px'}}>
                                    <div className='row'>
                                        <div className='col-sm-6' style={{paddingTop:'3%'}}>
                                            <p style={{background:'#198754', paddingLeft:'2%', borderRadius:'10px'}}>Date: {dat.date}</p>
                                            <p style={{background:'#198754', paddingLeft:'2%', borderRadius:'10px'}}>Name: {dat.surname + ' ' + dat.name}</p>
                                            <p style={{background:'#198754', paddingLeft:'2%', borderRadius:'10px'}}>Username: {dat.username}</p>
                                            <p style={{background:'#198754', paddingLeft:'2%', borderRadius:'10px'}}>B.M.I: {dat.bmi}</p>
                                            <p id='gender' style={{background:'#198754', paddingLeft:'2%', borderRadius:'10px'}}>Gender: {dat.gender}</p>
                                        </div>
                                        <div className='col-sm-6' style={{paddingTop:'4%', paddingLeft:'30%'}} id='age'>
                                            <button className="btn btn-success btn-xlg" style={{padding:'30%', borderRadius:'50%'}}>{dat.age}</button>
                                        </div>
                                    </div>
                                    <hr style={{border: '1px solid white'}}/>

                                    <div>
                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:'5%'}}>
                                            <div id='agee' style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>Age</p>
                                                <p>{dat.age}</p>
                                            </div>
                                            <div style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>Height</p>
                                                <p>{dat.height}</p>
                                            </div>
                                            <div style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>Weight</p>
                                                <p>{dat.weight}</p>
                                            </div>
                                            <div id='genderr' style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>Gender</p>
                                                <p>{dat.gender}</p>
                                            </div>
                                        </div>
                                        <hr style={{border: '1px solid white'}}/>


                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:'5%'}}>
                                            <div style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>Ward</p>
                                                <p>{dat.ward}</p>
                                            </div>
                                            <div style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>L.G.A</p>
                                                <p>{dat.lga}</p>
                                            </div>
                                            <div style={{textAlign:'center', padding:'5%', paddingTop:'2%', paddingBottom:'2%', borderRadius:'10px'}}>
                                                <p>State</p>
                                                <p>{dat.state}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <br/><br/>
                            </div>
                            
                         ) 
                    }).reverse()
                }

            </div>
            
        </div>
    )
}
