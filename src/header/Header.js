import React from 'react';
import './Header-style/Header.scss';
import logo from './Header-img/logo.png';
function MenuItems(){
    const links = [{
        id: 1,
        link: "главная"
    },
    {
        id: 2,
        link: "цены"
    },
    {
        id: 3,
        link: "расписание"
    },
    {
        id: 4,
        link: "о нас"
    },
    {
        id: 5,
        link: "грепплинг"
    },
    {
        id: 6,
        link: "тайский бокс"
    },
    {
        id: 7,
        link: "мма"
    },
    {
        id: 8,
        link: "конакты"
    },
    {
        id: 9,
        link: "faq"
    }];
    const linksItems = links.map((item) => 
    <li key={item.id}>{item.link}</li>
    );
    function ButtonTitle(props){
        return <button type="button">{props.title}</button>;
    }
    return(
    <header>
        <div className="MobMenuOpener">
        <span>&#9776;</span>
        </div>
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