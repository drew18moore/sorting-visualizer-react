import Select from "react-select/";

function CustomSelect(props) {
    const options = [
        {value: '', label: 'Choose an algorithm', isDisabled: true},
        {value: 'Bubble Sort', label: 'Bubble Sort'},
        {value: 'Selection Sort', label: 'Selection Sort'},
        {value: 'Quick Sort', label: 'Quick Sort'},
        {value: 'Merge Sort', label: 'Merge Sort'}
    ]

    const styles = {
        control: styles => ({
            ...styles,
            cursor: 'pointer'
        }),
        option: styles => ({
            ...styles,
            cursor: 'pointer'
        })
    }

    return (
        <Select styles={styles} onChange={props.onChange} value={options.value} options={options} defaultValue={options[0]} />
    )
}

export default CustomSelect;