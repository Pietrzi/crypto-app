import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile} from "../App/Shared/Tile";
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../App/Shared/CoinImage';


export default function({coinKey}) {
    return (
        <AppContext.Consumer>
            {({coinList}) => {
                let coin = coinList[coinKey];
                const TileClass = SelectableTile;
                return (
                    <TileClass>
                        <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
                        <CoinImage />
                    </TileClass> 
                )
            }}
        </AppContext.Consumer>
    )
}