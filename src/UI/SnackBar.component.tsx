import * as React from "react";
import { Alert, AlertColor, Slide, SlideProps, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
  severity: AlertColor;
}

const MySnackbar = ({ open, setOpen, message, severity }: Props) => {
  return (
    <div>
      <Snackbar
        open={open}
        TransitionComponent={TransitionRight}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MySnackbar;
