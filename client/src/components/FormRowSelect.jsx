const FormRowSelect = ({
  name,
  labelText,
  list,
  titleList,
  defaultValue = '',
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        id={name}
        name={name}
        className="form-select"
        defaultValue={defaultValue}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {titleList[itemValue]}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
