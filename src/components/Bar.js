import '../Main.css'

function Bar(props) {
    const styles = {
        height: props.value
    }

    return (
        <div style={styles} className="bar"></div>
    )
}

export default Bar;