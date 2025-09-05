import FilterBar from "./FilterBar_css";
import Filtermodal from './FilterModal';
import PropertyCard from './PropertyCard.js';
import NoProperty from './No Property';
import {base_path} from './utils';
const App=()=>{
    return(
        <>
            <div className="page-container">
                <FilterBar/>

                <PropertyCard/>
            </div>     
            <Filtermodal/>
       </>

    );
}
export default App;