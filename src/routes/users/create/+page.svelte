<script lang="ts">
    import PageTitle from 'src/components/commons/page-title.svelte'
    import UserForm from 'src/components/features/users/form.svelte'
    import CardContent from 'src/components/ui/card/card-content.svelte'
    import CardHeader from 'src/components/ui/card/card-header.svelte'
    import CardTitle from 'src/components/ui/card/card-title.svelte'
    import Card from 'src/components/ui/card/card.svelte'
    import type { PageData } from '../$types'

    export let data: PageData
</script>

<svelte:head>
    <title>Cadastrar novo usuário</title>
</svelte:head>

<PageTitle>Cadastrar novo usuário</PageTitle>

<Card class="mt-10">
    <CardHeader>
        <CardTitle>Formulário</CardTitle>
    </CardHeader>
    <CardContent>
        <UserForm data={data.form} />
    </CardContent>
</Card>
