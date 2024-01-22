import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import { valueToLowerCase } from "../../utils/helpers";
import Picker from "./Picker";
import FieldDropdown from "./FieldDropdown";

const DateField = ({ defaultValue, fieldData, name, ...wrapProps }) => {
  const { dateType: dateTypeUpper } = fieldData;

  const dateType = valueToLowerCase(dateTypeUpper);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper
      errors={errors?.[name] || {}}
      inputData={fieldData}
      labelFor={name}
      ginputClassName={dateType != "picker" && "ginput_complex gform-grid-row"}
      {...wrapProps}
    >
      {dateType === "picker" ? (
        <Picker fieldData={fieldData} name={name} control={control} />
      ) : (
        <FieldDropdown
          fieldData={fieldData}
          name={name}
          control={control}
          type={dateType}
        />
      )}
    </InputWrapper>
  );
};

export default DateField;

DateField.propTypes = {
  defaultValue: PropTypes.string,
  fieldData: PropTypes.shape({
    cssClass: PropTypes.string,
    inputMaskValue: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
  }),
  value: PropTypes.string,
  name: PropTypes.string,
  wrapProps: PropTypes.object,
};
