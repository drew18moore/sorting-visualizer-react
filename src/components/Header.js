import '../Header.css';
import CustomSelect from './CustomSelect';

function Header(props) {
    return (
        <nav>
            <div id='nav-logo'>
                <h1>sorting-visualizer</h1>
            </div>
            <CustomSelect onChange={props.onChange} />
            <form id="buttons-form">
                <button id='rand-btn' type='button' onClick={props.randomize}>Randomize</button>
                <button id='sort-btn' type='button' onClick={props.sort}>Sort</button>
            </form>
        </nav>
    );
}

export default Header;
