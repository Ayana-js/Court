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
  
    useEffect(() => {
        setIsFetching(true)
    }, [])

    useEffect(() => {
        axios.get('https://ibank2.cbk.kg/check-debt/api?phone=' + phone)
            .then(res => {
                setIsFetching(false)
                setDebtor(res.data.debtor)
                setCases(res.data.cases)
            })
            .catch( () => setErr(true))
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
                <div className='main'>
                    {cases.map(cas =>
                     <NavLink to={`/check-debt/content?caseNumber=${cas.case_number}`}  className='link' >
                        <div className='main-content' onClick={() => {props.addCase(cas); props.addDebtor(debtor)}}>
                            <p>Номер дела: № {cas.case_number}</p>
                            <img src={path} />
                            {/* <Content c={c} debtor={debtor} /> */}
                        </div>
                        </NavLink>
                    )}
                </div>
        </div>}
        </>
    );
}

let mapStateToDispatch = (dispatch) => {
    return {
        addCase: (preload) => {
            debugger
            dispatch(setCases(preload))
        },
        addDebtor: (preload) => {
            debugger
            dispatch(setDebtor(preload))
        }
    }
}

const MainContainer = connect(null, mapStateToDispatch)(Main)

export default MainContainer;
