import React, { Component } from 'react';
import classnames from 'classnames';
import FieldWrapper from './FieldWrapper';
import { ActionNotification } from '../../ActionNotification';
import { EditFilled } from '@ant-design/icons';

class EditableInputField extends Component {
	state = {
		isEditable: false,
	};

	toogleEditable = () => {
		this.setState({ isEditable: !this.state.isEditable }, () => {
			this.toogleFocus();
		});
	};

	toogleFocus = () => {
		if (this.inputElement) {
			if (this.state.isEditable) {
				this.inputElement.focus();
			}
		}
	};

	setInputRef = (el) => {
		this.inputElement = el;
	};
	render() {
		const { isEditable } = this.state;
		const {
			input,
			type,
			placeholder,
			meta: { touched, error, active },
			onClick,
			fullWidth = false, // eslint-disable-line
			inputType,
			information,
      strings: STRINGS = {},
			...rest
		} = this.props;
		const displayError = touched && error && !active;

		return (
			<FieldWrapper {...this.props} className="with-notification">
				<input
					placeholder={placeholder}
					className={classnames('input_field-input', {
						error: displayError,
						cursor_disabled: !isEditable,
					})}
					type={inputType}
					{...input}
					{...rest}
					disabled={!isEditable}
					ref={this.setInputRef}
				/>
				<ActionNotification
					stringId="EDIT_TEXT"
					text={STRINGS['EDIT_TEXT'] || 'Edit'}
					status="information"
					icon={<EditFilled />}
					className="no_bottom pr-0 pl-0"
					onClick={this.toogleEditable}
					showActionText={true}
				/>
			</FieldWrapper>
		);
	}
}

export default EditableInputField;
