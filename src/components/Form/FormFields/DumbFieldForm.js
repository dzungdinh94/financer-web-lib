import React from 'react';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FieldWrapper from './FieldWrapper';
import { ActionNotification } from '../../ActionNotification';
import { CopyOutlined } from '@ant-design/icons';

const DumbField = ({
	input: { value },
	className = '',
	allowCopy = false,
	onCopy,
	copyOnClick = false,
	...rest
}) => {
  const renderCopy = (text, onCopy) => {
  	const { strings: STRINGS = {} } = {...rest};
    return (
			<CopyToClipboard text={text}>
				<ActionNotification
					status="information"
					stringId="COPY_TEXT"
					text={STRINGS['COPY_TEXT'] || 'Copy'}
					icon={<CopyOutlined />}
					className="copy-wrapper"
					onClick={onCopy}
				/>
			</CopyToClipboard>
    );
  };

	return (
		<FieldWrapper
			className={classnames('dumb-field-wrapper', className)}
			{...rest}
		>
			<div className="d-flex justify-content-between">
				{copyOnClick ? (
					<CopyToClipboard text={value}>
						<div className="pointer address-line" onClick={onCopy}>
							{value}
						</div>
					</CopyToClipboard>
				) : (
					value
				)}
				{value && allowCopy && renderCopy(value, onCopy)}
			</div>
		</FieldWrapper>
	);
};

export default DumbField;
