import { useContext } from "react";
import { ContactCard } from "./ContactCard";
import styles from "./style.module.scss";
import { RxPlus } from "react-icons/rx";
import { ContactContext } from "../../providers/ContactContext";

export const ContactList = () => {
  const { setHiddenCreateContact, contactsList } = useContext(ContactContext);

  return (
    <div className={styles.contactBox}>
      <div className={styles.titleBox}>
        <h3 className="title label bold">Contatos</h3>
        <button className={styles.button}>
          <RxPlus size={16} color="#212529" />
        </button>
      </div>
      <ul>
        {contactsList.legth === 0 ? (
          <li>
            <p className="text bold textCenter">
              Você ainda não possui usuários cadastrados
            </p>
          </li>
        ) : (
          contactsList.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </ul>
    </div>
  );
};
