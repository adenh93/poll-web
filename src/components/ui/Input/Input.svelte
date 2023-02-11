<script lang="ts">
  export let name: string;
  export let label: string;
</script>

<input {name} {...$$restProps} />
<label for={name}>{label}</label>

<style>
  input {
    padding: 1.8rem 5rem 1.8rem 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
    width: 100%;
    box-sizing: border-box;
  }

  input[aria-invalid="true"] {
    border: 2px solid var(--status-error);
  }

  input[aria-invalid="true"] + label {
    color: var(--status-error);
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 2.3rem;
    padding-left: 0.5rem;
    padding-right: 5rem;
    background-color: var(--bg-white);
    font-size: 1.4rem;
    font-weight: light;
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
