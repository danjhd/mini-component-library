import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "24px",
    "--fontSize": `${14 / 16}rem`,
    "--padding": "4px",
    "--bottomBorder": "1px",
  },
  large: {
    "--height": "36px",
    "--fontSize": `${18 / 16}rem`,
    "--padding": "8px",
    "--bottomBorder": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        id={icon}
        strokeWidth={size === "small" ? 1 : 2}
        size={size === "small" ? 16 : 24}
      />
      <InputWrapper
        style={{ "--width": `${width}px` }}
        {...delegated}
      ></InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

const InputWrapper = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--bottomBorder) solid ${COLORS.black};
  padding: var(--padding);
  padding-left: var(--height);
  font-weight: 700;
  font-size: var(--fontSize);
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
