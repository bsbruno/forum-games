import React, { useRef, useState } from "react";
import { InputHTMLAttributes } from "react";
import * as S from "./styled";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { useEffect } from "react";
import { useCallback } from "react";
type InputTypes = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
} & InputTypes;

// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleIsFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onFocus={handleIsFocus}
        onBlur={handleInputBlur}
      />
      {error && (
        <S.Error>
          <span>{error} </span>
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default Input;
