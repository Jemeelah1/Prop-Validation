import Header from '../../components/Header';
// import About from '../About/About';
// import Contact from '../Contact/Contact';

const Home = () => {

    const validateProp = '';
    const myBool = true;
    const myFunction = () => '';
    const myArray = [] 
    const myNumber = 3;
    const theObject = {};
    const sym = Symbol (1)
    return (
        <div>
            <Header validateProp={validateProp} myBool ={myBool} myFunction={myFunction} myArray={myArray} myNumber={myNumber} theObject={theObject} mysymbol={sym}/>
        </div>
    )
}

export default Home;
