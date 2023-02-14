<script lang="ts">
  import { RadioButton } from "@app/components/ui";

  export let checked: boolean;
</script>

<div class="container">
  <RadioButton {checked} on:change>
    <slot />
  </RadioButton>
</div>

<style>
  .container {
    padding: 1.2rem 0.8rem;
    background-color: var(--bg-shaded);
    border-radius: 0.5rem;
  }
</style>
