import React from 'react';
import './App.css';
import { Card } from './components/card/card.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      churchs: [
        {
          id: 1,
          name: "Aldoar",
          telephone: "226100113",
          schedule: {
            "tuesday": [19],
            "wednesday": [19],
            "thursday": [19],
            "friday": [19],
            "saturday": [16.5,19],
            "sunday": [8.5,10,12,19]
          }
        },
          {
            id: 2,
            name: "Almas",
            telephone: "222005765",
            schedule: {
              "sunday": [8,9,10,11,12,18,5]
            }
          }
        ]
    };
    //TODO: check recurrency libs:
    //https://gitlab.com/john.carroll.p/rschedule
    //https://stackoverflow.com/questions/34160743/using-momentjs-with-recurring-dates
    //https://github.com/jakubroztocil/rrule
    //TODO: import data from external
    //curl  https://aparoquia.com/apo/webservice/v2/listar/missas2/idDiocese/15/vigararia//idParoquia//hora1//hora2//diaSemana/  -d "authCode=ecfd1e3a7c22352e63ea9acda5299ae6" > info.json

  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };


  render() {
    const {searchField,churchs} = this.state;
    const filteredChurchs = churchs.filter(church =>
      church.name.toLowerCase().includes(searchField.toLowerCase())
    );
      return (
    <div>
        <h1>Mass Times in Porto</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        {filteredChurchs.map(church => (
          <Card key={church.id} item={church}/>
        ))
        }
    </div>
    );
  }
}

export default App;
