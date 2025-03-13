<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import { cn } from '$core/utils/cn'

    type $$Props = HTMLAttributes<HTMLDivElement>

    let className: $$Props['class'] = undefined
    export { className as class }
</script>

<div class={cn('flex h-12 flex-col justify-center justify-items-center border-b px-6 py-8', className)} {...$$restProps}>
    <slot />
</div>
