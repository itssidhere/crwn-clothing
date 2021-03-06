import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector }  from 'reselect';
 
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../fireabse/firebase.utils";

import  CartIcon  from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() =>auth.signOut()
          
          .catch(e=>{
           console.error('Sign Out Error', e);
          })}>SIGN OUT</div>:
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>

    {
      hidden ? null : 
      <CartDropdown/>
    }
  </div> 
);

const mapStateToProps = (state) =>createStructuredSelector(
  {
   currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }
)

export default connect(mapStateToProps)(Header);