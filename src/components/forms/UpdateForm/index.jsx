import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validator";
import { Input } from "../Input";
import styles from "./style.module.scss";

export const UpdateForm = ({ setHiddenUserModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const { user, userUpdate } = useContext(UserContext);

  const submit = (data) => {
    if (data.email == user.email) {
      delete data.email;
    }
    userUpdate(data, setLoading, user.id, setHiddenUserModal);
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
          defaultValue={user.fullName}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          disabled={loading}
          error={errors.email}
          {...register("email")}
          defaultValue={user.email}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite aqui seu número"
          disabled={loading}
          error={errors.phone}
          {...register("phone")}
          defaultValue={user.phone}
        />
        <Input
          label="Nova senha"
          type="password"
          placeholder="Digite aqui sua nova senha"
          error={errors.password}
          disabled={loading}
          {...register("password")}
        />
        <div className={styles.buttonsBox}>
          <button
            type="button"
            className="btn transparent"
            onClick={() => setHiddenUserModal(true)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn">
            Atualizar
          </button>
        </div>
      </div>
    </form>
  );
};
