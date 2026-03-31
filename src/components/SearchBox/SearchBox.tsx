import css from "./SearchBox.module.css";
import type { InputEvent } from 'react'

type Props = {
  onInput: (event: InputEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ onInput }: Props) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onInput={onInput}
    />
  );
};

export default SearchBox;
