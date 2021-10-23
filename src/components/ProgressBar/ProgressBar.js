/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8',
    borderRadius: 4,
    padding: 0,
  },
  medium: {
    height: '12',
    borderRadius: 4,
    padding: 0,
  },
  large: {
    height: '24',
    borderRadius: 8,
    padding: 4,
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgrssWrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{
        '--borderRadius': styles.borderRadius + 'px',
        '--padding': styles.padding + 'px',
      }}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </ProgrssWrapper>
  );
};
const ProgrssWrapper = styled.div`
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;
const BarWrapper = styled.div`
  border-radius: var(--borderRadius);
  overflow: hidden;
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;
export default ProgressBar;
