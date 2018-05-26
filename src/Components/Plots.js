import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, code, Badge, ButtonToolbar, Button } from 'react-bootstrap';

const Plots = ({ properties }) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
          <code>Plot 1</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left road-bottom road-right" xs={4}>
          <code>Plot 2</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left" xs={4}>
          <code>Plot 3</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
          <code>Plot 4</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left road-top road-bottom road-right" xs={4}>
          <code>Plot 5</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left" xs={4}>
          <code>Plot 6</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
          <code>Plot 7</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left road-top road-bottom road-right" xs={4}>
          <code>Plot 8</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left" xs={4}>
          <code>Plot 9</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col className="plot road-right" xs={4}>
          <code>Plot 10</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left road-top road-right" xs={4}>
          <code>Plot 11</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
        <Col className="plot road-left" xs={4}>
          <code>Plot 12</code>
          <Badge className="badge" pullRight>For Sale</Badge>
          <ButtonToolbar className="toolbar">
            <Button bsStyle="primary" bsSize="xsmall">
              Buy
            </Button>
            <Button bsStyle="danger" bsSize="xsmall">Sell</Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return { properties: state.properties };
};

const List = connect(mapStateToProps)(Plots);
export default List;