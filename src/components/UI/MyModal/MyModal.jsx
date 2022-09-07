import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MyModal = ({ children, title, dialogText, modal, setModal }) => {
  const modalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <Dialog open={modal} onClose={modalClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogText}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyModal;
