import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schema } from "./validator";
import styles from "./style.module.scss";
import { useState } from "react";
import { Input } from "../Input";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const submit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.formBox}>
        <h2 className="title textCenter">Cadastro</h2>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          error={errors.fullName}
          disabled={loading}
          {...register("fullName")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          error={errors.email}
          disabled={loading}
          {...register("email")}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite aqui seu número"
          error={errors.phone}
          disabled={loading}
          {...register("phone")}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          error={errors.password}
          disabled={loading}
          {...register("password")}
        />
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Confirme aqui sua senha"
          error={errors.confirmPassword}
          disabled={loading}
          {...register("confirmPassword")}
        />
        <button type="submit" className="btn">
          Cadastrar
        </button>

        <Link to={"/"}>
          <button className="btn transparent">Votar para o login</button>
        </Link>
      </div>
    </form>
  );
};
