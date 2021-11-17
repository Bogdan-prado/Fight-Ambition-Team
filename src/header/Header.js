import React from 'react';
import './Header-style/Header.scss';
import logo from './Header-img/logo.png';
function MenuItems(){
    const links = ["главная","цены","расписание","о нас","грєпплинг","тайский бокс","мма","конакты","faq"];
    const linksItems = links.map((item,index,array) => 
    <li>{item}</li>
    );
    function ButtonTitle(props){
        return <button type="button">{props.title}</button>;
    }
    return(
    <header>
        <div className="logo">
            <img src={logo}  alt="logo"/>
            </div>
            <div className="PCMenu">
                <nav>
                <ul>{linksItems}</ul>
                </nav>
                </div>
                <div className="headerRegister">
                    <ButtonTitle title="записаться" />
                    </div>
        </header>
    )};


export default MenuItems;