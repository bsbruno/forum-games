import { ValidationError } from "yup";

interface Erros {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Erros {
  const validationErros: Erros = {};
  console.log(err);
  err.inner.forEach((erro) => {
    validationErros[erro.path ? erro.path : 0] = erro.message;
  });

  return validationErros;
}
