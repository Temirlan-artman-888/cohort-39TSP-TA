import {HTMLInputTypeAttribute} from 'react';

export interface InputProps {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  error?:string;
}
