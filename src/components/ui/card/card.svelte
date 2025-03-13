<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import { cn } from '$core/utils/cn'

    type $$Props = HTMLAttributes<HTMLDivElement>

    let className: $$Props['class'] = undefined
    export { className as class }
</script>

<div
    class={cn('rounded-none rounded-t-sm border border-t-[3px] border-t-primary bg-card text-card-foreground', className)}
    {...$$restProps}>
    <slot />
</div>
