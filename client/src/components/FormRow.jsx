const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  required = true,
}) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
        {required ? <span className="text-primary">*</span> : ''}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required
        onChange={onChange}
      />
    </div>
  );
};
export default FormRow;
