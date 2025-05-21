import React from 'react';
import cls from './homeTeam.module.sass'
import manImg from 'shared/assets/img/man.svg'

const data = [
    {
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },{
        id: 1,
        name: "Begzod",
        surname: "Jumaniyozov",
        type: "Back-end",
        img: manImg
    },
]
export const HomeTeam: React.FC = () => {

    const renderData = () => {
        return data.map(item => {
            return (
                <div className={cls.team__card}>
                    <div className={cls.team__card__imgBox}>
                        <img className={cls.team__card__imgBox__img} src={item.img} alt=""/>
                    </div>
                    <h1 className={cls.team__card__title}>{item.name} {item.surname}</h1>
                    <p className={cls.team__card__text}>{item.type}</p>
                </div>
            )
        })
    }

    return (
        <div className={cls.team}>
            <h1 className={cls.team__article}>
                Bizning <mark>Jamoamiz!</mark>
            </h1>
            <p className={cls.team__lighter}>
                Har bir muvaffaqiyatli loyiha ortida jonkuyar va tajribali jamoa turadi. Bizning mutaxassislar har bir
                detalda sifat va natijaga e’tibor beradi. Siz bilan ishlashga doim tayyormiz!
            </p>
            <div className={cls.arounder}>
                {renderData()}
            </div>

        </div>
    );
};

