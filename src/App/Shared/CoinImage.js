import React from 'react';

export default function ({coin, style}) {
    return !coin ? <div>No coin data found </div> : <img
      alt={coin.CoinSymbol}
      style={style || {height: '50px'}}
      src={`http://cryptocompare.com/${
        coin.ImageUrl
        }`}
    />;
  }