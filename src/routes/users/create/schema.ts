import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    surname: z.string().min(1, { message: 'Sobrenome é obrigatório' }),
    cpf: z.string().length(14, { message: 'CPF inválido' }),
    email: z.string().email({ message: 'Email inválido' }),
})

export type UserSchema = typeof userSchema
