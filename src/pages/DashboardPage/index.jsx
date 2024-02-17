import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import { TbLogout, TbUserEdit } from "react-icons/tb";
import { UserContext } from "../../providers/UserContext";
import { UserUpdateModal } from "../../components/modals/UserUpdateModal";

export const DashboardPage = () => {
  const [hiddenOptions, setHiddenOptions] = useState(true);
  const [hiddenUserModal, setHiddenUserModal] = useState(true);

  const { user, userLogout } = useContext(UserContext);
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
                    <button onClick={() => setHiddenUserModal(false)}>
                      <TbUserEdit size={18} color="#212529" />
                      <p className="text">Editar</p>
                    </button>
                    <button onClick={() => userLogout()}>
                      <TbLogout size={18} color="#212529" />
                      <p className="text">Sair</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.infosBox}>
          <div className="container dash">
            <div className={styles.infosContent}>
              <p className="title bold">Olá, {user.fullName}</p>
              <div>
                <p className="text medium gray300">{user.email}</p>
                <p className="text info gray300">{user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {!hiddenUserModal && (
        <UserUpdateModal setHiddenUserModal={setHiddenUserModal} />
      )}
    </>
  );
};
