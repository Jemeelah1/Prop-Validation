import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const Header = ({validateProp,myBool,myFunction,myArray,myNumber,theObject,mysymbol}) => {

    return (
        <div>
            <header>
                <h1>Welcome to my Page</h1>
                <h1>{validateProp}</h1>
                {myBool}

                <button onClick={myFunction}></button>


            </header>
            <div>
                <Link to="/about">
                   About
                </Link>
            </div>
            <div>
            <Link to="/contact">
                   Contact
                </Link>
            </div>
        </div>
    )
}


Header.propTypes = {
    validateProp:PropTypes.string.isRequired,
    myBool:PropTypes.bool,
    myFunction:PropTypes.func.isRequired,
    myArray:PropTypes.array,
    myNumber:PropTypes.number,
    theObject:PropTypes.object.isRequired,
    mysymbol:PropTypes.symbol
}




export default Header

