import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Nombre demasiado corto').max(80),
  company: z.string().min(2, 'Empresa demasiado corta').max(80),
  email: z.string().email('Email no válido'),
  service: z.string().min(1, 'Selecciona un servicio'),
  message: z.string().min(10, 'Mensaje demasiado corto').max(2000),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;
