<script lang="ts">
    import { page } from '$app/state'
</script>

{#if page.status === 404}
    <div class="p-4">
        <h2 class="text-xl font-semibold">Página não encontrada</h2>
        <p>A página que você está procurando não existe.</p>
    </div>
{/if}
