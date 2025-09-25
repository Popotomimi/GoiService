"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    const response = await fetch(
      "https://formsubmit.co/ajax/roberto_o7@outlook.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      toast.error("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-6 rounded-md bg-zinc-950 text-white shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600"
                  placeholder="Seu nome"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600"
                  placeholder="Seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600"
                  placeholder="Sua mensagem..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-rose-600 hover:bg-rose-700 cursor-pointer text-white shadow-lg shadow-rose-600/30 transition-colors px-5 py-2">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
