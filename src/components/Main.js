import { useEffect, useState } from 'react';
import '../Main.css'
import Bar from './Bar';

function Main() {
    const [data, setData] = useState({
        num: 100,
        values: [12, 4, 59, 47, 94, 17]
    });

    useEffect(() => {
        randomize();
    }, [])

    const randomize = () => {
        setData(prevData => {
            return {
                ...prevData,
                values: [...new Array(data.num)].map(() => Math.floor(Math.random() * 100) + 1)
            }
        });
    }

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const bubbleSort = async() => {
        let arr = [...data.values];
        
        for (let i = 0; i < arr.length; i++) {
            
            await sleep(1000);
        }
        
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
                <button type="button" onClick={bubbleSort}>Sort</button>
            </form>
        </main>
    );
}

export default Main;
