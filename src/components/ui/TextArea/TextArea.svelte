<script lang="ts">
  export let name: string;
  export let label: string;
</script>

<div class="input-wrapper">
  <textarea {name} {...$$restProps} />
  <label for={name}>{label}</label>
</div>

<style>
  textarea {
    padding: 1.8rem 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }

  .input-wrapper > textarea:focus {
    border: 2px solid var(--purple-light);
    outline: 0;
  }

  .input-wrapper > textarea:focus + label {
    color: var(--purple-light);
  }
</style>
