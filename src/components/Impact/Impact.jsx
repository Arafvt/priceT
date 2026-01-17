import React from "react";
import s from "./Impact.module.css";

function IconOrders() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7h18M7 11h10M5 15h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function IconTime() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconClockSmall() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7V12L15 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LargeBar({ before, after }) {
  const max = Math.max(before, after, 1);
  const hb = Math.round((before / max) * 100);
  const ha = Math.round((after / max) * 100);
  const delta = before ? Math.round(((after - before) / before) * 100) : 0;
  return (
    <div className={s.largeBarWrap}>
      <div className={s.largeBars}>
        <div
          className={s.largeBar + " " + s.largeBarBefore}
          style={{ height: `${hb}%` }}
        >
          <span className={s.barValue}>До</span>
        </div>
        <div
          className={s.largeBar + " " + s.largeBarAfter}
          style={{ height: `${ha}%` }}
        >
          <span className={s.barValue}>После</span>
        </div>
      </div>
      <div className={s.delta}>{delta > 0 ? `+${delta}%` : `${delta}%`}</div>
    </div>
  );
}

export default function Impact() {
  const metrics = [
    {
      key: "orders",
      icon: <IconOrders />,
      title: "Заказы",
      before: 100,
      after: 170,
      hint: "+60–80%",
    },
    {
      key: "timeTop",
      icon: <IconTime />,
      title: "Время в топе",
      before: 2,
      after: 14,
      hint: "ч/д",
    },
    {
      key: "manual",
      icon: <IconClockSmall />,
      title: "Ручное время",
      before: 180,
      after: 15,
      hint: "мин/д",
    },
  ];

  return (
    <section className="section" id="impact">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Разница в цифрах</h2>
          <p className="sub">
            Коротко: ключевые метрики до и после — визуально и понятно.
          </p>
        </div>

        <div className={s.impact__grid}>
          <div className={s.impactBig} data-tilt>
            <div className={s.impactBig__head}>
              <h3 className={s.impactBig__title}>Потенциальный эффект</h3>
              <p className={s.impactBig__lead}>
                Сравнение ключевых метрик — визуально. Чёрные столбики «До»,
                цветные — «После».
              </p>
            </div>

            <div className={s.impactBig__content}>
              <div className={s.metricsGrid}>
                {metrics.map((m) => (
                  <div key={m.key} className={s.metricCard}>
                    <div className={s.metricHeader}>
                      <div className={s.metricIcon}>{m.icon}</div>
                      <div className={s.metricTitle}>{m.title}</div>
                    </div>
                    <LargeBar before={m.before} after={m.after} />
                    <div className={s.metricHint}>{m.hint}</div>
                  </div>
                ))}
              </div>

              <div className={s.impactBig__stats}>
                <div className={s.bigStat}>
                  <div className={s.bigStat__k}>Заказы</div>
                  <div className={s.bigStat__v}>+60–80%</div>
                  <div className={s.bigStat__hint}>за счёт позиции</div>
                </div>

                <div className={s.bigStat}>
                  <div className={s.bigStat__k}>Время на цены</div>
                  <div className={s.bigStat__v}>−70–90%</div>
                  <div className={s.bigStat__hint}>меньше рутины</div>
                </div>

                <div className={s.bigStat}>
                  <div className={s.bigStat__k}>Вечерние продажи</div>
                  <div className={s.bigStat__v}>рост</div>
                  <div className={s.bigStat__hint}>когда вы не онлайн</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
