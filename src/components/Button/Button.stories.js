import React from 'react'
import Button from './Button'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Button component', decorators: [withKnobs]}

export const editable = () => {
  const stringId = text('stringId', 'stringId')
  const label = text('label', 'Click here now!')

  return (
    <div className="layout-edit">
      <Button
        stringId={stringId}
        label={label}
        onClick={() => window.alert('You have just clicked a button')}
      />
    </div>
  );
}