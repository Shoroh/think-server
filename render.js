import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PhonesContainer from './components/containers/PhonesContainer';

const result = ReactDOMServer.renderToString(
  React.createElement(PhonesContainer)
);

export default result;
