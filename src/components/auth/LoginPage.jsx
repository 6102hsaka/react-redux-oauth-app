import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import FacebookAuthLogin from '../../auth/facebook/FacebookAuthLogin';
import GoogleAuthLogin from '../../auth/google/GoogleAuthLogin';
import './LoginPage.css';


const LoginPage = () => {

    const [ isModalOpen, setModalOpen ] = useState(false);
    const toggleModal = () => setModalOpen(prevState => !prevState);

    const LoginModal = () => (
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Log In</ModalHeader>
            <ModalBody>
                <GoogleAuthLogin />
                <FacebookAuthLogin />
            </ModalBody>
        </Modal>
    )

    return (
        <div className="login-page">
            <button onClick={toggleModal}>LogIn</button>
            <LoginModal />
        </div>
    )
}

export default LoginPage;