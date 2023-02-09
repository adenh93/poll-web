<script lang="ts">
  import MainLayout from "@app/components/layouts/MainLayout";
  import PollForm from "@app/components/ui/PollForm";
  import Steps from "@app/components/ui/Steps";
</script>

<MainLayout>
  <div class="primary-container" slot="primary">
    <h1>Create a Poll in a Few Easy Steps!</h1>
    <div class="form-card">
      <PollForm />
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
