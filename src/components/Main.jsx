import Bar from './Bar';

const Main = (props) => {

    const barElements = props.vals.map((val, i) => {
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
