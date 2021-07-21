import React from 'react'
import IconTitle from './IconTitle'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'IconTitle component', decorators: [withKnobs]}

export const editable = () => {
  const subtitle = text('subtitle', 'subtitle');
  const stringId = text('stringId', 'stringId');
  const iconId = text('iconId', 'iconId');
  const iconText = text('text', 'iconText');
  const actionStringId = text('actionStringId', 'actionStringId');
  const actionText = text('actionText', 'actionText');
  const actionIconId = text('text', 'actionIconId ');

  return (
    <div className="layout-edit">
      <IconTitle
        iconId={iconId}
        iconPath="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        stringId={stringId}
        text={iconText}
        textType="title"
        underline={true}
        className="w-100 holla-logo"
        imageWrapperClassName="auth_logo-wrapper"
        subtitle={subtitle}
        actionProps={{
          stringId: actionStringId,
          text: actionText,
          iconId: actionIconId,
          iconPath: 'https://www.svgrepo.com/show/69405/cross-sign.svg',
          onClick: () => window.alert("You have just clicked an action"),
          useSvg: true,
          showActionText: true,
        }}
      />
    </div>
  );
}