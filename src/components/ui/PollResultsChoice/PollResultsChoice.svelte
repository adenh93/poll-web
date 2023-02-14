<script lang="ts">
  export let winner: boolean;
  export let count: number;
  export let total: number;

  const percentage = (count / total) * 100;
  const width = `${percentage}%`;
  const className = `bar${winner ? " winner" : ""}`;
</script>

<div class="container">
  <div class={className} style:width />
  <div class="label">
    <slot />
    <span>{count} votes</span>
  </div>
</div>

<style>
  .container {
    height: 3.5rem;
    background-color: var(--bg-shaded);
    border-radius: 0.5rem;
    font-size: 1.4rem;
    position: relative;
  }

  .container > .bar {
    height: 100%;
    border-radius: 0.5rem;
    background-color: var(--bg-dark);
  }

  .container > .bar.winner {
    background-color: var(--purple-light);
  }

  .container > .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
  }
</style>
