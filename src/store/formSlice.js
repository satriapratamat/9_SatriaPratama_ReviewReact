import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  nationality: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: initialValue,
  },
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice;