<script lang="ts">
  import { PollResultsChoice } from "@app/components/ui";

  export let poll: ApiTypes.Poll;

  const totalVotes = poll.results.reduce(
    (total, result) => total + result.voteCount,
    0
  );

  const results = poll.choices.map((choice) => {
    const { voteCount } = poll.results.find(
      ({ choiceId }) => choiceId === choice.id
    );
    return { ...choice, voteCount };
  });

  const votes = results.map((result) => result.voteCount);
  const highestVote = Math.max(...votes);

  const winningChoices = results.reduce<string[]>((acc, result) => {
    if (result.voteCount === highestVote) acc.push(result.id);
    return acc;
  }, []);

  const formattedEndDate = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date(poll.endDate));

  const formattedVoteCount = new Intl.NumberFormat("en-AU").format(totalVotes);
</script>

<div class="content">
  <h3>{poll.name}</h3>
  {#if poll.description}<p>{poll.description}</p>{/if}
  <p class="subtitle">Ended on {formattedEndDate}</p>
  <div class="results">
    {#each results as result}
      <PollResultsChoice
        winner={winningChoices.includes(result.id)}
        count={result.voteCount}
        total={totalVotes}
      >
        {result.name}
      </PollResultsChoice>
    {/each}
  </div>

  <p class="total">Total votes: {formattedVoteCount}</p>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;
  }

  .content > .results {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .content > .total {
    display: flex;
    flex-direction: row-reverse;
    font-weight: 600;
  }
</style>
