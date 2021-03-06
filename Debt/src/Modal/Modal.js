import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Modal.css'
import { connect } from 'react-redux';

const Modal = (props) => {
    const [active, setActive] = useState(true)

    const onCancel = (() => {
        axios.get('https://api.mbank.kg/debtp/api/cancel')
        .then(res => console.log(res.data))
    })
    return (
        <div className={active ? "modal active" : "modal"} style={{ display: active ? "flex" : "none" }}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <p>ВАЖНО! Услуга «Проверка судебной <br/> задолженности» в соответствии с Законом Кыргызской Республики <br/> «О статусе судебных исполнителей 
                    и об исполнительном производстве» и иных НПА КР – конфиденциальна.</p>
                <span>Владельцами данной информации являетесь Вы и Судебный департамент при Верховном Суде Кыргызской Республики. 
                    Банк не собирает, не обрабатывает и не имеет доступа к данной информации, 
                    а также не несет ответственности за ее полноту и содержание.</span>
                    <a className='content_btn_cancel' onClick={() => onCancel()} >Отмена</a>
                    {props.error? <Link to='/error' className='content_btn' onClick={() => {setActive(false)}}>Продолжить</Link>:
                    <a className='content_btn' onClick={() => {setActive(false); props.setConfirm(true)}}>Продолжить</a>
                    }
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
       error: state.reducer.error
    }
}

const ModalContainer = connect(mapStateToProps, null)(Modal)

export default ModalContainer;