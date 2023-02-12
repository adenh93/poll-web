export interface ValidationErrorField {
  field: string
  errors: string[]
}

export class ValidationError {
  public name: string;
  public fieldErrors: ValidationErrorField[];

  constructor({ fieldErrors }) {
    this.name = "ValidationError";
    this.fieldErrors = fieldErrors;
  }
}

export class GenericError {
  public name: string;
  public message: string;

  constructor({ name = "GenericError", message }) {
    this.name = name;
    this.message = message;
  }
}
