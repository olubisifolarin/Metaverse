import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Modal, Button} from 'react-bootstrap';
import vector from './assets/images/vector.png';
import logo from './assets/images/logo.png';
import loggo from './assets/images/loggo.png';
import './NavBar.css';

const NavBar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

    const [isShow, setShow] = React.useState(false)
    const handleShow = () => setShow(false);
    const initModal = () => {
    return setShow(!false)
  }

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
                <h1><img className="vector" src={vector} alt="vector" />Meta<span>bnb</span></h1>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/place" className="nav-link" onClick={closeMenu}>
						Place to stay
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/nfts" className="nav-link" onClick={closeMenu}>
						NFTs
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/community" className="nav-link" onClick={closeMenu}>
						Community
					</Link>
				</li>

                <>
                    <Button onClick={initModal}>
                        Connect Wallet
                    </Button>
                    <Modal show={isShow}>
                        <Modal.Header closeButton onClick={handleShow}>
                        <Modal.Title>Choose your prefered wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={logo} className="modal-img" alt="logo1" />Metamask
                        </Modal.Body>
                        <Modal.Footer>
                        <Modal.Body>
                            <img src={loggo} className="modal-img loggo" alt="logo2" />Walletconnect
                        </Modal.Body>

                        </Modal.Footer>
                    </Modal>
                </>        
			</ul>
		</nav>
	);
};

export default NavBar;
