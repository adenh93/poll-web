<script lang="ts">
  import { MainLayout } from "@app/components/layouts";
  import { PollFormContainer } from "@app/components/containers";
  import { Steps, CreatePollConfirmation } from "@app/components/ui";

  type CreatePollEventData = { receipt: ApiTypes.CreatedPoll };

  let createdPoll: ApiTypes.CreatedPoll = null;

  const onCreatePoll = (e: CustomEvent<CreatePollEventData>) => {
    createdPoll = e.detail.receipt;
  };

  const onResetForm = (_e: CustomEvent) => {
    createdPoll = null;
  };
</script>

<MainLayout>
  <div class="primary-container" slot="primary">
    <h1>Create a Poll in a Few Easy Steps!</h1>
    <div class="form-card">
      {#if createdPoll}
        <CreatePollConfirmation {createdPoll} on:resetForm={onResetForm} />
      {:else}
        <PollFormContainer on:createPoll={onCreatePoll} />
      {/if}
    </div>
  </div>
  <div class="secondary-container" slot="secondary">
    <h2>How It Works</h2>
    <Steps />
  </div>
</MainLayout>

<style>
  h1 {
    color: var(--text-white);
    width: 90%;
  }

  h2 {
    text-align: center;
  }

  .primary-container {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    width: 59.6rem;
    margin: 0 auto;
  }

  .form-card {
    background-color: var(--bg-white);
    border-radius: 0.5rem;
    padding: 3em;
  }

  .secondary-container {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
</style>
