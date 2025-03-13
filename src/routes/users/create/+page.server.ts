import { fail } from '@sveltejs/kit'
import { db } from 'src/lib/server/db/index.js'
import { users } from 'src/lib/server/db/schema.js'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { Actions, PageServerLoad } from './$types.js'
import { userSchema } from './schema.js'

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(userSchema)),
    }
}

export const actions: Actions = {
    default: async event => {
        const form = await superValidate(event, zod(userSchema))
        if (!form.valid) {
            return fail(400, {
                form,
            })
        }

        const newUser = userSchema.parse(form.data)
        const savedUser = await db.insert(users).values(newUser).returning();

        return {
            form,
            savedUser
        }
    },
}
