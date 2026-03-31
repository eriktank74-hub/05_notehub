import css from "./ErrorMessage.module.css";


interface ErrorMessage {
    error: string
}

function ErrorMessage({error}:  ErrorMessage) {
  return <p className={css.text}>{error}</p>;
}

export default ErrorMessage;