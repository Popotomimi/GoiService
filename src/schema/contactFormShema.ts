import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome precisa ter pelo menos 2 letras"),
  email: z.string().email("Email inválido"),
});
