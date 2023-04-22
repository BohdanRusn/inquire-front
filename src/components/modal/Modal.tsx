import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  DialogActions
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  selectModalState,
  selectOpenModalState,
} from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";

import { useStyles } from "./style";

interface ModalFooterProps {
  onSubmit?: (params: any) => void;
  onCancel?: (params: any) => void;
  isLoading?: boolean;
  textSend?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const ModalHeader = (props: any) => {
  const styles = useStyles();
  return (
    <DialogTitle className={styles.dialogTitle}>
      <Typography>{props.title}</Typography>
      <IconButton className={styles.iconButton} onClick={props.onCancel}>
        <CloseIcon sx={{ fontSize: 20 }} color="inherit" />
      </IconButton>
    </DialogTitle>
  );
};

export const ModalFooter = ({
  onSubmit,
  onCancel,
  textSend,
  isLoading,
  loading,
  disabled,
}: ModalFooterProps) => {
  return (
    <DialogActions>
      {loading ? (
        <LoadingButton
          variant="contained"
          size="small"
          type="submit"
          loading={isLoading}
          onClick={onSubmit}
          disabled={disabled}
        >
          { textSend ?? "Додати" }
        </LoadingButton>
      ) : (
        <Button variant="contained" size="small" onClick={onSubmit} disabled={disabled}>
          OK
        </Button>
      )}
      <Button disabled={isLoading} variant="outlined" size="small" onClick={onCancel}>
        Відмінити
      </Button>
    </DialogActions>
  );
};

export const Modal = () => {
  const modalActiveType = useSelector(selectOpenModalState);
  const modalProps = useSelector(selectModalState(modalActiveType));

  if (!modalActiveType) {
    return null;
  }

  const modalsByType: { [keys in ModalType]: JSX.Element } = {
    [ModalType.RemoveComment]: (
      <>
        <ModalHeader title="Видалити коментар" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          <Typography>Ви точно хочете видалити коментар?</Typography>
        </DialogContent>
        <ModalFooter
          onCancel={modalProps?.onCancel}
          onSubmit={modalProps?.onSubmit}
        />
      </>
    ),
    [ModalType.RemovePost]: (
      <>
        <ModalHeader title="Видалити пост" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          <Typography>Ви точно хочете видалити пост?</Typography>
        </DialogContent>
        <ModalFooter
          onCancel={modalProps?.onCancel}
          onSubmit={modalProps?.onSubmit}
        />
      </>
    ),
  };

  return (
    <Dialog open={modalProps?.isOpen ?? false} onClose={modalProps?.onCancel}>
      {modalActiveType && modalsByType[modalActiveType]}
    </Dialog>
  );
};
