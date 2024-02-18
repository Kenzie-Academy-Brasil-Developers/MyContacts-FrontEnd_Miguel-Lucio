import { ContactCard } from "./ContactCard";
import styles from "./style.module.scss";
import { RxPlus } from "react-icons/rx";

export const ContactList = () => {
  return (
    <div className={styles.contactBox}>
      <div className={styles.titleBox}>
        <h3 className="title label bold">Contatos</h3>
        <button className={styles.button}>
          <RxPlus size={16} color="#212529" />
        </button>
      </div>
      <ul>
        {/* <li>
          <p className="text bold textCenter">
            Você ainda não possui usuários cadastrados
          </p>
        </li> */}

        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </ul>
    </div>
  );
};
