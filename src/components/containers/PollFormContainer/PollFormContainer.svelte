<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-yup";
  import { reporter } from "@felte/reporter-svelte";
  import { useMutation } from "@sveltestack/svelte-query";

  import { post } from "@app/utils/fetch";
  import schema from "@app/validationSchemas/newPollSchema";
  import type { NewPollSchema } from "@app/validationSchemas/newPollSchema";
  import { PollForm } from "@app/components/ui";
  import { PollEndpoints } from "@app/utils/constants";
  import { ValidationError } from "@app/utils/errors";

  type RemoveChoiceEventData = { key: string };

  const dispatch = createEventDispatcher();

  const createPollResult = useMutation((body: NewPollSchema) =>
    post<ApiTypes.CreatedPoll>(PollEndpoints.CreatePoll, {
      body: JSON.stringify(body),
    })
  );

  const { form, data, addField, setFields, setErrors } =
    createForm<NewPollSchema>({
      extend: [validator({ schema }), reporter],
      initialValues: schema.cast({
        choices: [...new Array(2)].map((_) => ({ name: "" })),
      }),
      onSubmit: async (values) => {
        const receipt = await $createPollResult.mutateAsync({
          ...values,
          endDate: new Date(values.endDate).toISOString(),
        });

        dispatch("createPoll", { receipt });
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

  const handleError = (error: unknown) => {
    if (error instanceof ValidationError) {
      error.fieldErrors.forEach(({ field, errors }) => {
        setErrors({ [field]: errors });
      });
    }
  };

  $: handleError($createPollResult.error);
</script>

<form use:form>
  <PollForm
    choices={$data.choices}
    disabled={$createPollResult.isLoading}
    on:addNewChoice={addNewChoice}
    on:removeChoice={removeChoice}
  />
</form>
