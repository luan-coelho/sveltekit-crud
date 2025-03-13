import { writable } from 'svelte/store'

// Criando uma store para controlar o estado do sidebar
export const sidebarExpanded = writable(true)
