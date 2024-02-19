import errorImg from "../../assets/error.jpg";
import styles from "./style.module.scss";

export const ErrorPage = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.contentBox}>
          <h1 className="title big bold">MyContacts</h1>
          <div className={styles.imgBox}>
            <img src={errorImg} alt="Error image" />
          </div>
          <a
            className="text gray300 info"
            href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-erro-404_7741849.htm#query=404&position=4&from_view=search&track=sph&uuid=1bd421ef-2b22-4d3d-a5f4-74ba4b778809"
          >
            Imagem de storyset no Freepik
          </a>{" "}
          <p className="text">Página não encontrada</p>
        </div>
      </div>
    </main>
  );
};
