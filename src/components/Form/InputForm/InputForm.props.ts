import React from 'react';

export interface InputFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  isRequired?: boolean;
  label?: string;
  type?: string;
  name?: string
}
