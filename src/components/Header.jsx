import CustomSelect from './CustomSelect';

const Header = ({ onChange, randomize, sort }) => {
    return (
        <nav>
            <div id='nav-logo'>
                <h1>sorting-visualizer</h1>
            </div>
            <CustomSelect onChange={onChange} />
            <form id="buttons-form">
                <button id='rand-btn' type='button' onClick={randomize}>Randomize</button>
                <button id='sort-btn' type='button' onClick={sort}>Sort</button>
            </form>
        </nav>
    );
}

export default Header;
