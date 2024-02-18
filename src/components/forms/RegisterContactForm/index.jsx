import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validator";
import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { Input } from "../Input";

export const RegisterContactForm = ({ setHiddenCreateContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const { contactRegister } = useContext(ContactContext);

  const submit = (data) => {
    contactRegister(data, setLoading, reset);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.formBox}>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          disabled={loading}
          error={errors.fullName}
          {...register("fullName")}
          
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          disabled={loading}
          error={errors.email}
          {...register("email")}
          
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite aqui seu número"
          disabled={loading}
          error={errors.phone}
          {...register("phone")}
          
        />
        <div className={styles.buttonsBox}>
          <button
            type="button"
            className="btn transparent"
            onClick={() => setHiddenCreateContact(true)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn">
            Criar
          </button>
        </div>
      </div>
    </form>
  );
};
