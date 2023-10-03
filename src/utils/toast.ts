import { toast as reactToast, ToastOptions } from "react-toastify";

const options: ToastOptions = {
  theme: "colored",
};

export const toast = {
  success(message: string) {
    reactToast.success(message, options);
  },
  error(message: string) {
    reactToast.error(message, options);
  },
  info(message: string) {
    reactToast.info(message, options);
  },
};
