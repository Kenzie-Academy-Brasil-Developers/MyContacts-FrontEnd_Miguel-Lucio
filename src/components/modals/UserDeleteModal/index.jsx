import { useContext } from "react";
import styles from "./style.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { UserContext } from "../../../providers/UserContext";

export const UserDeleteModal = ({ setHiddenUserDelete }) => {
  const { user, userDelete } = useContext(UserContext);

  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.formBox}>
        <div className={styles.header}>
          <p className="title">Excluir cadastro</p>
          <button
            onClick={() => setHiddenUserDelete(true)}
            className={styles.button}
          >
            <IoCloseOutline color="#212529" size={20} />
          </button>
        </div>
        <div className={styles.textBox}>
          <p className="title modal">
            Tem certeza que deseja excluir seu perfil?
          </p>
          <p className="text gray300">
            Todos os dados vinculados a sua conta serão perdidos
          </p>
        </div>
        <div className={styles.buttonsBox}>
          <button
            onClick={() => setHiddenUserDelete(true)}
            className="btn transparent"
          >
            Cancelar
          </button>
          <button onClick={() => userDelete(user.id)} className="btn">
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};
