import z from 'zod';

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export type TLoginSchemaType = z.infer<typeof LoginSchema>;
