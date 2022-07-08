import React, { useEffect, useState } from 'react';
import error from '../img/smile.svg'
import './Error.css'
import logo from "../img/logo.svg";
import mbank from "../img/logo-mbank.svg";

const Error = () => {
   
    return (
        <div className='wrapper__error'>
            <div className="error-item">
            <img src={error} />
            <p className='descriptionError'>Задолженности не имеется <br/> </p>
            </div>
            <div className="preload__content_">
                <div className="logo">
                    <img src={logo} alt=" "/>
                    <span>+</span>
                    <img src={mbank} alt=" "/>
                </div>
                <div className="int_text">
                    <p>Разработано совместно с <br/> <strong>Судебным департаментом при Верховном суде Кыргызской Республики
                      </strong> </p>
                </div>
            </div>
        </div>
    );
};

export default Error;