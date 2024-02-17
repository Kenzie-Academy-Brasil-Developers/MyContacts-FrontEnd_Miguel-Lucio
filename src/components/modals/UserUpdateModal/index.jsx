import { UpdateForm } from "../../forms/UpdateForm";
import styles from "./style.module.scss";
import { IoCloseOutline } from "react-icons/io5";

export const UserUpdateModal = ({ setHiddenUserModal }) => {
  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.formBox}>
        <div className={styles.header}>
          <p className="title">Atualizar cadastro</p>
          <button onClick={() => setHiddenUserModal(true)} className={styles.button}>
            <IoCloseOutline color="#212529" size={20} />
          </button>
        </div>
        <UpdateForm setHiddenUserModal={setHiddenUserModal} />
      </div>
    </div>
  );
};
