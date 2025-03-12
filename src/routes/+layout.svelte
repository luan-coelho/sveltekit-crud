<script lang="ts">
    import Footer from "$components/layout/footer.svelte";
    import Sidebar from "src/components/layout/sidebar.svelte";
    import "../app.css";
    import Header from "./Header.svelte";

    let { children } = $props();
</script>

<div class="flex h-screen bg-gray-100">
    <Sidebar />

    <div class="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main class="flex-1 overflow-y-auto bg-gray-100 p-5 py-[40px] md:p-10">
            {@render children()}
        </main>

        <Footer />
    </div>
</div>

<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>
