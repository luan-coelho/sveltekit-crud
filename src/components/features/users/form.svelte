<script lang="ts">
    import * as Form from 'src/components/ui/form'
    import { Input } from 'src/components/ui/input'
    import { userSchema, type UserSchema } from 'src/routes/users/create/schema'
    import { type Infer, superForm, type SuperValidated } from 'sveltekit-superforms'
    import { zodClient } from 'sveltekit-superforms/adapters'

    export let data: SuperValidated<Infer<UserSchema>>

    const form = superForm(data, {
        validators: zodClient(userSchema),
    })

    const { form: formData, enhance } = form
</script>

<form method="POST" action="/users/create" use:enhance>
    <div class="grid grid-cols-12 gap-4">
        <Form.Field {form} name="name" class="col-span-12">
            <Form.Control let:attrs>
                <Form.Label>Nome</Form.Label>
                <Input {...attrs} bind:value={$formData.name} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="surname" class="col-span-12">
            <Form.Control let:attrs>
                <Form.Label>Sobrenome</Form.Label>
                <Input {...attrs} bind:value={$formData.surname} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="cpf" class="col-span-12">
            <Form.Control let:attrs>
                <Form.Label>CPF</Form.Label>
                <Input {...attrs} bind:value={$formData.cpf} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="email" class="col-span-12">
            <Form.Control let:attrs>
                <Form.Label>E-mail</Form.Label>
                <Input {...attrs} bind:value={$formData.email} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>
    </div>

    <div class="flex justify-end">
        <Form.Button type="submit">Cadastrar</Form.Button>
    </div>
</form>
