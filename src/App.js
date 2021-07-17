import React from 'react';
import './App.css'

import CardList from './components/card-list/card-list.component';

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            data: []
        }
    }

    extractData(ourData) {
        let theData = {};
        theData['active'] = ourData.active;
        theData['confirmed'] = ourData.confirmed;
        theData['deaths'] = ourData.deaths;
        theData['recovered'] = ourData.recovered;
        theData['lastupdatedtime'] = ourData.lastupdatedtime;
        let data=[{"key": 1, "title": "Country", value: "India"}];
        let k = 1;
        for (let i in theData){
            let obj = {};
            obj["key"] = ++k;
            obj["title"] = i;
            obj["value"] = theData[i];
            data.push(obj);
        }
        return data;
    }

    async componentDidMount(){
        const url = "https://api.covid19india.org/data.json"; // Making an API request
        const response  = await fetch(url);
        let ourData = await response.json();
        // Loading the required data in
        const data = this.extractData(ourData.statewise[0]);
        this.setState({data: data});
    }

    render() {
        return (
            <div className="App">
                <p className="glow">LIVE</p>
                <h1>COVID-19 TRACKER</h1>
                <CardList data={this.state.data}/>
            </div>
        )
    }
}

export default App;