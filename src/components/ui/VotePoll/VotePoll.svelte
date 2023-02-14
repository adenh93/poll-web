<script lang="ts">
  import { Button, PollChoice } from "@app/components/ui";

  export let poll: ApiTypes.Poll;

  let selectedChoice: string = null;

  const formattedEndDate = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date(poll.endDate));

  const onSelectChoice = (id: string) => {
    selectedChoice = id;
  };
</script>

<div class="rows">
  <div class="content">
    <h3>{poll.name}</h3>
    {#if poll.description}<p>{poll.description}</p>{/if}
    <p class="subtitle">Ends on {formattedEndDate}</p>
    <div class="choices">
      {#each poll.choices as choice}
        <PollChoice
          checked={selectedChoice === choice.id}
          on:change={() => onSelectChoice(choice.id)}
        >
          {choice.name}
        </PollChoice>
      {/each}
    </div>
  </div>
  <div class="footer">
    <Button type="button">Vote</Button>
  </div>
</div>

<style>
  .rows {
    display: flex;
    flex-direction: column;
    row-gap: 8rem;
    justify-content: space-between;
  }

  .rows > .content {
    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;
  }

  .rows > .content > .choices {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
