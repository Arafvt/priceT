import React, { useState, useMemo } from "react";
import s from "./Pricing.module.css";
import Button from "../ui/Button.jsx";

export default function Pricing() {
  const [months, setMonths] = useState(1);

  const discounts = { 1: 0, 3: 0.1, 6: 0.2, 12: 0.3 };

  const plans = useMemo(() => [
    { key: "start", name: "Start", desc: "для небольшого магазина", price: 9990, features: ["до 50 товаров", "границы цены (минимум/максимум)", "работает 24/7", "поддержка в чате"] },
    { key: "pro", name: "Pro", desc: "для стабильного роста", price: 24990, popular: true, features: ["до 300 товаров", "границы цены (минимум/максимум)", "приоритетная проверка", "поддержка в чате"] },
    { key: "business", name: "Business", desc: "для большого ассортимента", price: 49990, features: ["до 1000 товаров", "границы цены (минимум/максимум)", "расширенные правила", "приоритетная поддержка"] },
    { key: "vip", name: "VIP", desc: "персональный менеджер", price: 79990, features: ["до 5000 товаров", "индивидуальные правила", "приоритетная поддержка", "персональный менеджер 24/7 на связи"] },
  ], []);

  const formatPrice = (val) => new Intl.NumberFormat('ru-RU').format(Math.round(val));

  const getPriceFor = (base) => {
    const discount = discounts[months] ?? 0;
    const discountedMonthly = base * (1 - discount);
    return discountedMonthly;
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Тарифы</h2>

          <div className={s.billingSelector} role="tablist" aria-label="Период оплаты">
            {[1,3,6,12].map((m) => (
              <button
                key={m}
                className={[s.billingBtn, months === m ? s['billingBtn--active'] : ''].filter(Boolean).join(' ')}
                onClick={() => setMonths(m)}
                aria-pressed={months === m}
              >
                {m} {m === 1 ? 'мес' : 'мес'}
              </button>
            ))}
          </div>
        </div>

        <div className={s.pricing__grid}>
          {plans.map((p) => (
            <article key={p.key} className={[s.priceCard, p.popular ? s['priceCard--popular'] : ''].filter(Boolean).join(' ')} data-tilt>
              {p.popular ? <div className={s.priceBadge}>Хит покупок</div> : null}

              <div className={s.priceCard__top}>
                <div>
                  <div className={s.priceCard__name}>{p.name}</div>
                  <div className={s.priceCard__desc}>{p.desc}</div>
                </div>
                <div className={s.priceCard__price}>
                  <span className={s.priceCard__num}>{formatPrice(getPriceFor(p.price))} ₸</span>
                  <span className={s.priceCard__per}>/мес</span>
                </div>
              </div>

              <ul className={s.priceList}>
                {p.features.map((f, i) => (<li key={i}>{f}</li>))}
              </ul>

              <Button variant="primary" size="lg" href="#pricing" className={s.priceCard__btn}>
                Связаться
              </Button>
            </article>
          ))}
        </div>

        <div className={s.pricing__bottom} data-tilt>
          <div>
            <div className={s.pricing__bottomTitle}>Не подходит ни один вариант?</div>
            <div className={s.pricing__bottomSub}>Сделаем тариф под ваш объём и категорию.</div>
          </div>

          <Button size="lg" href="#pricing">Запросить условия</Button>
        </div>
      </div>
    </section>
  );
}
