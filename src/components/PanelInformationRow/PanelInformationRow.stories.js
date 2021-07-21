import React from 'react'
import PanelInformationRow from './PanelInformationRow'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default { title: 'PanelInformationRow component', decorators: [withKnobs]}

export const editable = () => {
  const information = text('Information', 'information');
  const label = text('Label', 'label');
  const stringId = text('stringId', 'stringId');
  const bold = boolean('bold', true);

  return (
    <div className="layout-edit">
      <PanelInformationRow
        stringId={stringId}
        label={label}
        information={information}
        bold={bold}
      />
    </div>
  );
}