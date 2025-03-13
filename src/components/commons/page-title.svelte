<script lang="ts">
    import { cn } from '$core/utils/cn'
    import type { HTMLAttributes } from 'svelte/elements'

    type $$Props = HTMLAttributes<HTMLDivElement>

    let className: $$Props['class'] = undefined
    let { children } = $props()
    
    export { className as class }
</script>

<div class={cn('flex items-center justify-between', className)}>
    <h1 class="text-3xl font-bold text-gray-900">{@render children?.()}</h1>
</div>
