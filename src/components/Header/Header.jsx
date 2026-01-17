import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import Button from "../ui/Button.jsx";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={s.topbar} id="top">
      <div className={`container ${s.topbar__inner}`}>
        <a className={s.brand} href="#top">
          <span className={s.brand__mark} aria-hidden="true">PT</span>
          <span className={s.brand__name}>PriceTop</span>
        </a>

        <nav className={s.nav} aria-label="Навигация">
          <a className={s.nav__link} href="#problem">Проблема</a>
          <a className={s.nav__link} href="#solution">Решение</a>
          <a className={s.nav__link} href="#how">Как работает</a>
          <a className={s.nav__link} href="#pricing">Прайс</a>
          <a className={s.nav__link} href="#reviews">Отзывы</a>
          <a className={s.nav__link} href="#faq">FAQ</a>
        </nav>

        <div className={s.topbar__actions}>
          <Button variant="primary" href="#pricing">Попробовать бесплатно</Button>
        </div>

        <button
          className={`${s.burger} ${open ? s.burgerOpen : ""}`}
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`${s.mobile} ${open ? s.mobileOpen : ""}`}>
        <div className={`container ${s.mobile__inner}`}>
          <a className={s.mobile__link} href="#problem" onClick={() => setOpen(false)}>Проблема</a>
          <a className={s.mobile__link} href="#solution" onClick={() => setOpen(false)}>Решение</a>
          <a className={s.mobile__link} href="#how" onClick={() => setOpen(false)}>Как работает</a>
          <a className={s.mobile__link} href="#pricing" onClick={() => setOpen(false)}>Прайс</a>
          <a className={s.mobile__link} href="#reviews" onClick={() => setOpen(false)}>Отзывы</a>
          <a className={s.mobile__link} href="#faq" onClick={() => setOpen(false)}>FAQ</a>

          <div className={s.mobile__actions}>
            <Button variant="primary" href="#pricing" onClick={() => setOpen(false)}>
              Попробовать бесплатно
            </Button>
            <Button href="#how" onClick={() => setOpen(false)}>
              Показать, как работает
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
