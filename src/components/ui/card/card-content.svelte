<script lang="ts">
    import { cn } from '$core/utils/cn'
    import type { HTMLAttributes } from 'svelte/elements'

    type $$Props = HTMLAttributes<HTMLDivElement>

    let className: $$Props['class'] = undefined
    export { className as class }
</script>

<div class={cn('p-6', className)} {...$$restProps}>
    <slot />
</div>
