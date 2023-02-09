<script lang="ts">
  import StepCard from "@app/components/ui/StepCard";
</script>

<div class="steps">
  <StepCard step={1} title="Create a Poll">
    Give your poll a name, an optional description, and an end date. Finally,
    add at least two choices (it wouldn't be a very democratic process
    otherwise!)
  </StepCard>
  <StepCard step={2} title="Share Your Poll">
    After creating your poll, you will be presented with a unique, shareable
    link. Distribute this link to your network to allow them to participate!
  </StepCard>
  <StepCard step={3} title="Check Results">
    When the poll has expired, the results can be assessed from the same unique
    link.
  </StepCard>
</div>

<style>
  .steps {
    display: flex;
    justify-content: center;
    column-gap: 1.8rem;
  }
</style>
