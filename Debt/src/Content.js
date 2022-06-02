import './App.css';
import Error from './Error';
import Preloader from './Preloader';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

const Content = () => {
    const debtor = JSON.parse(localStorage.getItem('debtor'))
    const cases = JSON.parse(localStorage.getItem('cases'))
  
    return (
      <div className='wrapper'>
                <div className='content'>
                    {cases.map(c =>
                        <div>
                            <h2> {debtor.first_name} {debtor.last_name} {debtor.patronymic_name}</h2>
                            <p className='description'> Судебный орган </p>
                            <p className='text'> {c.court} </p>
                            <p className='description'>Судебный исполнитель</p>
                            <p className='text'>{executor? c.executor.full_name: '-------'}</p>
                            <p className='description'>Номер телефона</p>
                            <p className='text'>{executor? c.executor.phone_number: '-------'}</p>
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
            </div>
    );
};

export default Content;