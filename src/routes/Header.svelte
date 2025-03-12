<script lang="ts">
    import { sidebarExpanded } from "$stores/sidebar-store";
    import { ChevronLeft, Menu } from "lucide-svelte";

    function toggleSidebar() {
        sidebarExpanded.update(value => !value);
    }
</script>

<header
    class="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm">
    <div class="flex items-center">
        <!-- Botão de menu para controlar o sidebar -->
        <button
            onclick={toggleSidebar}
            class="cursor-pointer rounded p-2 hover:bg-[#f5f5f5]"
            aria-label="Toggle sidebar">
            {#if $sidebarExpanded}
                <ChevronLeft size={20} />
            {:else}
                <Menu size={20} />
            {/if}
        </button>
    </div>
</header>
