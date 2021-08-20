import { toast } from "react-toastify";

const custom_style: any = {
  position: "bottom-center",
};

export const fail = () =>
  toast.error("😭 Feedback title is existing.", custom_style);

export const success = () =>
  toast.dark("😎 Feedback added successfully!", custom_style);
