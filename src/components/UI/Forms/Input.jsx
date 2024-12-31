const Input = (props) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={props.name} className={`text-capitalize para-2 mb-2`}>
        {props.name}
      </label>
      <input
        type={props.type}
        className="form-control p-2 fs-4"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default Input;
