import React from "react";

import cls from "./homeProjects.module.sass";
import image from "shared/assets/img/projectImage.png";

export const HomeProjects: React.FC = () => {
    return (
        <section className={cls.container}>
            <div className={cls.header}>
                <div className={cls.header__inner}>
                    <h1 className={cls.title}>Ishlarimiz natijasini ko‘rib chiqing</h1>
                    <p className={cls.description}>
                        Har bir loyiha — bu bizning yondashuvimiz, ijodimiz va mijoz ishonchining natijasi. Web saytlar, ilovalar, brend dizaynlari — barchasi mijozlarimiz bilan hamkorlikda yaratilgan real ishlar.
                    </p>
                </div>
                <button className={cls.viewAll}>Hammasini ko’rish</button>
            </div>
            <div className={cls.projects}>
                {[1, 2].map((_, i) => (
                    <div key={i} className={cls.projectCard}>
                        <div className={cls.imageContainer}>
                            <img
                                src={image}
                                alt="Gennis Project"
                                className={cls.projectImage}
                            />
                            <div className={cls.arrowOverlay}>
                                <span>→</span>
                            </div>
                        </div>
                        <h3 className={cls.projectTitle}>Gennis Project</h3>
                        <p className={cls.projectDescription}>
                            Qadoqlash dizayni: Mahsulotlar uchun jalb qiluvchi va funksional qadoqlash dizaynlarini yaratish. Qadoqlash dizayni.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
