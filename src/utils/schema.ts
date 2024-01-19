import { z } from 'zod';

export const mealSchema = z.object({
  id: z.string().min(0).optional().nullable(),
  name: z.string().min(1, 'Nome e um campo obrigatório.'),
  description: z.string().min(1, 'Descrição e um campo obrigatório.'),
  date: z.string().min(1, 'Data e um campo obrigatório.'),
  time: z.string().min(1, 'Hora e um campo obrigatório.'),
  diet: z.boolean(),
});

export type mealData = z.infer<typeof mealSchema>;
