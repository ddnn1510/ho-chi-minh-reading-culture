/* eslint-disable react/prop-types */
const FormRowSelect = ({
  name,
  labelText,
  list,
  isEnumList,
  titleList,
  defaultValue = '',
  onChange,
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
        defaultValue={isEnumList ? defaultValue : list[0]}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return isEnumList ? (
            <option key={itemValue} value={itemValue}>
              {titleList[itemValue]}
            </option>
          ) : (
            <option key={itemValue._id} value={itemValue._id}>
              {itemValue.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
