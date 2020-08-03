import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Home extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>this is webpage by react ssr post!</h1>
            </div>
        )
    }
}

const content = ReactDOMServer.renderToString(<Home />);
export default content;

