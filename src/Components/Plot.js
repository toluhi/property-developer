import React from "react";
import { 
    code, Badge, ButtonToolbar, Button } from 'react-bootstrap';

const Plot = ({ plot, onBuyClicked, onSellClicked, onTakeOffMarketClicked }) => {
  if(!plot){
    return null;
  }
  let forSaleBySomeElse = plot.forSale && plot.owner !== plot.userId;
  let forSaleByLoggedInUser = plot.forSale && plot.owner === plot.userId;
  let ownedByLoggedInUser = plot.owner.toUpperCase() === plot.userId.toUpperCase();
  return (
    <div>
          <code>Plot {plot.plotNumber}</code>
          {plot.forSale ? <Badge className="badge" pullRight>For Sale ({plot.price} Wei)</Badge> : null}
          <ButtonToolbar className="toolbar">
            {plot.forSale && !ownedByLoggedInUser ?<Button bsStyle="primary" bsSize="xsmall" onClick={() => onBuyClicked(plot.id, plot.price)}>
              Buy
            </Button> : null}
            {!plot.forSale && ownedByLoggedInUser ? <Button bsStyle="danger" bsSize="xsmall" onClick={() => onSellClicked(plot.id)}>Sell</Button> : null}
            {plot.forSale && ownedByLoggedInUser ? <Button bsStyle="warning" bsSize="xsmall" onClick={() => onTakeOffMarketClicked(plot.id)}>Take Plot Off the Market</Button> : null}
          </ButtonToolbar>
          </div>
       
  )
}

export default Plot;