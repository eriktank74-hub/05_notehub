import css from "./SearchBox.module.css";
import type { ChangeEvent } from "react";

interface SearchBoxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ onChange }: SearchBoxProps) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={onChange}
    />
  );
};

export default SearchBox;
