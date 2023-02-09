<script lang="ts">
  export let name: string;
  export let label: string;
  export let error: string = null;

  $: className = error ? "invalid" : "";
</script>

<div class="input-wrapper">
  <slot name="icon-left" class="icon-left" />
  <input {name} {...$$restProps} class={className} />
  <label for={name}>{label}</label>
  <slot name="icon-right" class="icon-right" />
  {#if error}
    <p class="input-error">{error}</p>
  {/if}
</div>

<style>
  :global([slot="icon"]) {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  }

  input {
    padding: 1.8rem 5rem 1.8rem 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
    width: 100%;
    box-sizing: border-box;
  }

  input.invalid {
    border: 2px solid var(--status-error);
  }

  input.invalid + label {
    color: var(--status-error);
  }

  .input-error {
    color: var(--status-error);
    margin-top: 0.5rem;
  }

  input:focus {
    border: 2px solid var(--purple-light);
    outline: 0;
  }

  input:focus + label {
    color: var(--purple-light);
  }
</style>
