import React from "react";
import s from "./How.module.css";

export default function How() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Как это работает</h2>
        </div>

        <div className={s.howCards}>
          <article className={s.howCard} data-tilt>
            <div className={s.howCard__num}>1</div>
            <h3 className={s.howCard__title}>Смотрим цены</h3>
            <p className={s.howCard__text}>
              Мы регулярно проверяем ваши товары и цены конкурентов на Kaspi.
            </p>
          </article>

          <article className={`${s.howCard} ${s["howCard--accent"]}`} data-tilt>
            <div className={s.howCard__num}>2</div>
            <h3 className={s.howCard__title}>Поднимаем вас выше</h3>
            <p className={s.howCard__text}>
              Если вы не первые — цена аккуратно снижается, чтобы поднять вас в списке.
            </p>
          </article>

          <article className={s.howCard} data-tilt>
            <div className={s.howCard__num}>3</div>
            <h3 className={s.howCard__title}>Возвращаем прибыль</h3>
            <p className={s.howCard__text}>
              Когда конкуренты повышают цену, мы тоже поднимаем вашу — в заданных границах.
            </p>
          </article>
        </div>

        <div className={s.facts}>
          <div className={s.fact}><b>~3 минуты</b><span>частота проверки</span></div>
          <div className={s.fact}><b>Границы</b><span>задаёте вы</span></div>
          <div className={s.fact}><b>24/7</b><span>работает всегда</span></div>
        </div>
      </div>
    </section>
  );
}
