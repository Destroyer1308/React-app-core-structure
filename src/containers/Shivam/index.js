import React from 'react';
import loadable from '@loadable/component';

import Loader from '../../components/Loader';

const loadingComponent = {
    component: loadable(() => import('./Shivam'), {
        fallback: <Loader />,
    })
};

export default loadingComponent;