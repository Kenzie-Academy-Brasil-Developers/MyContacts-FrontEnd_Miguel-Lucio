import styles from "./style.module.scss";
import { RxTrash, RxPencil1 } from "react-icons/rx";

export const ContactCard = () => {
  return (
    <li>
      <div className={styles.cardBox}>
        <div className={styles.headerBox}>
          <div className={styles.firstChar}>
            <p>M</p>
          </div>
          <div className={styles.buttonBox}>
            <button>
              <RxPencil1 size={16} color="#212529" />
            </button>
            <button>
              <RxTrash size={16} color="#212529" />
            </button>
          </div>
        </div>
        <div className={styles.profileBox}>
          <div className={styles.nameBox}>
            <p className="title label">Maria Gabriella Souza Lopes Silva</p>
          </div>
          <p className="text medium gray300">mgabislsilva@gmail.com</p>
          <p className="text info gray300">12991709688</p>
        </div>
        <div></div>
      </div>
    </li>
  );
};
