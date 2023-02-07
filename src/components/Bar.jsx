
const Bar = ({ value }) => {
    const styles = {
        height: `${value.value}%`
    }

    return (
        <div style={styles} className={`bar ${value.class}`}></div>
    )
}

export default Bar;