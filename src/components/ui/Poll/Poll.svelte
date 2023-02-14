<script lang="ts">
  import { PollResults, VotePoll } from "@app/components/ui";

  export let poll: ApiTypes.Poll;
  export let hasResults: boolean;
</script>

<div class="poll-card">
  {#if hasResults}
    <PollResults {poll} />
  {:else}
    <VotePoll {poll} />
  {/if}
</div>

<style>
  .poll-card {
    width: 73.5rem;
    background-color: var(--bg-white);
    border-radius: 0.5rem;
    padding: 4rem 5rem;
  }
</style>
