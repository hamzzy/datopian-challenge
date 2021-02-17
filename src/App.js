import React, {useState, useEffect} from 'react';
import * as d3 from 'd3'

const csvData=require('../data/daily-price.csv')
// import csvData from '../data/daily-price.csv'
import LineChart from './components/Linechart.js'
import Header from './components/Header';
import {Container,Row,Jumbotron} from 'react-bootstrap';


const parseNumber = d => {
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : +d.price }
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    d3.csv(csvData, parseNumber).then(setData)
  }, []);

  return (
    <div>
      <Header/>

      <Container>
        <div>
           <h1>Henry Hub Natural Gas  Daily Prices</h1>
        </div>
      </Container>

      <Container >
  <Row>     
     <Jumbotron>        
    <LineChart data={data} />
        </Jumbotron>
        </Row>
</Container>
    </div>
  );
}

export default App;