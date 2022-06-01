import './App.css';
import Error from './Error';
import Preloader from './Preloader';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

const Content = () => {
    const [debtor, setDebtor] = useState({})
    const [cases, setCases] = useState([])
    const phone = localStorage.getItem('phone')
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
            .catch(err => setErr(true))
    }, []);

    if (err) {
        return <Error />
    }
    return (
        <>
            {isFetching ? <Preloader /> : <div className='wrapper'>
                <div className='content'>
                    {cases.map(c =>
                        <div>
                            <h2> {debtor.first_name} {debtor.last_name} {debtor.patronymic_name}</h2>
                            <p className='description'> Судебный орган </p>
                            <p className='text'> {c.court} </p>
                            <p className='description'>Судебный исполнитель</p>
                            <p className='text'>{c.executor.full_name}</p>
                            <p className='description'>Номер телефона</p>
                            <p className='text'>{c.executor.phone_number}</p>
                            <p className='description'>Номер дела</p>
                            <p className='text'>{c.case_number}</p>
                            <p className='description'>Категория задолженности</p>
                            <p className='text'>{c.claim_category}</p>
                            <p className='description'>Сумма задолженности</p>
                            <p className='text'> {c.sum} сом</p>
                        </div>)
                    }
                    <a className='button'> <span> </span> Поделиться </a>
                </div>
            </div>}
        </>
    );
};

export default Content;