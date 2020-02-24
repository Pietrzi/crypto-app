import React from 'react';
import _ from 'lodash';
import moment from 'moment';
const cc = require('cryptocompare');


export const AppContext = React.createContext();

const TIME_UNITS = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
             page: 'dashboard',
             ...this.savedSettings(),
             setPage: this.setPage,
             confirmFavorites: this.confirmFavorites,
             removeCoin: this.removeCoin,
             isInFavorites: this.isInFavorites,
             setCurrentFavorite: this.setCurrentFavorite
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchHistorical();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    fetchHistorical = async () => {
        if (this.state.firstVisit) return;
        let results = await this.historical();
        let historical = [
          {
            name: this.state.currentFavorite,
            data: results.map((ticker, index) => [
              moment().subtract({[this.state.timeInterval]: TIME_UNITS - index}).valueOf(),
              ticker.USD
            ])
          }
        ]
        this.setState({historical});
      }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)})
      }
    
    isInFavorites = key => _.includes(this.state.favorites, key)

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }

    setCurrentFavorite = (sym) => {
        this.setState({
          currentFavorite: sym,
          historical: null
        }, this.fetchHistorical);
    
        localStorage.setItem('cryptoDash', JSON.stringify({
          ...JSON.parse(localStorage.getItem('cryptoDash')),
          currentFavorite: sym
        }))
      }

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData) {
            return {page: 'settings', firstVisit: true}
        }
        return {};
    }
     
    setPage = page => this.setState({ page });

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

