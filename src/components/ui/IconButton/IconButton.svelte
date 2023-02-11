<script lang="ts">
  export let ariaLabel: string;
</script>

<button on:click {...$$restProps} aria-label={ariaLabel}>
  <slot />
</button>

<style>
  button {
    display: flex;
    align-items: center;
    vertical-align: middle;
    background: none;
    border: none;
    padding: 1.5rem 0.8rem;
    cursor: pointer;
  }
</style>
