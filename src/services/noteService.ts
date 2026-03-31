import axios from "axios";
import type { Note } from "../types/note";

interface FetchNotesResponse {
  totalPages: number;
  notes: Note[];
}

export const fetchNotes = async (
  page: number,
  query: string,
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(
    `https://notehub-public.goit.study/api/notes?search=${query}&page=${page}&perPage=12`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    },
  );
  return response.data;
};

export type NewNote = {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
};

export const createNote = ({ title, content, tag }: NewNote) => {
  return axios.post(
    "https://notehub-public.goit.study/api/notes",
    {
      title,
      content,
      tag,
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    },
  );
};
export const deleteNote = (id: string) => {
  return axios.delete(
    `https://notehub-public.goit.study/api/notes/${id}`,

    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    },
  );
};
