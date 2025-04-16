import {HomeHeader , HomeBasic} from "../../../entities/home/index";
import cls from "./homePage.module.sass"



export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
            <HomeBasic/>
        </div>
    );
};

