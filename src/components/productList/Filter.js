import React from "react";
import './filter.scss';

export default function Filter(props) {
  const { 
    categories,
    onFilterChange,
  } = props

  return (
    <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--hide filter-19">
        <div className="filter">
            <p className="tiltle">Filters</p>
            <div className="divider"></div>

            <p className="tiltle2">Attribute</p>
            {/* <div className="filter-wrapper">
              <input type="checkbox" onClick={() =>props.filterSelection("")} id="Blank" name="Blank" value="Blank" />
              <label htmlFor="Blank"> Reset</label><br></br>
            </div> */}
            {/* {props.categoryNames} */}

            
              {categories.map(category => (
                <div className="filter-wrapper" key={category}>
                  
                    <input 
                      onChange={onFilterChange}
                      type="checkbox"
                      value={category} />
                   <label> {category}
                  </label>
                </div>
              ))}
            
            
            {/*  <a onClick={() =>props.filterSelection(category)}> {category} </a> */}
           

            {/* <p><a href="">Show more</a></p>

            <div className="divider"></div>
            <p>Color</p>
            <a href="#" className="btn btn-black"></a>
            <a href="#" className="btn btn-white"></a>
            <a href="#" className="btn btn-darkGreen"></a>
            <a href="#" className="btn btn-yellow"></a>
            <a href="#" className="btn btn-blue"></a>
            <a href="#" className="btn btn-red "></a>
            <a href="#" className="btn btn-darkBlue"></a>
            <a href="#" className="btn btn-pink"></a>
            <a href="#" className="btn btn-orange"></a>
            <a href="#" className="btn btn-rainbow"></a> */}

            

            
           
            
        </div>
    </div>
  );
}
