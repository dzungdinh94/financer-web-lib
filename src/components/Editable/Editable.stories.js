import React from 'react'
import Editable from './Editable'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Editable component', decorators: [withKnobs]}

export const editable = () => {
  const children = text('Text', 'Click here now!')
  const stringId = text('stringId', 'stringId')
  const iconId = text('iconId', 'iconId')
  const sectionId = text('sectionId', 'sectionId')
  const backgroundId = text('backgroundId', 'backgroundId')

  return (
    <div className="layout-edit">
      <Editable
        stringId={stringId}
        iconId={iconId}
        sectionId={sectionId}
        backgroundId={backgroundId}
      >
        {children}
      </Editable>
    </div>
  );
}