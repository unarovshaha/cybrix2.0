import logo from "../../../../shared/assets/logo/cybrixLogo.svg"

import cls from "./homeHeader.module.sass"
import {useState} from "react";
import classNames from "classnames";
import { default as   img} from "../../../../shared/assets/icons/material-symbols_fact-check-outline-rounded.svg"
const firstMenuList = [
    {
        name: "home",
        label: "Home",

    },
    {name: "aboutUs", label: "Biz haqimizda"},
    {name: "goals", label: "Maqsadlarimiz"},
    {name: "testimonials", label: "Mijozlar fikri"},
];


const secondMenuList = [
    {name: "services", label: "Xizmatlarimiz"},
    {name: "team", label: "Jamoamiz"},
    {name: "portfolio", label: "Portfolio"},
]

export const HomeHeader = () => {

    const [active, setActive] = useState<string>(firstMenuList[0].name)


    const [activeLang, setActiveLang] = useState(false)

    const [activeBars, setActiveBars] = useState(false)

    const renderMenu = () => {
        return firstMenuList.map(item => (
            <li
                className={classNames({
                    [cls.active]: item.name === active ,
                    [cls.activeMenuList]: item.name === active
                })}
                onClick={() => {
                    setActive(item.name !== active ? item.name : "")
                    setActiveBars(false)
                }}
            >{item.label} </li>
        ))
    }
    const secondRenderMenu = () => {
        return secondMenuList.map(item => (
            <li
                className={classNames({
                    [cls.active]: item.name === active ,
                    [cls.activeMenuList]: item.name === active
                })}
                onClick={() => {
                    setActive(item.name !== active ? item.name : "")
                    setActiveBars(false)
                }}
            >{item.label} </li>
        ))
    }

    return (
        <>
            <div className={cls.header}>
                <div onClick={() => setActiveBars(!activeBars)} className={cls.header__bars}>
                    <i className={"fa fa-bars"}/>
                </div>
                <ul className={cls.header__fistMenu}>
                    {renderMenu()}
                </ul>
                <div className={cls.header__logo}>
                    <img src={logo} alt=""/>
                </div>
                <ul className={cls.header__secondMenu}>
                    {secondRenderMenu()}
                </ul>
                <div
                    onClick={() => setActiveLang(!activeLang)}
                    className={cls.header__secondMenu_lang}>
                    Uzbek <i className={`fa-solid fa-chevron-${!activeLang ? "down" : "up"}`}></i>
                </div>
            </div>
            <div style={{left: activeBars ? "0" : "-100%"}} className={cls.activeMenu}>

                <div className={cls.activeMenu__list}>
                    {renderMenu()}
                    {secondRenderMenu()}
                </div>

            </div>


        </>
    );
};

