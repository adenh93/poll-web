<script lang="ts">
  type ButtonVariant = "primary" | "secondary" | "text";

  export let variant: ButtonVariant = "primary";

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

  button:disabled {
    cursor: not-allowed;
  }

  button.btn-primary,
  button.btn-secondary {
    padding: 2rem;
    width: 100%;
    border: none;
    border-radius: 1rem;
    font-size: 2.2rem;
    text-transform: uppercase;
  }

  button.btn-primary {
    background: var(--gradient-button);
    color: var(--text-white);
  }

  button.btn-secondary {
    background: #90a4ae;
    color: var(--text-white);
  }

  button.btn-primary:disabled {
    filter: brightness(80%);
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

  button.btn-text:disabled {
    filter: brightness(200%);
  }
</style>
