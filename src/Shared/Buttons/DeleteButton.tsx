import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { GenericIconButton } from './GenericIconButton';

interface IProps {
  callback: () => void;
}

export function DeleteButton({ callback }: IProps): React.JSX.Element {
  return (
    <GenericIconButton icon={DeleteIcon} callback={callback} />
  );
}
