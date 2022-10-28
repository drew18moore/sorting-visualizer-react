import '../Header.css';
import Select from 'react-select/';

function Header(props) {
    const options = [
        {value: '', label: 'Choose an algorithm', isDisabled: true},
        {value: 'Bubble Sort', label: 'Bubble Sort'},
        {value: 'Selection Sort', label: 'Selection Sort'},
        {value: 'Quick Sort', label: 'Quick Sort'},
        {value: 'Merge Sort', label: 'Merge Sort'}
    ]
    return (
        <nav>
            <div id='nav-logo'>
                <h1>sorting-visualizer</h1>
            </div>
            <Select onChange={props.onChange} value={options.value} options={options} defaultValue={options[0]}/>
        </nav>
    );
}

export default Header;
