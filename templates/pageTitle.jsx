import Adapt from 'core/js/adapt';
import React from 'react';

export default function PageTitle(props) {
  return (
    <div className='page__nav-title-inner' >
      <div className='page__nav-title-text js-page__nav-title-text' aria-label={props.title}>{props.title}</div>
    </div>
  );
}
