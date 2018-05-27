import React from "react";
import { Thumbnail } from 'react-bootstrap';

class Landing extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (<div className="text-center landing">
            <Thumbnail src="/src/img/ethereum.png" alt="242x200">
        <h3>Private Blockchain Tutorial</h3>
        <p>Login or Sign up to continue</p>
        
      </Thumbnail>
      </div>);
    }
}


  export default Landing;