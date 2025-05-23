import {HomeHeader, HomeBasic, HomePlatform , HomeAbout , HomeEmotsionals , HomeProjects , HomeServices , HomeTeam} from "entities/home";
import cls from "./homePage.module.sass"
import Background from "shared/assets/img/texture40.svg"


export const HomePage = () => {
    return (

        <>
            <div className={cls.home} style={{backgroundImage: `url(${Background})`}}>
                <HomeHeader/>
                <HomeBasic/>
                <HomeAbout/>
                <HomePlatform/>
                <HomeEmotsionals/>
                <HomeServices/>
                <HomeTeam/>
                <HomeProjects/>
            </div>

            {/*<HomeBasic/>*/}

        </>
    );
};

