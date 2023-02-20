import React from "react";

const Bar = ({ value }) => {
    const styles = {
        height: `${value}%`
    }

    return (
        <div style={styles} className={`bar`}></div>
    )
}

export default Bar;