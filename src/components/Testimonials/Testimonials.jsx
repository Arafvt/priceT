import React, { useRef } from "react";
import s from "./Testimonials.module.css";
import useTestimonialsSlider from "../../hooks/useTestimonialsSlider.js";

export default function Testimonials() {
  const viewportRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useTestimonialsSlider({ viewportRef, prevRef, nextRef });

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Отзывы наших клиентов</h2>
          <p className="sub">Клиенты увеличивают свою прибыль в несколько раз уже в первый месяц.</p>
        </div>

        <div className={s.tSlider}>
          <button
            className={`${s.tSlider__nav} ${s["tSlider__nav--prev"]}`}
            type="button"
            aria-label="Предыдущий отзыв"
            ref={prevRef}
          >
            ←
          </button>

          <div className={s.tSlider__viewport} ref={viewportRef}>
            <article className={s.tCard} data-card>
              <div className={s.tCard__media} aria-hidden="true">
                <div className={s.tAvatar}>
                  <span className={s.tAvatar__glyph}>👤</span>
                </div>
              </div>

              <div className={s.tCard__content}>
                <div className={s.tStars} aria-label="5 из 5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <p className={s.tText}>
                  Раньше сам следил за ценами, теперь всё делает PriceTop. Стал свободнее во времени и больше уделять
                  внимания себе.
                </p>

                <div className={s.tFooter}>
                  <div className={s.tName}>Нурбол</div>
                  <a className={s.tSocial} href="#" aria-label="Instagram">
                    <span className={s.tSocial__ig}>◎</span>
                    <span className={s.tSocial__txt}>Instagram</span>
                  </a>
                </div>
              </div>
            </article>

            <article className={s.tCard} data-card>
              <div className={s.tCard__media} aria-hidden="true">
                <div className={s.tAvatar}>
                  <span className={s.tAvatar__glyph}>👤</span>
                </div>
              </div>

              <div className={s.tCard__content}>
                <div className={s.tStars} aria-label="5 из 5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <p className={s.tText}>
                  Поднялись в выдаче за счёт точных цен. Теперь реагируем быстрее конкурентов, продажи стабильнее.
                </p>

                <div className={s.tFooter}>
                  <div className={s.tName}>Айгерим</div>
                  <a className={s.tSocial} href="#" aria-label="Instagram">
                    <span className={s.tSocial__ig}>◎</span>
                    <span className={s.tSocial__txt}>Instagram</span>
                  </a>
                </div>
              </div>
            </article>

            <article className={s.tCard} data-card>
              <div className={s.tCard__media} aria-hidden="true">
                <div className={s.tAvatar}>
                  <span className={s.tAvatar__glyph}>👤</span>
                </div>
              </div>

              <div className={s.tCard__content}>
                <div className={s.tStars} aria-label="5 из 5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <p className={s.tText}>
                  Наконец перестали «терять» маржу ночью. PriceTop работают и в выходные — очень удобно.
                </p>

                <div className={s.tFooter}>
                  <div className={s.tName}>Руслан</div>
                  <a className={s.tSocial} href="#" aria-label="Instagram">
                    <span className={s.tSocial__ig}>◎</span>
                    <span className={s.tSocial__txt}>Instagram</span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <button
            className={`${s.tSlider__nav} ${s["tSlider__nav--next"]}`}
            type="button"
            aria-label="Следующий отзыв"
            ref={nextRef}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
