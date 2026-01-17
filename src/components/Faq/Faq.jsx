import React from "react";
import s from "./Faq.module.css";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Часто задаваемые вопросы</h2>
        </div>

        <div className={s.faq}>
          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Это безопасно для магазина?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Логика простая: сервис меняет цену в заданных вами границах.
              Контроль остаётся у вас.
            </div>
          </details>

          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Не уйду ли я в минус?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Если выставлен минимум — ниже него цена не опускается.
            </div>
          </details>

          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Как попробовать бесплатно?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Мы предоставляем бесплатную пробную версию на 3 дня ко всему
              функционалу. Просто зарегистрируйтесь и начните тестировать
              сервис.
            </div>
          </details>

          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Это все легально? Могут ли меня заблокировать?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Это все абсолютно легально. Сервис не нарушает никаких правил, он
              делает то, что делает человек. Просто делает это он намного
              быстрее. Блокировок не будет.
            </div>
          </details>

          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Как часто обновляются цены?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Проверка идёт регулярно — в среднем примерно раз в 3 минуты.
            </div>
          </details>

          <details className={s.faq__item} data-tilt>
            <summary className={s.faq__q}>
              Подойдёт, если товаров много?
              <span className={s.faq__chev} aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className={s.faq__a}>
              Да. Смысл как раз в том, чтобы не следить вручную за десятками и
              сотнями товаров.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
