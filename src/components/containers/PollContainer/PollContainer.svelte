<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";

  import { get } from "@app/utils/fetch";
  import { PollEndpoints } from "@app/utils/constants";
  import { Poll } from "@app/components/ui";

  export let id: string;

  const pollQuery = useQuery("get-poll", () =>
    get<ApiTypes.Poll>(PollEndpoints.GetPoll(id))
  );

  $: poll = $pollQuery.data;
  $: hasResults = poll?.results?.length > 0;
  $: console.log(poll);
</script>

{#if !$pollQuery.isLoading}
  <Poll {poll} {hasResults} />
{/if}
