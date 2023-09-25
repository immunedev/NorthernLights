import { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseIcon } from "./assets/close.svg";

function ModalFormRegister() {
    return (
        <>
            <div className="modal-main">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname" />
                </div>
                <div className="input-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
            </div>
            <div className="modal-footer modal-footer-action">
                { /* chwilowo span bo nie chce mi sie stylowac <a> */}
                <span>Have an account? <b className="accent">Click here</b></span>
                <button className="search-button">Register</button>
            </div>
        </>
    )
}

function ModalFormLogin() {
    return (
        <>
            <div className="modal-main">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
            </div>
            <div className="modal-footer modal-footer-action">
                { /* chwilowo span bo nie chce mi sie stylowac <a> */}
                <span>Forgot your password? <b className="accent">Click here</b></span>
                <button className="search-button">Login</button>
            </div>
        </>
    )
} 

function AuthModalContent({onClose}) {
    const ModalTabs = {
        LOGIN: 0,
        REGISTER: 1
    };

    const [modalTab, setModalTab] = useState(ModalTabs.LOGIN);


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-header-text">{modalTab == ModalTabs.LOGIN ? "Login" : "Register"}</span>
                    <a href="#" onClick={() => setModalTab((modalTab == ModalTabs.LOGIN ? ModalTabs.REGISTER : ModalTabs.LOGIN))} className="modal-header-alternative">{modalTab == ModalTabs.LOGIN ? "Register" : "Login"}</a>
                    <a href="#" onClick={onClose}>
                        <CloseIcon className="close-icon"></CloseIcon>
                    </a>
                </div>
                {modalTab == ModalTabs.LOGIN ? <ModalFormLogin /> : <ModalFormRegister />}
            </div>
        </div>
    )
}

export default function AuthModal() {
    const [ modalOpen, setModalOpen ] = useState(false);

    return (
        <>
            <a href="#" className="navbar-element accent" onClick={() => setModalOpen(true)}>Login</a>
            { modalOpen ? createPortal(<AuthModalContent onClose={() => setModalOpen(false)} />, document.body) : "" }
        </>
    )
}
