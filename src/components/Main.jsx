import Bar from './Bar';

const Main = ({ values }) => {

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
        </main>
    );
}

export default Main;
