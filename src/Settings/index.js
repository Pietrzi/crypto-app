import React from 'react';
import WelcomeText from './WelcomeText';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function() {
    return <Page name="settings"> 
                <WelcomeText />
                <CoinGrid topSection/>
                <ConfirmButton />
                <Search/>
                <CoinGrid />
           </Page>
}