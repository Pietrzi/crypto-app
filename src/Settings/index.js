import React from 'react';
import WelcomeText from './WelcomeText';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function() {
    return <Page name="settings"> 
                <WelcomeText /> 
                <ConfirmButton /> 
                <CoinGrid />
           </Page>
}