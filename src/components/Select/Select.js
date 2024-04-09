import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisbleSelect value={value} onChange={onChange}>
        {children}
      </InvisbleSelect>
      <Visible>
        {displayedValue}
        <IconWrapper id="chevron-down" strokeWidth={2} size={24} />
      </Visible>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const InvisbleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
`;

const Visible = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  ${InvisbleSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${InvisbleSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
    outline: 5px auto ${COLORS.blue500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(p) => 16 - (p.size - 12) / 2}px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
