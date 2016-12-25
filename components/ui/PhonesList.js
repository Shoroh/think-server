import React, { DOM } from 'react';
import _ from 'lodash';

const PhonesList = ({phones}) => (
  DOM.ul(
    null,
    _.map(
      phones,
      (phone, key) => (
        DOM.li({ key }, `${phone.name} — ${phone.phone}`)
      )
    )
  )
)

export default PhonesList;
