import {HomeHeader} from "../../../entities/home/index";
import cls from "./homePage.module.sass"


export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
        </div>
    );
};

