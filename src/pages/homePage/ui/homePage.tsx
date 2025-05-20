import {HomeHeader, HomeBasic, HomeProjects, HomeEmotsionals, HomeServices, HomeTeam} from "entities/home";

import cls from "./homePage.module.sass"
import Background from "shared/assets/img/texture40.svg"



export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
            <HomeBasic/>
            <HomeEmotsionals/>
            <HomeServices/>
            <HomeTeam/>
            <HomeProjects/>

        </div>
    );
};

