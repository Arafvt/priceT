import React from "react";
import s from "./Button.module.css";

export default function Button({
  children,
  href,
  onClick,
  variant,
  size,
  withSpark,
  type = "button",
  className: classNameProp,
}) {
  const classes = [
    s.btn,
    variant === "primary" ? s.primary : "",
    size === "lg" ? s.lg : "",
    classNameProp || "",
  ].filter(Boolean).join(" ");

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
        {withSpark ? <span className={s.spark} aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
      <button className={classes} type={type} onClick={onClick}>
      {children}
      {withSpark ? <span className={s.spark} aria-hidden="true" /> : null}
    </button>
  );
}
