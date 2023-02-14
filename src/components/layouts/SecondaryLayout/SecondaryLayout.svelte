<div class="container">
  <div class="primary-section">
    <slot />
  </div>
</div>

<style>
  .container {
    padding: 1.5rem;
  }

  .primary-section {
    background: var(--gradient-bg), url("/assets/images/background.jpg");
    background-size: cover;
    border-radius: 0.5rem;
    padding: 10rem 3rem;
    min-height: 70rem;
  }
</style>
