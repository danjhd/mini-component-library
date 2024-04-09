/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": `${8 / 16}rem`,
    "--borderRadius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": `${12 / 16}rem`,
    "--borderRadius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": `${24 / 16}rem`,
    "--borderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={size}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  `;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
