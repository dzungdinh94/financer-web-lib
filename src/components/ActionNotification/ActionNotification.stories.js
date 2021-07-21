import React from 'react'
import ActionNotification from './ActionNotification'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'ActionNotification component', decorators: [withKnobs]}

export const editable = () => {
  const actionText = text('Text', 'text');
  const stringId = text('stringId', 'stringId');
  const iconId = text('iconId', 'iconId');

  return (
    <div className="layout-edit">
      <ActionNotification
        stringId={stringId}
        text={actionText}
        iconId={iconId}
        iconPath="https://www.svgrepo.com/show/69405/cross-sign.svg"
        onClick={() => window.alert("You have just click an action notification")}
        status="information"
        textPosition="left"
      />
    </div>
  );
}