import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/index'
import { updateName } from '../actions/index'
import { Link, Redirect } from 'react-router-dom'
import img from '../assets/power.svg'
import imgg from '../assets/clipboard.svg'
import userimg from '../assets/user.png'

export const Encounters = () => {

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
                <h5>Encounters Table</h5>
            <table id='table' className='container'>
                <tbody>
                    <tr>
                        <th>Surname</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>View</th>
                    </tr>
                {
                    user.encountersList.map(dat => {
                        return(
                            <tr key={dat._id}>
                                <td>{dat.surname}</td>
                                <td>{dat.name}</td>
                                <td>{dat.gender}</td>
                                <td>{dat.age}</td>
                                <td><Link to={{pathname: '/encounterdetails', state:{id: dat._id}}}><button className='btn btn-success'>View</button></Link></td>
                            </tr> 
                         ) 
                    }).reverse()
                }
                </tbody>
            </table>

            </div>
            
        </div>
    )
}
