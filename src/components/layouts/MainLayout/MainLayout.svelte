<div class="container">
  <div class="primary-section">
    <slot name="primary" />
  </div>
  <div class="secondary-section">
    <slot name="secondary" />
  </div>
</div>

<style>
  .container {
    width: 100%;
    padding: 0.2rem;
  }

  .primary-section {
    background: var(--gradient-bg), url("/assets/images/background.jpg");
    background-size: cover;
    border-radius: 0.5rem;
    padding: 10rem 3rem;
  }

  .secondary-section {
    padding: 4rem;
  }
</style>
