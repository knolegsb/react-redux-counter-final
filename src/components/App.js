import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

class App extends React.Component {
    render(){
        return (
            <div>                
                <Buttons/>
                <Counter/>
            </div>
        );
    }

}

export default App;




