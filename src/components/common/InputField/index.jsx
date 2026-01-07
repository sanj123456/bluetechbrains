import React from "react";
import "./inputfield.scss";
export default function InputField({
  name,
  value,
  handleChange,
  error,
  label,
  placeholder,
  type = "text",
  isDropdown,
  isTextarea,
  options,
  wrapperClassName = "",
  isDropZone,
  required=true,
  accept,
}) {
  return (
    <div className={`input-box ${wrapperClassName}`}>
      <label>
        {label}
        {required && <sup>*</sup>}
      </label>
      {!isDropdown && !isDropZone && (
        <span className="input-span">
          {!isTextarea ? (
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
            />
          ) : (
            <textarea
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              cols={40}
              rows={10}
              maxLength={400}
            />
          )}
        </span>
      )}
      {isDropdown && !isDropZone && (
        <div className="custom-select">
          <span className="input-span">
            <select name={name} value={value} onChange={handleChange}>
              {options.map((option) => {
                return <option value={option.value}>{option.name}</option>;
              })}
            </select>
          </span>
        </div>
      )}
      {isDropZone && (
        <>
          <div className="custom-drop-zone"  data-content={value || "Drag & drop files here or click to upload"}>
            <input type="file" onChange={handleChange} name={name} accept={accept}/>
          </div>
        </>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
