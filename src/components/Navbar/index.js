import { Link } from "react-router-dom";
import { Dropdown,Avatar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import logo from "../../Assets/logo.svg"
import profile from "../../Assets/profile.svg"
import user from "../../Assets/user.svg"
import puja from "../../Assets/puja.svg"
import lamp from "../../Assets/lamp.svg"
import mail from"../../Assets/mail.svg"
import whatsapp from "../../Assets/whatsapp.svg"

import "./index.css"

const renderToggle = props => (
  <Avatar circle {...props} src={profile} />
);

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='company-logo'>
                <img src={logo} alt="Company Logo"/>
            </div>
            <div className='link-page'>
                    <Link to="/" className="link">Home</Link>
                    <Link to="puja" className="link">Puja</Link>
                    <Link to="panchang" className="link">Panchang</Link>
                    <Link to="temples" className="link">Temples</Link>
                    <Link to="library" className="link">Library</Link>
            </div>
            <div className='dropdown'>
                <Dropdown renderToggle={renderToggle} placement="bottomEnd">
                    <Dropdown.Item panel className='dropdown-menu'>
                    <p style={{color: '#707070' }}>Hello, Sri Mandir Bhakt</p>
                    <p style={{color: '#707070' }}>Welcome to Sri Mandir Puja Seva</p>
                    </Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item panel style={{ padding: '10px', fontWeight: 'bold',color: '#707070' }}>Account Details</Dropdown.Item>
                    <Dropdown.Item><img src={user} className='dd-img' alt="icon"/>My profile</Dropdown.Item>
                    <Dropdown.Item><img src={puja} className='dd-img' alt="icon"/>My Puja Booking</Dropdown.Item>
                    <Dropdown.Item><img src={puja} className='dd-img' alt="icon"/>My Ramatsuv Booking</Dropdown.Item>
                    <Dropdown.Item><img src={lamp} className='dd-img' alt="icon"/>Book a puja</Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item panel style={{ padding: '10px', fontWeight: 'bold',color: '#707070' }}>Help & Support for Puja Booking</Dropdown.Item>
                    <Dropdown.Item ><img src={mail} alt='icon'/> Email us</Dropdown.Item>
                    <Dropdown.Item ><img src={whatsapp} alt='icon'/> Whatsapp us</Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    )

};

export default Navbar