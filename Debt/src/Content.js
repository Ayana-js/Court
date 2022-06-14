import './App.css';
import React from 'react';
import { connect } from 'react-redux';

const Content = ({debtor, cases}) => {
  
    return (
      <div className='wrapper'>
                <div className='content'>
                        <div>
                            <h2> {debtor.first_name} {debtor.last_name} {debtor.patronymic_name}</h2>
                            <p className='description'>Номер дела</p>
                            <p className='text'>{cases.case_number}</p>
                            <p className='description'> Судебный орган </p>
                            <p className='text'> {cases.court} </p>
                            <p className='description'>Судебный исполнитель</p>
                            <p className='text'>{cases.executor? cases.executor.full_name: '-------'}</p>
                            <p className='description'>Номер телефона</p>
                            <p className='text'>{cases.executor? cases.executor.phone_number: '-------'}</p>
                            <p className='description'>Категория задолженности</p>
                            <p className='text'>{cases.claim_category}</p>
                            <p className='description'>Сумма задолженности</p>
                            <p className='text'> {cases.sum}</p>
                        </div>
                    <a className='button'> <span> </span> Поделиться </a>
                </div>
            </div>
    );
};

let mapStateToProps = (state) => {
    return {
        cases: state.reducer.cases,
        debtor: state.reducer.debtor
    }
}

const ContentContainer = connect(mapStateToProps, null)(Content)

export default ContentContainer;