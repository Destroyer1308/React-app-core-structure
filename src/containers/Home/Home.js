import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Home = props => {
    const { setDefaultProp } = useStoreActions(actions => actions.app);
    const { defaultProp } = useStoreState(state => state.app);
    const _onClick = () => {
        props.history.push('/shivam');
        setDefaultProp({
            defaultProp: "amar"
        });
    };
    
    return (
        <>
            <div onClick={_onClick}>
                Hello World
            </div>
            <div>
                {defaultProp}
            </div>
        </>
    );
};

export default Home;