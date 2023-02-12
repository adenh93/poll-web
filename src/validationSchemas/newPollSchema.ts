import * as yup from "yup"

const newPollSchema = yup.object({
  name: yup.string()
    .min(5, "Poll name must be at least 5 characters.")
    .max(100, "Poll name cannot be more than 100 characters.")
    .required("Enter a descriptive name.")
    .default(""),
  description: yup.string().nullable().default(null),
  endDate: yup
    .string()
    .required("An end date must be provided when creating a poll.")
    .default(""),
  choices: yup
    .array()
    .min(2, "You must provide at least 2 choices.")
    .max(10, "You cannot add more than 10 choices.")
    .required("You must provide between 2 and 10 choices.")
    .of(
      yup.object({
        name: yup
          .string()
          .required("Enter a descriptive name for this choice.")
          .default("")
      })
    )
});

export type NewPollSchema = yup.InferType<typeof newPollSchema>;

export default newPollSchema
