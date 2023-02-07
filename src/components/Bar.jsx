
function Bar(props) {
    const styles = {
        height: props.value*5
    }

    return (
        <div style={styles} className="bar"></div>
    )
}

export default Bar;