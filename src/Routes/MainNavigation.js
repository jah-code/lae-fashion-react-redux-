import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/img/crown.svg";
import "../assets/styles/MainNavigation/MainNavigation.scss";
import { signOutUser } from "../utils/firebase/firebase";
import Cart from "../Components/Cart/Cart";
import CartDropdown from "../Components/Cart/CartDropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/User/UserSelector";
import { selectIsCartOpen } from "../store/Cart/CartSelector";

const MainNavigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;
