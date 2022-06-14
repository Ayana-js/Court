import './App.css';
import Error from './Error';
import Preloader from './Preloader';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import user from './img/user.svg'
import path from './img/path.svg'
import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import { setCases, setDebtor } from './redux/reducer';
import { connect } from 'react-redux';

const Main = (props) => {
    const [debtor, setDebtor] = useState({})
    const [cases, setCases] = useState([])
    const [searchParams] = useSearchParams();
    const phone = searchParams.get('phone')
    const [isFetching, setIsFetching] = useState(false)
    const [err, setErr] = useState(false) 
    const lastElement = cases.slice(-1)
  
    useEffect(() => {
        setIsFetching(true)
    }, [])

    useEffect(() => {
        axios.get('https://api.mbank.kg/debtp/api/check-debt?phone=' + phone, {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*'
        })
            .then(res => {
                setIsFetching(false)
                setDebtor(res.data.debtor)
                setCases(res.data.cases)
            })
            .catch(() => setErr(true))
    }, [])

    if (err) {
        return <Error />
    }

    return (
        <>
        {isFetching? <Preloader />:  <div className='wrapper_main'>
            <div className='header'>
                <img src={user} />
                <p>{debtor.first_name} {debtor.last_name} {debtor.patronymic_name}</p>
            </div>   
                <div className='main'>
                    {cases.map((cas,i) =>
                     <NavLink to={`/debtp/content`}  className='link' key={cas.case_number} >
                        <div
                        className={cases.length >  1 ? 'main-content-line': 'main-content'}
                            onClick={() => {props.addCase(cas);
                                            props.addDebtor(debtor)}}>  
                            <p>Номер дела: № {cas.case_number}</p>
                            <img src={path} />
                        </div>
                     </NavLink>
                    )}
                </div>
        </div>} 
        </>
)}

let mapStateToDispatch = (dispatch) => {
    return {
        addCase: (preload) => {
            dispatch(setCases(preload))
        },
        addDebtor: (preload) => {
            dispatch(setDebtor(preload))
        }
    }
}

const MainContainer = connect(null, mapStateToDispatch)(Main)

export default MainContainer;
