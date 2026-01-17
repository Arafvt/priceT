import React from "react";
import s from "./Footer.module.css";
import topbar from "../Header/Header.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer__inner}`}>
        <div className={s.footer__left}>
          <div className={`${topbar.brand} ${topbar["brand--small"]}`}>
            <span className={topbar.brand__mark} aria-hidden="true">PT</span>
            <span className={topbar.brand__name}>PriceTop</span>
          </div>
          <div className={s.footer__copy}>© {year} PriceTop</div>
        </div>

        <div className={s.footer__right}>
          <a className={s.footer__link} href="#problem">Проблема</a>
          <a className={s.footer__link} href="#faq">Пользовательское соглашение</a>
          <a className={s.footer__link} href="#pricing">Услуги</a>
        </div>
      </div>
    </footer>
  );
}
