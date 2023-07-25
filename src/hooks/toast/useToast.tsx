import { toast } from "react-toastify";

export const useToast = (): {
  successToast: ( text: string, onClose?: () => void ) => void,
  errorToast: ( text: string, onClose?: () => void ) => void,
  infoToast: ( text: string ) => void
} => {
  const errorToast = (text: string, onClose?: () => void) =>
    toast.error(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose,
    });

  const successToast = (text: string, onClose?: () => void) =>
    toast.success(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose,
    });

  const infoToast = (text: string) =>
    toast.info(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return { successToast, errorToast, infoToast };
};
