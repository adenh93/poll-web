<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Button, CopyToClipboard } from "@app/components/ui";

  export let createdPoll: ApiTypes.CreatedPoll;

  const dispatch = createEventDispatcher();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const pollUrl = `${baseUrl}/polls/${createdPoll.id}`;

  const createAnotherPoll = () => dispatch("resetForm");
</script>

<div class="container">
  <h4>Success!</h4>
  <p>
    Your poll, '{createdPoll.name}' was created successfully! Copy the link
    below and share it with your network so they can participate!
  </p>
  <CopyToClipboard text={pollUrl} />
  <Button type="button">Go to My Poll</Button>
  <Button on:click={createAnotherPoll} variant="secondary" type="button">
    Create Another Poll
  </Button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 1.8rem;
  }
</style>
