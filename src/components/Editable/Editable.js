import React from 'react';
import { string, array, object, bool } from 'prop-types';
import classnames from 'classnames';
import EditStringSVG from './icons/EditStringSVG';
import EditIconSVG from './icons/EditIconSVG';
import EditSettingsSVG from './icons/EditSettingsSVG';
import EditBackgroundSVG from './icons/EditBackgroundSVG';
import './Editable.scss';

const Editable = ({
  children,
  stringId,
  iconId,
  position,
  style,
  reverse,
  sectionId,
  backgroundId,
}) => {
  const [x = 5, y = 0] = position;
  const triggerStyles = {
    transform: `translate(${x}px, ${y}px)`,
  };

  return (
    <div
      className={classnames('edit-wrapper__container', { reverse: reverse })}
      style={style}
    >
      {children}
      <div className="edit-wrapper__icons-container" style={triggerStyles}>
        {stringId && (
          <div className="edit-wrapper__icon-wrapper" data-string-id={stringId}>
            <EditStringSVG />
          </div>
        )}
        {iconId && (
          <div className="edit-wrapper__icon-wrapper" data-icon-id={iconId}>
            <EditIconSVG />
          </div>
        )}
        {backgroundId && (
          <div
            className="edit-wrapper__icon-wrapper"
            data-icon-id={backgroundId}
          >
            <EditBackgroundSVG />
          </div>
        )}
        {sectionId && (
          <div
            className="edit-wrapper__icon-wrapper large"
            data-section-id={sectionId}
          >
            <EditSettingsSVG />
          </div>
        )}
      </div>
    </div>
  );
};

Editable.propTypes = {
  stringId: string,
  iconId: string,
  position: array,
  style: object,
  reverse: bool,
};

Editable.defaultProps = {
  stringId: '',
  iconId: '',
  position: [],
  style: {},
  reverse: false,
};

export default Editable;
