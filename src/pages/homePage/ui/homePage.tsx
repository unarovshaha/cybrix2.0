import {HomeHeader, HomeBasic, HomeProjects} from "entities/home";

import cls from "./homePage.module.sass"
import Background from "shared/assets/img/texture40.svg"


export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
            <HomeBasic/>
            <HomeProjects/>
        </div>
    );
};

