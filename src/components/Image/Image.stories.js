import React from 'react'
import Image from './Image'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Image component', decorators: [withKnobs]}

export const editable = () => {
  const stringId = text('stringId', 'stringId')
  const iconId = text('iconId', 'iconId')

  return (
    <div className="layout-edit">
      <Image
        icon="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        iconId={iconId}
        stringId={stringId}
      />
    </div>
  );
}