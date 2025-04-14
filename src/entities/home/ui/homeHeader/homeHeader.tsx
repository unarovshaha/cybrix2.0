import logo from "../../../../shared/assets/logo/cybrixLogo.svg"

import cls from "./homeHeader.module.sass"
import {useState} from "react";
import classNames from "classnames";
const firstMenuList = [
    {name: "home", label: "Home"},
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
    const [active , setActive] = useState<string>(firstMenuList[0].name)

    const renderMenu = () => {
        return firstMenuList.map(item => (
            <li
                className={classNames({
                    [cls.active]: item.name === active
                })}
                onClick={() => setActive(item.name !== active ? item.name : "")}
            >{item.label}</li>
        ))
    }
    const secondRenderMenu = () => {
        return secondMenuList.map(item => (
            <li
                className={classNames({
                    [cls.active]: item.name === active
                })}
                onClick={() => setActive(item.name !== active ? item.name : "")}

            >{item.label}</li>
        ))
    }

    return (
        <div className={cls.header}>
            <ul className={cls.header__fistMenu}>
                {renderMenu()}
            </ul>

            <div className={cls.header__logo}>
                <img src={logo} alt=""/>

            </div>
            <ul className={cls.header__secondMenu}>
                {secondRenderMenu()}


            </ul>

        </div>
    );
};

