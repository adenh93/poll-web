<script lang="ts">
  import { SecondaryLayout } from "@app/components/layouts";
  import { PollContainer } from "@app/components/containers";

  export let id: string;
</script>

<SecondaryLayout>
  <div class="primary-container">
    <PollContainer {id} />
  </div>
</SecondaryLayout>

<style>
  .primary-container {
    display: flex;
    justify-content: center;
  }
</style>
