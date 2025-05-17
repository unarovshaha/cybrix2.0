import {HomeHeader, HomeBasic, HomeProjects} from "entities/home";

import cls from "./homePage.module.sass"



export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
            <HomeBasic/>
            <HomeProjects/>
        </div>
    );
};

