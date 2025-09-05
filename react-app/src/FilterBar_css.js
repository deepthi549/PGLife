import React from "react";
import{base_path} from './utils';
const FilterBar=()=>{
    return(
        <div class="filter-bar row justify-content-around">
            <div class="col-auto" data-toggle="modal" data-target="#filter-modal">
                <img src="img/filter.png" alt="filter" />
                <span>Filter</span>
            </div>
            <div class="col-auto">
                <img src="img/desc.png" alt="sort-desc" />
                <span>Highest rent first</span>
            </div>
            <div class="col-auto">
                <img src="img/asc.png" alt="sort-asc" />
                <span>Lowest rent first</span>
            </div>
        </div>
    );
}
export default FilterBar;