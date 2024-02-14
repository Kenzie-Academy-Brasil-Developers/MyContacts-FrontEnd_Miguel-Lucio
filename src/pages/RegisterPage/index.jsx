import registerImg from "../../assets/register.jpg";
import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.mainBox}>
          <RegisterForm />
          <div className={styles.infosBox}>
            <h1 className="title big bold">MyContacts</h1>
            <p className="title big bold primary">Alô?!</p>
            <p className="text gray300">
              Agora você pode consultar e gerenciar seus contatos sempre que
              precisar
            </p>
            <div className={styles.imgBox}>
              <img src={registerImg} alt="Cadastro" />
              <a
                className="text gray300 info"
                href="https://br.freepik.com/vetores-gratis/selecione-a-ilustracao-do-conceito_5421732.htm#query=contacts&position=49&from_view=search&track=sph&uuid=0e533bac-1437-4f7d-ae00-9edc4da50f2b"
                target="_blank"
              >
                Imagem de storyset no Freepik
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
