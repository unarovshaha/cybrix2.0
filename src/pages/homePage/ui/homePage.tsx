import {HomeHeader , HomeBasic} from "entities/home";
import cls from "./homePage.module.sass"
import Background from "shared/assets/img/texture40.svg"


export const HomePage = () => {
    return (

        <>
            <div className={cls.home} style={{backgroundImage: `url(${Background})`}}>
                <HomeHeader/>
                <HomeBasic/>
            </div>
            <HomeBasic/>

        </>
    );
};

