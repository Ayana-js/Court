import React from "react";
import logo from './img/logo.svg'
import mbank from './img/logo-mbank.svg'
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="wrap_preloader">
            <div className="preload ">
                <div className="loader-block">
                    <div className="main-loader"></div>
                </div>
                <div className="preload__content">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <div className="plus">+</div>
                        <img src={mbank} alt=""/>
                    </div>
                    <div>
                    <p>Разработано совместно с <strong> СУДЕБНЫМ <br/> ДЕПАРТАМЕНТОМ при Верховном суде Кыргызской Республики
                      </strong> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader