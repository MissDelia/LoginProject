import React from 'react';
import Dimensions from 'Dimensions';

const ScreenUtil = {
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
};

export default ScreenUtil;