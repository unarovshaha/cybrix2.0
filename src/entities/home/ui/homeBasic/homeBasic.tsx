import cls from "./homeBasic.module.sass"
import downIcon from "../../../../shared/assets/icons/down.svg"
import python from "shared/assets/img/python.png"
import javascriptIcon from 'shared/assets/img/javascript.png'
import typescript from "shared/assets/img/typescript.png"
import photoshop from "shared/assets/img/photoShop.png"
import figma from "shared/assets/img/figma.png"


import classNames from "classnames";


export const HomeBasic = () => {


    return (
        <div className={cls.basic}>
            <div className={cls.basic__cotainer}>
                <img className={classNames(cls.basic__icon, cls.basic__pyhton)} src={python} alt=""/>
                <img className={classNames(cls.basic__icon, cls.basic__script)} src={javascriptIcon} alt=""/>
                <div className={cls.basic__title}>
                    Dunyoni o‘zgartirishga <br/> <span>tayyormisiz?</span>
                    <div className={cls.basic__title_span}/>
                </div>
                <img className={classNames(cls.basic__icon, cls.basic__typescript)} src={typescript} alt=""/>
                <img className={classNames(cls.basic__icon, cls.basic__photoshop)} src={photoshop} alt=""/>

                <div className={cls.basic__subtitle}>
                    Bizning jamoamiz innovatsion platformalarni yaratib, sizning biznesingizni raqamli olamga olib
                    chiqadi!
                </div>
                <img className={classNames(cls.basic__icon , cls.basic__figma)} src={figma} alt=""/>

            </div>
            <div className={cls.basic__start}>Loyihani boshlash</div>
            <div className={cls.basic__down}>
                <div className={cls.basic__down_circle}>
                    <i className="fa-solid fa-arrow-down"></i>
                </div>
                <img className={cls.basic__down_icon} src={downIcon} alt=""/>

            </div>

        </div>
    );
};

