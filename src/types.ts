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

// Interface Input Info Form Component
export interface IInputInfo {
  email: {
    value: string;
    isError: boolean;
  };
  zipCode: {
    value: string;
    isError: boolean;
  };
}

// Interface Select Info Form Component
export interface ISelectInfo {
  provinces: string;
  cities: string;
}

// Interface Cities
export interface ICities {
  id: number;
  name: string;
  slug: string;
  province_id: number;
}
