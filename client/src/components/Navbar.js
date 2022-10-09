import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {UidContext} from './AppContext'
import Logout from "./Log/Logout";
import {useSelector} from 'react-redux'
import Logo from '../Groupomania Logos (update 2022)/logo1.png'

function Navbar() {

    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt='logo'/>
            </div>
          </NavLink>
        </div>
        {uid ? (
            <ul>
                <li></li>
                <li className="welcome">
                    <NavLink to='/profil'>
                        <h5>Bienvenue {userData.pseudo}</h5>
                    </NavLink>
                </li>
               <Logout/>
            </ul>
        ) : (
            <ul>
                <li></li>
                <li>
                    <NavLink to='/profil'>
                        <img src="./img/icons/login.svg" alt="login"/>
                    </NavLink>
                </li>

            </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
