import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('`user`', {
    id: serial('id').primaryKey(),
    name: varchar({
        length: 255,
    }),
    surname: varchar({
        length: 255,
    }),
    cpf: varchar({
        length: 14,
    }).unique(),
    email: varchar({
        length: 255,
    }).unique(),
})
