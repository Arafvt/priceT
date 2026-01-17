import React from "react";
import s from "./Background.module.css";

export default function Background() {
  return (
    <div className={s.bg}>
      <div className={s.bg__noise} />
      <div className={`${s.bg__glow} ${s["bg__glow--a"]}`} />
      <div className={`${s.bg__glow} ${s["bg__glow--b"]}`} />
      <div className={`${s.bg__glow} ${s["bg__glow--c"]}`} />
      <div className={s.bg__grid} />
    </div>
  );
}
