'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'O nome da empresa deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um e-mail corporativo válido.' }),
  phone: z.string().min(10, { message: 'O telefone deve ter pelo menos 10 caracteres.' }),
  service: z.string().optional(),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export type State = {
  errors?: {
    name?: string[];
    company?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitContactForm(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Falha ao enviar. Verifique os campos.',
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data.
  console.log('Form data:', validatedFields.data);

  // On success, redirect to the thank you page.
  redirect('/obrigado');
}
