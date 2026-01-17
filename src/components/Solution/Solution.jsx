import React from "react";
import s from "./Solution.module.css";
import Button from "../ui/Button.jsx";
import compareImg from "../../assets/как-увеличить-продажи-на-Каспи.jpg";

export default function Solution() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div className={s.solution__grid}>
          <div className={s.benefits}>
            <div className={s.benefit_inf}>
              <h2 className={s.benefit_h}>Решение — быть первым в продаже</h2>
              <p className={s.benefit_p}>
                Вы задаёте минимум и максимум. Дальше цена двигается маленькими шагами — чтобы поднять вас выше и не
                уйти в минус.
              </p>

              <Button variant="primary" size="lg" href="#pricing" withSpark>
                Попробовать бесплатно
              </Button>
            </div>
          </div>

          <div className={s.compare} data-tilt>
            <div className={s.compare__body}>
              <div>
                <img
                  className={s.compare__img}
                  src={compareImg}
                  alt="До: список продавцов / позиция ниже"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={s.compare__beam} aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
