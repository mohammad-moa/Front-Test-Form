import { SelectChangeEvent } from "@mui/material";

// Type Image Component
export type ImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  width: string | "auto";
  height?: string | "auto";
};

// Type Input Component
export type InputProps = {
  type?: string | undefined;
  label: string;
  width?: string | undefined;
  name: string;
  placeHolder?: string;
  errorText: string;
  isError: boolean;
  value: unknown;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

// Type Select Component
export type SelectProps = {
  label: string;
  width?: string | undefined;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  children: React.ReactNode;
};
