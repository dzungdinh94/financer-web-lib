import React from 'react';
import classnames from 'classnames';
import { Editable } from '../Editable';
import './PanelInformationRow.scss';

const PanelInformationRow = ({
  stringId,
  label = '',
  information = '',
  className,
  bold = true,
  disable = false,
}) => (
  <div
    className={classnames(
      'd-flex',
      'justify-content-start',
      'align-items-center',
      'panel-information-row',
      className,
      { 'panel-information-row-disable': disable }
    )}
  >
		<span style={{ wordBreak: 'normal' }}>
			{bold ? <b>{label}</b> : label}:{' '}
      <span>{information}</span>
		</span>
    { stringId && <Editable stringId={stringId} /> }
  </div>
);

export default PanelInformationRow;