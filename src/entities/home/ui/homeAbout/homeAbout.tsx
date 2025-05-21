import cls from "./homeAbout.module.sass"
import {aboutItems} from "entities/home/ui/homeAbout/aboutItem";


export const HomeAbout = () => {


    const renderItems = () => {
        return aboutItems.map(item => (
            <div className={cls.about__item}>

                 <img className={cls.about__item_img} src={item.img} alt=""/>

                <div className={cls.about__item_title}>
                    {item.title}
                </div>
                <div className={cls.about__item_desc}>
                    {item.desc}
                </div>
            </div>
        ))
    }


    const render = renderItems()

    return (
        <div className={cls.about}>


            <div className={cls.about__title}>
                Bizning Maqsadimiz
            </div>

            <div className={cls.about__subtitle}>
                Kelajakni Raqamli Yechimlar Bilan Quramiz
            </div>
            <div className={cls.about__descr}>
                Biz texnologiyalar yordamida biznesingizga mos, samarali va innovatsion yechimlar yaratamiz. Har bir
                loyiha – bu sizning o‘sishingiz uchun yaratilgan raqamli imkoniyat.
            </div>
            <div className={cls.about__container}>
                {render}
            </div>

        </div>
    );
};

