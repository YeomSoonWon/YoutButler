import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";
import colors from "../../constants/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Variant?:
    | "yellowFilled"
    | "yellowOutline"
    | "yellowTonal"
    | "grayTonal"
    | "redFilled"
    | "grayOutline"
    | "redOutline";
  Kind?: "extraSmall" | "small" | "medium" | "big";
  Rounded?: "square" | "circle";
}

export default function Button({
  Kind = "extraSmall",
  Variant = "yellowFilled",
  Rounded,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      Kind={Kind}
      Variant={Variant}
      Rounded={Rounded}
      {...props}
    ></StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>((props) => ({
  // 스타일의 외부
  outline: "none",
  border: "0 solid transparent",
  cursor: "pointer",

  // 버튼 사이즈
  ...SIZE_VARIANT[props.Kind || "medium"],

  // 스타일 타입
  ...TYPE_VARIANTS[props.Variant || "yellowFilled"],

  // 라운드
  ...ROUNDED[props.Rounded || "extraSmall"],
}));

const SIZE_VARIANT = {
  extraSmall: {
    fontSize: "0.9rem",
    padding: "7px 16px",
  },
  small: {
    fontSize: "15px",
    padding: "11px 20px",
  },
  medium: {
    fontSize: "20px",
    padding: "14px 64px",
  },
  big: {
    fontSize: "25px",
    padding: "24px 96px",
    width: "100%",
    display: "border-box",
  },
};

const TYPE_VARIANTS = {
  redFilled: {
    backgroundColor: colors.red,
    color: colors.white,
    border: "transparent",
  },
  redOutline: {
    backgroundColor: "transparent",
    color: colors.red,
    border: "transparent",
  },
  yellowFilled: {
    backgroundColor: colors.yellow,
    color: colors.white,
    border: "transparent",
  },
  yellowOutline: {
    backgroundColor: "transparent",
    color: colors.yellow,
    border: "transparent",
  },
  yellowTonal: {
    backgroundColor: colors.yellow,
    color: colors.black,
    border: "transparent",
  },
  grayOutline: {
    backgroundColor: "transparent",
    color: colors.darkgray,
    border: "solid 1px darkgray",
  },
};

const ROUNDED = {
  square: {
    borderRadius: "0.2rem",
  },
  circle: {
    borderRadius: "5rem",
  },
};
