import React from "react";
import {
  GenericIconButton,
  SpecificIconButtonProps,
} from "./GenericIconButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export function UploadButton({
  callback,
  ...buttonProps
}: SpecificIconButtonProps): React.JSX.Element {
  return (
    <GenericIconButton
      icon={FileUploadIcon}
      callback={callback}
      {...buttonProps}
    />
  );
}
