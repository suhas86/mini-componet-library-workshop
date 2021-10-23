import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': 14 / 16 + 'rem',
    '--borderBottomSize': 1 + 'px',
    '--height': '24px',
    iconSize: 16,
  },
  large: {
    '--fontSize': 18 / 16 + 'rem',
    '--borderBottomSize': 2 + 'px',
    '--height': '36px',
    iconSize: 24,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles = SIZES[size];
  styles = {
    ...styles,
    '--width': width + 'px',
  };
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input style={styles} placeholder={placeholder} />
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
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;
const Input = styled.input`
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--borderBottomSize) solid ${COLORS.black};
  font-weight: 700;
  height: var(--height);
  color: inherit;
  width: var(--width);
  padding-left: var(--height);
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
