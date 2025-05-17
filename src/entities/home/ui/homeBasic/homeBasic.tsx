import cls from "./homeBasic.module.sass"
import downIcon from "../../../../shared/assets/icons/down.svg"
import python from "../../../../shared/assets/icons/python.svg"

export const HomeBasic = () => {
    return (
        <div className={cls.basic}>
            <div className={cls.basic__title}>
                Dunyoni o‘zgartirishga <br/> <span>tayyormisiz?</span>
                <div className={cls.basic__title_span}/>
            </div>
            <div className={cls.basic__subtitle}>
                Bizning jamoamiz innovatsion platformalarni yaratib, sizning biznesingizni raqamli olamga olib chiqadi!
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

