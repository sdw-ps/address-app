import React from "react";
import { GenericIconButton } from "./GenericIconButton";
import DownloadIcon from "@mui/icons-material/Download";

interface IProps {
  callback: () => void;
}

export function DownloadButton({ callback }: IProps): React.JSX.Element {
  return <GenericIconButton icon={DownloadIcon} callback={callback} />;
}
