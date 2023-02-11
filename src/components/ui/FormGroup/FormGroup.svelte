<div class="input-wrapper">
  <slot name="adornment-left" class="icon-left" />
  <slot />
  <slot name="adornment-right" class="icon-right" />
  <slot name="errors" />
</div>

<style>
  .input-wrapper {
    position: relative;
  }

  :global([slot="adornment-left"]) {
    position: absolute;
    top: 0;
    left: 1rem;
  }

  :global([slot="adornment-right"]) {
    position: absolute;
    top: 0;
    right: 1rem;
  }
</style>
