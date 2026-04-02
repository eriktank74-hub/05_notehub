import css from "./NoteForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../../services/noteService";
import type { NewNote } from "../../services/noteService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface NoteFormProps {
  onClose: () => void;
}

function NoteForm({onClose}: NoteFormProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
      onClose()
    },
    mutationFn: (data: NewNote) => {
      return createNote(data);
    },
  });
  const onSubmit = async(data: NewNote) => {
    await mutate(data);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      tag: "Todo",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3).max(50).required(),
      content: Yup.string().max(500),
      tag: Yup.string()
        .oneOf(["Todo", "Work", "Personal", "Meeting", "Shopping"])
        .required(),
    }),
    onSubmit,
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className={css.input}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        {formik.touched.title && formik.errors.title &&  <ErrorMessage error={formik.errors.title}/>}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        
         {formik.touched.content && formik.errors.content &&  <ErrorMessage error={formik.errors.content}/>}
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          name="tag"
          className={css.select}
          value={formik.values.tag}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
          {formik.touched.tag && formik.errors.tag &&  <ErrorMessage error={formik.errors.tag}/>}
      </div>

      <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button
          type="submit"
          className={css.submitButton}
          disabled={!formik.isValid}
        >
          Create note
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
