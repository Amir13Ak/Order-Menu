import React , {Fragment} from "react";
import classes from './Header.module.css';
import HeaderImg from '../../Image/HeaderImg.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () =>{

    return(
            <Fragment>
                <header className={classes.header}>
                    <h1>React Meal</h1>
                    <HeaderCartButton/>
                </header>
                <div className={classes['main-image']}>
                    <img src={HeaderImg} alt="Not Load"/>
                </div>
            </Fragment>
        )

};
export default Header;