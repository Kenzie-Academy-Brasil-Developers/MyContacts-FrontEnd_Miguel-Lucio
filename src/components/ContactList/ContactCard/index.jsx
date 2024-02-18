import { useContext } from "react";
import styles from "./style.module.scss";
import { RxTrash, RxPencil1 } from "react-icons/rx";
import { ContactContext } from "../../../providers/ContactContext";

export const ContactCard = ({ contact }) => {
  const { setEditingContact, contactDelete } = useContext(ContactContext);
  return (
    <li>
      <div className={styles.cardBox}>
        <div className={styles.headerBox}>
          <div className={styles.firstChar}>
            <p>{contact.fullName.charAt(0).toUpperCase()}</p>
          </div>
          <div className={styles.buttonBox}>
            <button
              onClick={() => {
                setEditingContact(contact);
              }}
            >
              <RxPencil1 size={16} color="#212529" />
            </button>
            <button
              onClick={() => {
                contactDelete(contact.id);
              }}
            >
              <RxTrash size={16} color="#212529" />
            </button>
          </div>
        </div>
        <div className={styles.profileBox}>
          <div className={styles.nameBox}>
            <p className="title label">{contact.fullName}</p>
          </div>
          <p className="text medium gray300">{contact.email}</p>
          <p className="text info gray300">{contact.phone}</p>
        </div>
        <div></div>
      </div>
    </li>
  );
};
