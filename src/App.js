import React from 'react';
import { SerialPicker, Chart} from './components';
import styles from './App.module.css';
import axios from 'axios';

const url = 'https://rmsbackendapi.herokuapp.com';


class App extends React.Component {
  state = {
    data: [],
   
  }

  async componentDidMount() {

    try {
      
      const {data} = await axios.get(url);

      this.setState({ data:data});

    } catch (error) {
      return error;
    }
   
  }

  handleSerial = async (serial) => {
    
    try {
      
      const {data} = await axios.get(`${url}/${serial}`);

      this.setState({data});

    } catch (error) {
      return error;
    }

  }

 
  render() {
    const { data } = this.state;
    
    const WH=[];
    const VARH =[];
    const Date =[];

    // Checking if we have data from api
    if(data && data.length > 0){
      data.map(d => {
        WH.push(d.WH);
        VARH.push(d.VARH);
        Date.push(d.ReadingDateTimeUTC);
      });
    }
    
  
    return (
      <div className={styles.container}>
        <SerialPicker handleCountryChange={this.handleSerial} />
        <Chart WH={WH} VARH = {VARH} Date={Date}  /> 
      </div>
    );
  }
}

export default App;