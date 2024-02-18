import { z } from "zod";

export const schema = z.object({
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
  phone: z
    .string()
    .max(20, "Máximo de 20 caracteres")
    .min(2, "Mínimo de 2 caracteres")
    .nonempty("O campo telefone é obrigatório"),
});
