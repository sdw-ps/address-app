import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ButtonProps } from "@mui/material/Button/Button";

export type SpecificIconButtonProps = {
  callback: () => void;
} & ButtonProps;

interface GenericIconButtonProps extends SpecificIconButtonProps {
  icon: OverridableComponent<SvgIconTypeMap>;
}

export function GenericIconButton({
  callback,
  icon,
  ...buttonProps
}: GenericIconButtonProps): React.JSX.Element {
  const Icon = icon;
  return (
    <Button
      onClick={callback}
      sx={{
        margin: "0 6px",
        padding: "0.33rem",
        minWidth: "1rem",
        // borderRadius: 10,
      }}
      color="warning"
      variant="contained"
      {...buttonProps}
    >
      <Icon />
    </Button>
  );
}
