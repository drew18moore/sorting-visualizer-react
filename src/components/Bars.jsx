import Bar from './Bar';

const Main = ({ values }) => {

    const barElements = values.map((val, i) => {
        return (
            <Bar value={val} key={i}/>
        )
    })

    return (
        <main>
            <div className="bars">
                {barElements}
            </div>
        </main>
    );
}

export default Main;
