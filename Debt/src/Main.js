import './App.css';
import Error from './Error';
import Preloader from './Preloader';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import user from './img/user.svg'
import path from './img/path.svg'
import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'

const Main = () => {
    const [debtor, setDebtor] = useState({})
    const [cases, setCases] = useState([])
    const [searchParams] = useSearchParams();
    const phone = searchParams.get('phone')
    const [isFetching, setIsFetching] = useState(false)
    const [err, setErr] = useState(false)
    localStorage.setItem('phone', phone)
  
    useEffect(() => {
        setIsFetching(true)
    }, [])

    useEffect(() => {
        axios.get('https://ibank2.cbk.kg/check-debt/api?phone=' + phone)
            .then(res => {
                setIsFetching(false)
                setDebtor(res.data.debtor);
                setCases(res.data.cases)
                console.log(res.data)
            })
            .catch( err => setErr(true))
    }, []);

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
            <NavLink to='/check-debt/content' >
                <div className='main'>
                    {cases.map(c =>
                        <div className='main-content'>
                            <p>Номер дела: № {c.case_number}</p>
                            <img src={path} />
                        </div>
                    )}
                </div>
            </NavLink>
        </div>}
        </>
    );
}

export default Main;
