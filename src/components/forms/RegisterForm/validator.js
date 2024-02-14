import { z } from "zod";

export const schema = z
  .object({
    fullName: z
      .string()
      .max(120, "Máximo de 120 caracteres")
      .min(2, "Mínimo de 2 caracteres")
      .nonempty("O nome é obrigatório"),
    email: z
      .string()
      .max(50, "Máximo de 50 caracteres")
      .email("Forneça um e-mail válido")
      .nonempty("O campo email é obrigatório"),
    password: z
      .string()
      .max(120, "Máximo de 120 caracteres")
      .min(8, "Mínimo de 8 caracteres")
      .nonempty("O campo senha é obrigatório")
      .regex(/[A-Z]+/, "Obrigatório conter uma letra maiúscula")
      .regex(/[a-z]+/, "Obrigatório conter uma letra minúscula")
      .regex(/[0-9]+/, "Obrigatório conter um número")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
        "Obrigatório conter um carácter especial."
      ),
    confirmPassword: z.string().nonempty("Confirme sua senha"),
    phone: z
      .string()
      .max(20, "Máximo de 20 caracteres")
      .min(2, "Mínimo de 2 caracteres")
      .nonempty("O campo telefone é obrigatório"),
    admin: z.boolean().default(false),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
