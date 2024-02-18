import { RegisterContactForm } from "../../forms/RegisterContactForm";
import styles from "./style.module.scss";
import { IoCloseOutline } from "react-icons/io5";

export const ContactCreateModal = ({ setHiddenCreateContact }) => {
  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.formBox}>
        <div className={styles.header}>
          <p className="title">Novo Contato</p>
          <button
            onClick={() => setHiddenCreateContact(true)}
            className={styles.button}
          >
            <IoCloseOutline color="#212529" size={20} />
          </button>
        </div>
        <RegisterContactForm setHiddenCreateContact={setHiddenCreateContact}/>
      </div>
    </div>
  );
};
