import Bar from './Bar';

const Main = ({ values }) => {

    const styles = {
        height: `calc(${window.innerHeight}px - 4rem - 50px)`
    }

    const barElements = values.map((val, i) => {
        return (
            <Bar value={val} key={i}/>
        )
    })

    return (
        <main>
            <div className="bars" style={styles}>
                {barElements}
            </div>
        </main>
    );
}

export default Main;
