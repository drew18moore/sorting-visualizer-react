import { useState } from 'react';
import '../Main.css'
import Bar from './Bar';

function Main() {
    const [data, setData] = useState({
        num: 10,
        values: [12, 4, 59, 47, 94, 17]
    });

    console.log(data.values);

    const randomize = () => {
        setData(prevData => {
            return {
                ...prevData,
                values: [...new Array(data.num)].map(() => Math.round(Math.random() * 100))
            }
        });
    }

    const barElements = data.values.map((val, i) => {
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
                <button type="button" onClick={randomize}>Randomize</button>
                <button type="button">Sort</button>
            </form>
        </main>
    );
}

export default Main;
