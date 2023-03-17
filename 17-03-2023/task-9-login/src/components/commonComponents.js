export let fontHead = {
  fontSize: "18px",
  fontWeight: "500",
};

export const InputBox = ({ id, type, label, whenChange, state, name }) => {
  return (
    <div className="row my-5" style={fontHead}>
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}:
      </label>
      <div className="col-sm-10">
        <input
          name={name}
          type={type}
          className="form-control"
          id={id}
          onChange={whenChange}
          value={state}
          autoComplete="true"
          onWheel={(e) => e.target.blur()}
        />
      </div>
    </div>
  );
};

export const InputGroupBox = ({
  id,
  type,
  label,
  groupText,
  area,
  placeholder,
  whenChange,
  state,
  name,
}) => {
  return (
    <div className="row my-5" style={fontHead}>
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}:
      </label>
      <div className="input-group col">
        {area === "start" ? (
          <span className="input-group-text">{groupText}</span>
        ) : (
          ``
        )}
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          onChange={whenChange}
          value={state}
          name={name}
          onWheel={(e) => e.target.blur()}
        />
        {area === "end" ? (
          <span className="input-group-text">{groupText}</span>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export const Fieldset = ({ heading, radioChange, state }) => {
  return (
    <fieldset className="row">
      <legend className="col-form-label col-sm-2 pt-0" style={fontHead}>
        {heading}:
      </legend>
      <div className="col-3">
        {
          <RadioButton
            id="credit"
            name="type"
            value="credit"
            label="credit"
            whenChange={(e) => radioChange(e)}
            checked={state.type === "credit"}
          />
        }
      </div>
      <div className="col">
        {
          <RadioButton
            id="debit"
            name="type"
            value="debit"
            label="debit"
            whenChange={(e) => radioChange(e)}
            checked={state.type === "debit"}
          />
        }
      </div>
    </fieldset>
  );
};

const RadioButton = ({ id, name, value, label, whenChange, checked }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={(e) => whenChange(e)}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
