import loginImg from "../../assets/login.jpg";
import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./style.module.scss";

export const LoginPage = () => {
    return (
        <main>
          <div className="container">
            <div className={styles.mainBox}>
              <div className={styles.infosBox}>
                <h1 className="title big bold">MyContacts</h1>
                <p className="title big bold">
                  <span className="title big bold primary">Guardando</span> pessoas
                  para a <span className="title big bold primary">vida</span> toda
                </p>
                <p className="text gray300">Seus contatos sempre em mãos</p>
                <div className={styles.imgBox}>
                  <img src={loginImg} alt="My contacts" />
                  <a
                    className="text gray300 info"
                    href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-messenger_6199003.htm#query=contacts&position=11&from_view=search&track=sph&uuid=db8e92f1-63b5-4893-a20b-1b87dbe4fde1"
                    target="_blank"
                  >
                    Imagem de storyset no Freepik
                  </a>
                </div>
              </div>
              <LoginForm />
            </div>
          </div>
        </main>
      );
    };
