import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import { TbLogout, TbUserEdit, TbUserX } from "react-icons/tb";
import { UserContext } from "../../providers/UserContext";
import { UserUpdateModal } from "../../components/modals/UserUpdateModal";
import { UserDeleteModal } from "../../components/modals/UserDeleteModal";
import { ContactList } from "../../components/ContactList";
import { ContactContext } from "../../providers/ContactContext";
import { ContactCreateModal } from "../../components/modals/ContactCreateModal";
import { ContactUpdateModal } from "../../components/modals/ContacUpdateModal";

export const DashboardPage = () => {
  const [hiddenOptions, setHiddenOptions] = useState(true);
  const [hiddenUserModal, setHiddenUserModal] = useState(true);
  const [hiddenUserDelete, setHiddenUserDelete] = useState(true);

  const { user, userLogout } = useContext(UserContext);
  const { hiddenCreateContact, setHiddenCreateContact, editingContact } =
    useContext(ContactContext);
  return (
    <>
      <header>
        <div className="container dash">
          <div className={styles.headerBox}>
            <h1 className="title bold primary">MyContacts</h1>
            <div className={styles.profileBox}>
              <div className={styles.firstChar}>
                <p>{user.fullName.charAt(0).toUpperCase()}</p>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => setHiddenOptions(!hiddenOptions)}
                  className={styles.button}
                >
                  {hiddenOptions ? (
                    <RxHamburgerMenu size={20} color="#212529" />
                  ) : (
                    <RxChevronDown size={20} color="#212529" />
                  )}
                </button>
                {!hiddenOptions && (
                  <div className={styles.options}>
                    <button onClick={() => userLogout()}>
                      <TbLogout size={16} color="#212529" />
                      <p className="text medium">Sair</p>
                    </button>
                    <button onClick={() => setHiddenUserModal(false)}>
                      <TbUserEdit size={16} color="#212529" />
                      <p className="text medium">Editar</p>
                    </button>
                    <button onClick={() => setHiddenUserDelete(false)}>
                      <TbUserX size={16} color="#212529" />
                      <p className="text medium">Excluir</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.infosBox}>
          <div className="container dash">
            <div className={styles.infosContent}>
              <p className="title bold">Olá, {user.fullName}</p>
              <div>
                <p className="text medium gray300">{user.email}</p>
                <p className="text info gray300">{user.phone}</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container dash">
            <ContactList />
          </div>
        </section>
      </main>
      {!hiddenCreateContact && (
        <ContactCreateModal setHiddenCreateContact={setHiddenCreateContact} />
      )}
      {editingContact && <ContactUpdateModal />}
      {!hiddenUserModal && (
        <UserUpdateModal setHiddenUserModal={setHiddenUserModal} />
      )}
      {!hiddenUserDelete && (
        <UserDeleteModal setHiddenUserDelete={setHiddenUserDelete} />
      )}
    </>
  );
};
