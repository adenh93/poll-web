<script lang="ts">
  export let name: string;
  export let label: string;
</script>

<textarea {name} {...$$restProps} />
<label for={name}>{label}</label>

<style>
  textarea {
    padding: 1.8rem 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }

  label {
    position: absolute;
    top: -0.7rem;
    left: 2.3rem;
    padding-left: 0.5rem;
    padding-right: 5rem;
    background-color: var(--bg-white);
    font-size: 1.4rem;
    font-weight: light;
  }

  textarea:focus {
    border: 2px solid var(--purple-light);
    outline: 0;
  }

  textarea:focus + label {
    color: var(--purple-light);
  }
</style>
