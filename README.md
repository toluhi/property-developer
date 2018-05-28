# Property Developer

This is a hands on solidity development training programme.
It is a simple React based website. The task here is to implement a private ethereum based blockchain.
Then using the web3 api, connect this website to the local blockchain and interact with a smart contract.

You dont need to be an expert in React to complete this. You only need to modify the [actions](/src/actions/index.js) file.

## Tasks
1. Setup a private etheruem blockchain. [Here](https://medium.com/coinmonks/ethereum-setting-up-a-private-blockchain-67bbb96cf4f1) is the link my step by step guide on setting up a private blockchain.
2. Implement a smart contract in solidity using [remix](http://remix.ethereum.org/). Here are the requirements for the smart contract.
    1. The smart contract should be owned by the creator.
    2. The smart contract should hold details of 12 plots of land i.e. the current owner, the price and if it available for sale.
    3. On creation all smart contracts should be available for sale.
    4. The smart contract should have a public method that returns the details of all plots.
    5. The smart contract should have a public method that allows anyone buy a plot provided they offer a price greater than or equal to the current offer price of the plot.
    6. The smart contract should have a public method that allows the owner of a plot to put it up for sale at price of their choosing.
    7. The smart contract should have a public method that allows the owner of an unsold plot to take it off the market.
    8. The smart contract should raise an event when the ownership of a plot changes.
    9. The smart contract should raise an event when a plot is back on the market.
3. Generate the ABI using the command line or from remix (remix is simpler) and paste it into the [landContract.json](/src/contracts/landContract.json).
4. Implement the missing functions in the [actions](/src/actions/index.js) file.

## Useful links
1. [Solidity docs](http://solidity.readthedocs.io)
2. [Web3 API](https://web3js.readthedocs.io/en/1.0/web3.html) 

