import { useState } from 'react';
import '../Main.css'
import Bar from './Bar';

function Main() {
    const [values, setValues] = useState([12, 4, 59, 47, 94, 17]);

    const barElements = values.map((val, i) => {
        return (
            <Bar value={val} key={i}/>
        )
    })

    return (
        <main>
            <div id="bars">
                {barElements}
            </div>
            <form id="buttons-form">
                <button>Randomize</button>
                <button>Sort</button>
            </form>
        </main>
    );
}

export default Main;
