import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 1.125rem;
  text-align: left;
  margin-left: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin: 0.25rem 0.25rem 0.75rem 0.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: #6574cd;
  width: 100%;
`;

const WhetherInput = React.forwardRef(({ label, value, onChange, id, className, type = 'text' }, ref) => (
  <>
    <StyledHeader>{label}</StyledHeader>
    <StyledInput value={value} onChange={onChange} type={type} id={id} className={className} ref={ref} />
  </>
));
WhetherInput.displayName = 'WhetherInput';
WhetherInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

export default WhetherInput;
