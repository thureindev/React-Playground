'use strict';

const create = React.createElement;

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);


function App() {
    const [bindedCount, setCount] = React.useState(0);

    function handleClick() {
        setCount(bindedCount + 1);
    }

    return create('div', null,

        create(Heading, { text: 'Counters that update seperately' }),
        create(Button),
        create(Button),

        create(Heading, { text: 'Counters that update together' }),
        create(BindedButton, { count: bindedCount, onClick: handleClick }),
        create(BindedButton, { count: bindedCount, onClick: handleClick }),
        
        create(Heading, { text: 'Like button: boolean' }),
        create(LikeButton)
    );
}


root.render(create(App));