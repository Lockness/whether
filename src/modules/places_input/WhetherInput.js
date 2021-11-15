import React from 'react';
import PropTypes from 'prop-types';

const WhetherInput = React.forwardRef(({ label, value, onChange, id, className, type = 'text' }, ref) => (
  <>
    <h2 className="text-lg text-left ml-2">{label}</h2>
    <input value={value} onChange={onChange} type={type} id={id} className="p-4 m-1 mr-3 font-bold rounded-lg w-full" ref={ref} />
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
