import React from "react";
import { Grid, Row, Col, code, Badge, ButtonToolbar, Button } from 'react-bootstrap';
import Plot from './Plot'

const Plots = ({ plots, userId, onBuyClicked, onSellClicked, onTakeOffMarketClicked }) => {
  if(!plots || plots.length === 0){
    return null;
  }
  return (
    <Grid>
      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
        <Plot plot={{...plots[0], id:0, plotNumber: 1, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
          
        </Col>
        <Col className="plot road-left road-bottom road-right" xs={4}>
        <Plot plot={{...plots[1], id:1, plotNumber: 2, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left" xs={4}>
        <Plot plot={{...plots[2], id:2, plotNumber: 3, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
        <Plot plot={{...plots[3], id:3, plotNumber: 4, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left road-top road-bottom road-right" xs={4}>
        <Plot plot={{...plots[4], id:4, plotNumber: 5, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left" xs={4}>
        <Plot plot={{...plots[5], id:5, plotNumber: 6, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
        <Plot plot={{...plots[6], id:6, plotNumber: 7, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left road-top road-bottom road-right" xs={4}>
        <Plot plot={{...plots[7], id:7, plotNumber: 8, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left" xs={4}>
        <Plot plot={{...plots[8], id:8, plotNumber: 9, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
        <Plot plot={{...plots[9], id:9, plotNumber: 10, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left road-top road-right" xs={4}>
        <Plot plot={{...plots[10], id:10, plotNumber: 11, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
        <Col className="plot road-left" xs={4}>
        <Plot plot={{...plots[11], id:11, plotNumber: 12, userId}} onBuyClicked={onBuyClicked} onSellClicked={onSellClicked} onTakeOffMarketClicked={onTakeOffMarketClicked}/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Plots;