import { useContext } from "react";
import styles from "./style.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { UpdateContactForm } from "../../forms/UpdateContactForm";
import { ContactContext } from "../../../providers/ContactContext";

export const ContactUpdateModal = () => {
  const { setEditingContact } = useContext(ContactContext);
  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.formBox}>
        <div className={styles.header}>
          <p className="title">Editar Contato</p>
          <button
            onClick={() => setEditingContact(null)}
            className={styles.button}
          >
            <IoCloseOutline color="#212529" size={20} />
          </button>
        </div>
        <UpdateContactForm />
      </div>
    </div>
  );
};
