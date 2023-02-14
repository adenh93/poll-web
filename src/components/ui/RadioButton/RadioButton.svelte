<script lang="ts">
  export let checked: boolean;
</script>

<label>
  <input type="radio" {checked} on:change />
  <span class="checkmark" />
  <slot />
</label>

<style>
  label {
    font-size: 1.4rem;
    width: 100%;
    cursor: pointer;
    position: relative;
    display: block;
    user-select: none;
    padding-left: 4rem;
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: -0.6rem;
    left: 0;
    height: 2.2rem;
    width: 2.2rem;
    border: 0.2rem solid var(--purple-light);
    background-color: var(--bg-white);
    border-radius: 50%;
  }

  label input[type="radio"]:checked ~ .checkmark {
    background-color: var(--bg-white);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input[type="radio"]:checked ~ .checkmark:after {
    display: block;
  }

  label .checkmark:after {
    top: 0.15rem;
    left: 0.15rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: var(--purple-light);
  }
</style>
