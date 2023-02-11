<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { NewPollSchema } from "@app/validationSchemas/newPollSchema";
  import Plus from "/assets/iconography/plus.svg";
  import Minus from "/assets/iconography/minus.svg";
  import Close from "/assets/iconography/close.svg";
  import {
    Button,
    Input,
    TextArea,
    FormGroup,
    FormErrors,
    IconButton,
  } from "@app/components/ui";

  type Choice = NewPollSchema["choices"][number] & { key: string };

  export let disabled: boolean = false;
  export let choices: Choice[];

  let showDescription = false;
  let dispatch = createEventDispatcher();

  const toggleShowDescription = (): void => {
    showDescription = !showDescription;
  };

  const onAddNewChoice = () => dispatch("addNewChoice");
  const onRemoveChoice = (key: string) => dispatch("removeChoice", { key });

  $: descriptionButtonLabel = showDescription
    ? "Hide description"
    : "Add a description";

  $: descriptionButtonIcon = showDescription ? Minus : Plus;
</script>

<div class="form-rows">
  <div class="name-row">
    <FormGroup>
      <Input
        {disabled}
        name="name"
        label="Name"
        placeholder="Give your poll a descriptive name!"
      />
      <FormErrors name="name" slot="errors" />
    </FormGroup>

    {#if showDescription}
      <FormGroup>
        <TextArea
          {disabled}
          name="description"
          label="Description"
          placeholder="Optional: Write an additional description for your poll."
          rows={4}
        />
      </FormGroup>
    {/if}

    <Button variant="text" type="button" on:click={toggleShowDescription}>
      <img src={descriptionButtonIcon} alt="icon" slot="icon-left" />
      {descriptionButtonLabel}
    </Button>
  </div>
  <FormGroup>
    <Input {disabled} name="endDate" label="End Date" type="datetime-local" />
    <FormErrors name="endDate" slot="errors" />
  </FormGroup>

  <div class="choices">
    <h5>Choices</h5>
    {#each choices as choice, i}
      <FormGroup>
        <Input
          {disabled}
          name="choices.{i}.name"
          label="Choice {i + 1}"
          placeholder="Choice {i + 1}"
        />
        {#if i > 1}
          <IconButton
            ariaLabel="Remove choice"
            slot="adornment-right"
            type="button"
            on:click={() => onRemoveChoice(choice.key)}
          >
            <img src={Close} alt="close button" />
          </IconButton>
        {/if}
        <FormErrors name="choices.{i}.name" slot="errors" />
      </FormGroup>
    {/each}
    <Button {disabled} variant="text" type="button" on:click={onAddNewChoice}>
      <img src={Plus} alt="plus icon" slot="icon-left" />
      Add choice
    </Button>
  </div>
  <Button {disabled}>Create Poll</Button>
</div>

<style>
  .form-rows {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }

  .name-row {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .choices {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
</style>
