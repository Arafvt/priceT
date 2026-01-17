import React, { useRef } from "react";
import s from "./Problem.module.css";
import useProblemAutoSlider from "../../hooks/useProblemAutoSlider.js";
import imgArrow from "../../assets/arrow-to-top.png";
import imgClock from "../../assets/clock-dashed-half.png";
import imgChart from "../../assets/chart-trend.png";
import imgCheck from "../../assets/check.png";
import imgMoon from "../../assets/moon.png";
import imgDollar from "../../assets/dollar.png";

export default function Problem() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  useProblemAutoSlider(rootRef, trackRef, { speed: 35 });

  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Проблема рынка</h2>
          <p className="sub">Первый в списке - первым получишь прибыль.</p>
        </div>

        <div className={s.problemSlider} ref={rootRef}>
          <div className={s.problemSlider__viewport}>
            <div className={s.problemSlider__track} ref={trackRef}>
              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgArrow} alt="" />
                  <b>Не в топе</b>
                  <span>Покупатель выбирает того кто стоит первым в покупке.</span>
                </div>
              </article>

              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgClock} alt="" />
                  <b>Free time</b>
                  <span>На личные дела нехватает времени из за постоянного мониторинга рынка.</span>
                </div>
              </article>

              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgChart} alt="" />
                  <b>Анализ</b>
                  <span>Самостоятельный анализ и трата 90% времени каждый день только на анализе цен.</span>
                </div>
              </article>

              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgCheck} alt="" />
                  <b>Ручные правки</b>
                  <span>Вы не успеваете за изменениями и теряете много времени только на поправке стоимости.</span>
                </div>
              </article>

              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgMoon} alt="" />
                  <b>Вечерний пик</b>
                  <span>В важные часы цена постоянно меняется и получает прибыль тот, кто первый.</span>
                </div>
              </article>

              <article className={s.problemSlide}>
                <div className={s.problemSlide__text}>
                  <img src={imgDollar} alt="" />
                  <b>Скачки цены</b>
                  <span>Цена меняется — позиция “плавает”.</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
