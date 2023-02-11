<script lang="ts">
  import { createForm } from "felte";
  import { validator } from "@felte/validator-yup";
  import { reporter } from "@felte/reporter-svelte";
  import { useMutation } from "@sveltestack/svelte-query";

  import { post } from "@app/utils/fetch";
  import schema from "@app/validationSchemas/newPollSchema";
  import type { NewPollSchema } from "@app/validationSchemas/newPollSchema";
  import { PollForm } from "@app/components/ui";
  import { PollEndpoints } from "@app/utils/constants";

  type RemoveChoiceEventData = { key: string };

  const createPollResult = useMutation((body: NewPollSchema) =>
    post(PollEndpoints.CreatePoll, { body: JSON.stringify(body) })
  );

  const { form, data, addField, setFields } = createForm<NewPollSchema>({
    extend: [validator({ schema }), reporter],
    initialValues: {
      name: "",
      description: null,
      endDate: "",
      choices: [...new Array(2)].map((_) => ({ name: "" })),
    },
    onSubmit: (values) => {
      $createPollResult.mutateAsync({
        ...values,
        endDate: new Date(values.endDate).toISOString(),
      });
    },
  });

  const addNewChoice = (): void =>
    addField("choices", { name: "" }, $data.choices.length);

  const removeChoice = (e: CustomEvent<RemoveChoiceEventData>): void => {
    const newChoices = $data.choices.filter(
      (choice) => choice.key !== e.detail.key
    );

    setFields("choices", newChoices);
  };
</script>

<form use:form>
  <PollForm
    choices={$data.choices}
    disabled={$createPollResult.isLoading}
    on:addNewChoice={addNewChoice}
    on:removeChoice={removeChoice}
  />
</form>
