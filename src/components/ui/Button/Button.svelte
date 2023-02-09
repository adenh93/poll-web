<script lang="ts">
  export let variant: "primary" | "text" = "primary";

  const buttonClass = `btn-${variant}`;
</script>

<button {...$$restProps} class={buttonClass} on:click>
  <slot name="icon-left" />
  <slot />
  <slot name="icon-right" />
</button>

<style>
  button {
    cursor: pointer;
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  button.btn-primary {
    padding: 2rem;
    width: 100%;
    background: var(--gradient-button);
    border: none;
    border-radius: 1rem;
    font-size: 2.2rem;
    text-transform: uppercase;
    color: var(--text-white);
  }

  button.btn-text {
    padding: 0;
    background: none;
    width: fit-content;
    border: none;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--text-body);
  }
</style>
