import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="title label">{label}</label>
      <input className={styles.input} ref={ref} {...rest} />
      {error ? <p className="text medium primary">{error.message}</p> : null}
    </div>
  );
});
