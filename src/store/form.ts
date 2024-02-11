import { create } from "zustand";

export const useFormStore = create((set) => ({
  user: {
    pekerjaan: "",
    penggunaan: "",
    jenis_laptop: "",
    processor: "",
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: {
        ...state.user,
        ...newUser,
      },
    })),
}));
