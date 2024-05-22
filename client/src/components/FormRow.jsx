/* eslint-disable react/prop-types */
const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  required = true,
  isRegister = false,
  placeholder = '',
}) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
        {required ? <span className="text-primary">*</span> : ''}
      </label>
      {type === 'password' ? (
        <div style={{ position: 'relative' }}>
          <input
            type={currentType}
            id={name}
            name={name}
            className="form-input"
            defaultValue={defaultValue || ''}
            placeholder={placeholder}
            required
            autoComplete={isRegister ? 'new-password' : 'current-password'}
            onChange={onChange}
          />
          <div className="form-icon" onClick={togglePassword}>
            {icon}
          </div>
        </div>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ''}
          placeholder={placeholder}
          required
          autoComplete={name}
          onChange={onChange}
        />
      )}
    </div>
  );
};
export default FormRow;
