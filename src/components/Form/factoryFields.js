import React from 'react';
import InputField from './FormFields/InputField';
import TextAreaField from './FormFields/TextAreaField';
import FileField from './FormFields/FileField';
import DropdownField from './FormFields/DropdownField';
// import DateField from './FormFields/DateField';
// import DropdownDateField from './FormFields/DropdownDateField';
import CheckField from './FormFields/CheckField';
import EditableInputField from './FormFields/EditableInputField';
import CaptchaField from './FormFields/Captcha';
// import ToggleField from './FormFields/ToggleField';
import DumbField from './FormFields/DumbFieldForm';

const getFormFieldComponentByType = (type) => {
  switch (type) {
    case 'captcha':
      return CaptchaField;
    case 'hidden':
      return () => <div className="hidden" />;
    case 'file':
      return FileField;
    case 'dumb':
      return DumbField;
    case 'select':
    case 'autocomplete':
      return DropdownField;
    /*case 'date-dropdown':
      return DropdownDateField;
    case 'date':
      return DateField;*/
    case 'checkbox':
      return CheckField;
    case 'editable':
      return EditableInputField;
    case 'textarea':
      return TextAreaField;
    /*case 'toggle':
      return ToggleField;*/
    case 'text':
    case 'password':
    case 'email':
    default:
      return InputField;
  }
}

export default getFormFieldComponentByType;
