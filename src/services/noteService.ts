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

export const createNote = async({ title, content, tag }: NewNote): Promise<Note> => {
  const response = await axios.post<Note>(
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
  return response.data;
};
export const deleteNote = async(id: string): Promise<Note>  => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,

    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    },
  );
  return response.data;
};
