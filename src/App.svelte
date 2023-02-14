<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import { Router, Route } from "svelte-routing";
  import { HomePage, PollPage } from "@app/components/pages";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Router>
    <main>
      <Route path="/polls/:id" let:params>
        <PollPage id={params.id} />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </main>
  </Router>
</QueryClientProvider>
