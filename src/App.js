import React, {useState, useEffect} from 'react';
import * as d3 from 'd3'

import Data from '../data/daily-price.csv'
import LineChart from './components/Linechart.js'
import Header from './components/Header';
import {Container,Row,Jumbotron,Col} from 'react-bootstrap';


const parseNumber = d => {
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : +d.price }
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    d3.csv(Data, parseNumber).then(setData)
  }, []);

  return (
    <div>
      <Header/>

      <Container>
      <Row>     
     <Col>
        <div class="name">
           <h1>Henry Hub Natural Gas  Daily Prices Graph</h1>
        </div>
        </Col>

        </Row>
      </Container>

      <Container >
        <Col>
  <Row>     
     <Jumbotron>        
    <LineChart data={data} />
        </Jumbotron>
        </Row>
        </Col>
</Container>
    </div>
  );
}

export default App;