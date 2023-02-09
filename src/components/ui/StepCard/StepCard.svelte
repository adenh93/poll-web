<script lang="ts">
  export let step: number;
  export let title: string;
</script>

<div class="card">
  <div class="content">
    <div class="card-heading">
      <div class="step-badge">
        <span>{step}</span>
      </div>
      <h4>{title}</h4>
    </div>
    <p class="card-body">
      <slot />
    </p>
  </div>
</div>

<style>
  .card {
    background-color: var(--bg-white);
    border-radius: 0.5rem;
    padding: 2rem 2rem 4.5rem 2rem;
    width: 31.4rem;
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem rgba(170, 170, 170, 0.5);
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .card-heading {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }

  .step-badge {
    position: relative;
    border-radius: 50%;
    width: 3.4rem;
    height: 3.4rem;
    background: var(--purple-main);
  }

  .step-badge span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-white);
  }
</style>
