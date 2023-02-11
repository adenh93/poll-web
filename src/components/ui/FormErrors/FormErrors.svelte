<script lang="ts">
  import { ValidationMessage } from "@felte/reporter-svelte";

  export let name: string;
</script>

<ValidationMessage for={name} let:messages {...$$restProps}>
  {#if messages?.length}
    <ul class="messages">
      {#each messages as message}
        <li>{message}</li>
      {/each}
    </ul>
  {/if}
</ValidationMessage>

<style>
  .messages {
    margin: 0.8rem 0;
    list-style: inside;
  }

  .messages li {
    color: var(--status-error);
    font-size: 1.3rem;
  }
</style>
