import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cls from './homeEmotsionals.module.sass';
import googleIcon from 'shared/assets/img/google.svg';
import personIcon from 'shared/assets/img/person.svg';
import starIcon from 'shared/assets/img/rating.svg'

const data = [
    {
        id: 1,
        icon: googleIcon,
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        name: 'Maria Merlin',
        date: '19/06/2024',
        img: personIcon,
    },
    {
        id: 2,
        icon: googleIcon,
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        name: 'Maria Merlin',
        date: '19/06/2024',
        img: personIcon,
    },
    {
        id: 3,
        icon: googleIcon,
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        name: 'Maria Merlin',
        date: '19/06/2024',
        img: personIcon,
    },
    {
        id: 4,
        icon: googleIcon,
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        name: 'Maria Merlin',
        date: '19/06/2024',
        img: personIcon,
    },
];

export const HomeEmotsionals: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const cardWidth = 340;
    const carouselRef = useRef(null);

    const handleDragEnd = (_: any, info: any) => {
        const offset = info.offset.x;
        const newIndex = activeIndex - Math.round(offset / cardWidth);
        const clampedIndex = Math.max(1, Math.min(newIndex, data.length - 2));
        setActiveIndex(clampedIndex);
    };

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={cls.emotSection}>
            <h1 className={cls.emotSection__article}>Mijozlar biz haqimizda nima deyishmoqda?</h1>
            <p className={cls.emotSection__paragraph}>
                Bizning xizmatlarimizdan foydalanayotgan mijozlar tajribasi — biz uchun eng muhim baho. Ulardan eshitamiz: real
                natijalar, real odamlar.
            </p>

            <motion.div className={cls.carouselContainer} ref={carouselRef} whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    drag={window.innerWidth > 768 ? 'x' : false}
                    dragConstraints={{ right: 0, left: -cardWidth * (data.length - 3) }}
                    className={cls.carouselTrack}
                    onDragEnd={handleDragEnd}
                >
                    {data.map((item, index) => (
                        <motion.div
                            className={`${cls.card} ${index === activeIndex ? cls.active : ''}`}
                            key={item.id}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={item.icon} alt='icon' className={cls.card__icon} />
                            <div className={cls.card__stars}>
                                <img src={starIcon} alt=""/>
                            </div>
                            <p className={cls.card__message}>{item.message}</p>
                            <div className={cls.card__profile}>
                                <h4 className={cls.card__name}>{item.name}</h4>
                                <p className={cls.card__date}>{item.date}</p>
                                <img src={item.img} alt='user' className={cls.card__img} />
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className={cls.carouselDots}>
                {data.map((_, idx) => (
                    <span key={idx} className={`${cls.dot} ${idx === activeIndex ? cls.active : ''}`}></span>
                ))}
            </div>
        </div>
    );
};
