import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { schema } from "./validator";
import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { Input } from "../Input";

export const UpdateContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const { editingContact, setEditingContact, contactUpdate } =
    useContext(ContactContext);

  const submit = (data) => {
    if (data.email == editingContact.email) {
      delete data.email;
    }

    contactUpdate(data, setLoading, editingContact.id);
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
          defaultValue={editingContact.fullName}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          disabled={loading}
          error={errors.email}
          {...register("email")}
          defaultValue={editingContact.email}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite aqui seu número"
          disabled={loading}
          error={errors.phone}
          {...register("phone")}
          defaultValue={editingContact.phone}
        />
        <div className={styles.buttonsBox}>
          <button
            type="button"
            className="btn transparent"
            onClick={() => setEditingContact(null)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn">
            Editar
          </button>
        </div>
      </div>
    </form>
  );
};
