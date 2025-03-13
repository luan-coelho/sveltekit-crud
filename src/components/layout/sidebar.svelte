<script lang="ts">
    import { sidebarExpanded } from '$stores/sidebar-store'
</script>

<aside
    class="bg-gray-900 text-white transition-all duration-300 ease-in-out"
    class:w-64={$sidebarExpanded}
    class:w-16={!$sidebarExpanded}>
    <div class="p-4">
        <h2 class="overflow-hidden text-xl font-semibold whitespace-nowrap">
            {#if $sidebarExpanded}Menu{:else}M{/if}
        </h2>
    </div>
    <nav class="mt-6">
        <ul>
            <li class="flex items-center px-4 py-2 hover:bg-gray-800">
                <span class="material-icons mr-2">home</span>
                {#if $sidebarExpanded}
                    <span class="overflow-hidden whitespace-nowrap">Início</span>
                {/if}
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-800">
                <span class="material-icons mr-2">dashboard</span>
                {#if $sidebarExpanded}
                    <span class="overflow-hidden whitespace-nowrap">Dashboard</span>
                {/if}
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-800">
                <span class="material-icons mr-2">settings</span>
                {#if $sidebarExpanded}
                    <a
                        data-sveltekit-preload-data="tap"
                        href="/users"
                        class="overflow-hidden whitespace-nowrap">
                        Usuários
                    </a>
                {/if}
            </li>
        </ul>
    </nav>
</aside>
