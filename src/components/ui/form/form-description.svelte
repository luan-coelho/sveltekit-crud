<script lang="ts">
    import * as FormPrimitive from 'formsnap'
    import { cn } from '$core/utils/cn'
    import type { HTMLAttributes } from 'svelte/elements'

    type $$Props = HTMLAttributes<HTMLSpanElement>
    let className: string | undefined | null = undefined
    export { className as class }
</script>

<FormPrimitive.Description
    class={cn('text-muted-foreground text-sm', className)}
    {...$$restProps}
    let:descriptionAttrs>
    <slot {descriptionAttrs} />
</FormPrimitive.Description>
