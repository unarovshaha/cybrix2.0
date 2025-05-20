import React from 'react';
import cls from './homeServices.module.sass'
import bgImg from 'shared/assets/img/bg__dots.svg'
import iphone from 'shared/assets/img/iphone.svg'
import laptop from 'shared/assets/img/laptop.svg'
import tablet from 'shared/assets/img/tablet.svg'

export const HomeServices = () => {
    return (
        <div style={{background: `url(${bgImg})`}} className={cls.services}>
            <h1 className={cls.services__article}>Bizning Xizmatlarimiz</h1>
            <b className={cls.services__bold}>Brendingizga mos, tezkor va intuitiv web saytlar foydalanuvchi uchun
                qulay, siz uchun samarali.</b>
            <p className={cls.services__lighter}>Biz raqamli texnologiyalar orqali biznesingizni yangi bosqichga olib
                chiqamiz. Har bir jarayon sizning ehtiyojlaringiz va istaklaringiz asosida avtomatlashtiriladi —
                shunchaki platforma yaratmaymiz, balki siz orzu qilgan tizimni quramiz.
            </p>
            <div className={cls.services__arounder}>
                <div className={cls.services__arounder__iphone}>
                    <div className={cls.services__arounder__iphone__box}>
                        <h1 className={cls.services__arounder__iphone__box__title}>Mobile Development</h1>
                        <p className={cls.services__arounder__iphone__box__text}>Android va iOS uchun interaktiv, tezkor va
                            texnik jihatdan barqaror mobil ilovalar yaratamiz. Mijozlaringiz sizning xizmatlaringizga har
                            doim, har joydan ulana oladi.</p>
                    </div>
                    <img className={cls.services__arounder__iphone__img} src={iphone} alt=""/>
                </div>
                <div className={cls.services__arounder__laptop}>
                    <h1 className={cls.services__arounder__laptop__title}>Web Development</h1>
                    <p className={cls.services__arounder__laptop__text}>Biznesingizga mos, funksional va tez ishlaydigan
                        web saytlar ishlab chiqamiz. Har bir loyiha sizning brendingiz, maqsadingiz va foydalanuvchi
                        ehtiyojlariga mos holda yaratiladi.</p>
                    <img className={cls.services__arounder__laptop__img} src={laptop} alt=""/>
                </div>
                <div className={cls.services__arounder__tablet}>
                    <h1 className={cls.services__arounder__tablet__title}>Frontend Development</h1>
                    <p className={cls.services__arounder__tablet__text}>Zamonaviy va moslashuvchan interfeyslar
                        Vizual jihatdan chiroyli va texnik jihatdan mukammal interfeyslar. Har qanday qurilmada
                        muammosiz ishlaydi.</p>
                    <img className={cls.services__arounder__tablet__img} src={tablet} alt=""/>
                </div>
            </div>
        </div>
    );
};

