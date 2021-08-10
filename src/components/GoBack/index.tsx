import React from 'react';
import * as GB from './GoBackElements';
import { useHistory } from 'react-router';
import ICON from '../../assets/shared/icon-arrow-left.svg';

const GoBack = () => {
    const history = useHistory();
    const goBack = () => history.goBack();
    return (
        <GB.Button onClick={goBack} >
            <GB.LeftIcon src={ICON} />
            <GB.Txt>Go Back</GB.Txt>
        </GB.Button>
    )
}

export default GoBack
