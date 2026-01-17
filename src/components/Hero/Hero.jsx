import React from "react";
import s from "./Hero.module.css";
import Button from "../ui/Button.jsx";
import ss2 from "../../assets/Снимок экрана 2026-01-16 142921.png";
import ss from "../../assets/photo_2026-01-16_14-51-04.jpg";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={`container ${s.hero__grid}`}>
        <div className={s.hero__left}>
          <div className={s.pill}>
            <span className={s.pill__dot} aria-hidden="true"></span>
            Проверяем цены регулярно — примерно раз в 3 минуты
          </div>

          <h1 className="h1">
            Первое место - <span className="h1__accent">максимум продаж и до 90% всей прибыли.</span>
          </h1>

          <p className="lead">
            Сервис 24/7 следит за ценами конкурентов и аккуратно двигает вашу цену,
            чтобы вы поднимались выше. Вы заранее задаёте границы — ниже них не опускаемся.
          </p>

          <div className={s.hero__actions}>
            <Button variant="primary" size="lg" href="#pricing" withSpark>
              Попробовать бесплатно
            </Button>
            <Button size="lg" href="#how">
              Показать, как работает
            </Button>
          </div>
        </div>

        <div className={s.hero__right} aria-label="Визуальные карточки">
          <img className={s.img__ss2} src={ss2} alt="" />
          <img className={s.img__ss} src={ss} alt="" />
        </div>
      </div>
    </section>
  );
}
