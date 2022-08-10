import React, {useCallback, useState, useEffect } from "react";
import axios from "axios";
import './productList.scss';
import './loading-placeHolder.scss';
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/ProductAction";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";

export default function ProductList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCatogery] = useState([]);
    const [latest, setLatest] = useState(false); //  assesding 
    const [oldest, setOldest] = useState(false); //   dessending
    const [highToLow, setHighToLow] = useState(false); // false assesding true dessending
    const [lowToHigh, setLowToHigh] = useState(false); // false assesding true dessending
    const [search, setsearch] = useState("");
    const [pagination, setPagination] = useState(1);
    const [startIndexInitisal , setStartIndexInitisal ] = useState(0);
    const [endIndexInitisal , setEndIndexInitisal ] = useState(12);

    const [state, setState] = useState({
        products: data,
        filters: new Set(),
      });

      let dispatch = useDispatch();
      const productStore = useSelector(state => state.products);
      let products = [...productStore.products];
      

        useEffect(() => {
            dispatch(getProducts());
        }, []);
     
    // const products = useSelector((state) => state.products);
    // console.log(products,"products");

    useEffect(() => {
        fetchHandler();
        
    }, []);
    useEffect(() => {
        checkDistinct();
        
    }, [data]);

    const fetchHandler = (event) => {
        setIsLoading(true);
        axios
          .get("https://fakestoreapi.com/products")
          .then((resp) => {
            setData(resp.data);
            console.log(resp.data);
            setIsLoading(false);
            
          });
          
          
    }
    var dataLimit = 12;
    var pageLimit = 2;
  //   var pageLimit = Math.round(data.length / dataLimit);
  const [pages] = useState( Math.round(20 / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  let startIndex = currentPage * dataLimit - dataLimit;
  let endIndex = startIndex + dataLimit;

  function goToNextPage() {
      // not yet implemented
      setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
      // not yet implemented
      setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
      // not yet implemented
       const pageNumber = Number(event.target.textContent);
       setCurrentPage(pageNumber);
   }
 
   const getPaginatedData = () => {
      // not yet implemented
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
   };
 
   const getPaginationGroup = () => {
      // not yet implemented
      let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
       return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
   };
 

    let content = <p>Found no Data.</p>;
    let categoryNames = <p>Found no Data.</p>;
    let paginationCount = <p>Found no Data.</p>;
    if (isLoading) {
        content = 
        <div className="loading-placeHolder">
            <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
                <div className="card" aria-hidden="true">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div className="card-body">
                            <div className="h5 card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                            </div>
                            <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                </div>
                <div className="card" aria-hidden="true">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div className="card-body">
                            <div className="h5 card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                            </div>
                            <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                </div>
                <div className="card" aria-hidden="true">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div className="card-body">
                            <div className="h5 card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                            </div>
                            <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                </div>
                <div className="card" aria-hidden="true">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div className="card-body">
                            <div className="h5 card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                            </div>
                            <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                </div>

                </div>
            </div>;
        categoryNames =
        <div className="wrapper">
            <input type="checkbox" id="Loading" name="Loading" value="Loading" />
            <label htmlFor="Loading"> Loading...</label><br></br>
        </div>
        
        paginationCount = <>Loading</>
        
      
    }
    if (data.length > 0 ) {
        if(latest){
            data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); // ascending (Default)
        }
        else if(oldest){
            data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)); // descending
        }
        else if (highToLow) {
            data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }else if(lowToHigh){
            data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }
        // else if(state.products.length !== 0){
        //     // alert(state.products.length+"hi");
        //     console.log(data,"helo data before");
        //     console.log(state.products,"helo products before");
        //     // data.filter((data) => data.id === state.products.id)
        //     // data.filter((data) =>
        //     // data.category.toLowerCase().includes(state.products.category.toLowerCase()))
        //     console.log(data,"helo data after");
        //     console.log(state.products,"helo products after");


           
           
        // }
        // else if(pagination){
        //     // alert(pagination);
        //     switch(pagination) {
        //         case 1:
        //             data.filter((data) => (data.id >= startIndex) && (data.id<= endIndex) );
        //             console.log(data.filter((data) => (data.id >= startIndex) && (data.id<= endIndex) ));
        //           break;
        //         case 2:
        //           // code block
        //           break;

        //         default:
        //           // code block
        //       }
        // }
      
        content = data
        .filter((data) =>
        data.category.toLowerCase().includes(search.toLowerCase()))
        .filter((data) => (data.id >= startIndex) && (data.id<= endIndex) )
        .map((item) => (
            
            <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex" key={item.id}>
                <div className='card'>
                    {/* <div className="card-header">
                        {item.category} &#9794;
                    </div>                             */}
                    <Link to={`/venia/products/ProductDetails/${item.id}`}>
                        <div className='card-body'> 
                            <img src={item.image} alt="product-img" className='img-wrapper'/>
                            {/* <p className='title'>{item.id}</p> */}
                            <p className='title'>{item.title.slice(0,17-3)+'...'}</p>
                            <p className='price'>${item.price}</p>
                            <img className="icon" src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="wishlist icon"/>
                        </div>
                    </Link>
                    {/* <div className="card-footer">More</div> */}
                </div>
            </div>     
        ));
        
        if(state.products.length !== 0){
            if(latest){
                state.products.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); // ascending (Default)
            }
            else if(oldest){
                state.products.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)); // descending
            }
            else if (highToLow) {
                state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            }else if(lowToHigh){
                state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            }
            else if(state.products.length <=12){
                // alert("helo pagination less than 12 for Doing Sorting u need to go 1 page ");
                startIndex = 0;
                endIndex = 12; 
            }
            content = state.products
            .filter((data) =>
            data.category.toLowerCase().includes(search.toLowerCase()))
            // .filter((data) => (data.id >= startIndex) && (data.id<= endIndex) )
            // .slice(0, 12)
            .slice(startIndex, endIndex)
            .map((item) => (
                
                <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex" key={item.id}>
                    <div className='card'>
                        {/* <div className="card-header">
                            {item.category} &#9794;
                        </div>                             */}
                        <Link to={`/venia/products/ProductDetails/${item.id}`}>
                            <div className='card-body'> 
                                <img src={item.image} alt="product-img" className='img-wrapper'/>
                                {/* <p className='title'>{item.id}</p> */}
                                <p className='title'>{item.title.slice(0,17-3)+'...'}</p>
                                <p className='price'>${item.price}</p>
                                <img className="icon" src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="wishlist icon"/>
                            </div>
                        </Link>
                        {/* <div className="card-footer">More</div> */}
                    </div>
                </div>     
            ));
            }
    
        categoryNames =
        category.map((category) => (
            <>
            <div className="filter-wrapper">
                <input type="checkbox" className="radioCheck" onClick={() =>filterSelection(category)} id={category}  value={category} />
                <label htmlFor={category}> {category}</label><br></br>
            </div>
            </>
          )) 
        paginationCount = 
        <>
            <a ><button onClick={event => nextPage(event,"1")}>1</button></a>
            <a ><button onClick={event => nextPage(event,"2")}>2</button></a>
        </>
        
    }

    const checkDistinct = () => {
        var  distinctCategory = [] ;
          for(var i = 0 ; i< data.length ; i++){
            distinctCategory.push(data[i].category);
          }
        //   console.log(distinctCategory.filter((x, i, a) => a.indexOf(x) == i)," Is array ");
            //  distinctCategory = distinctCategory.map(x =>x
            //     .replace("women's ", '')
            //     .replace("men's ", '')
            // );
        
          setCatogery(distinctCategory.filter((x, i, a) => a.indexOf(x) == i));
          console.log(category);
          
      };
      const filterSelection = (category) => {
        // alert(category);
        setsearch(category);

      };
      const onSelect = () => {
        // alert("reversing",reverse);
        let text;
        let dataSort = [];
        let getValue = document.getElementById("sort").value;
        switch(getValue) {
            case "sortByLatest":
                // alert("ascending");
                setLatest(true);
                setOldest(false);
                setLowToHigh(false);
                setHighToLow(false);
                
            break;
            case "sortByOldest":
                // alert("descending");
                setLatest(false);
                setOldest(true);
                setHighToLow(false);
                setLowToHigh(false);
                
                
            break;
            case "highToLow":{
                // alert("highToLow");
                setLatest(false);
                setOldest(false);
                setHighToLow(true);    
                setLowToHigh(false);
                  
                // dataSort.push(data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));    
                // console.log(dataSort,"dataSort by Price High to Low", highToLow);
            }
            break;
            case "lowToHigh":{
                // alert("lowToHigh");
                setLatest(false);
                setOldest(false);
                setHighToLow(false); 
                setLowToHigh(true);     
                 // dataSort.push(data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));       
                // console.log(dataSort,"dataSort by Price Low to High", lowToHigh);
            }
            break;
            case "Reset":{
                alert("Reset");
                setHighToLow(false); 
                setLowToHigh(false); 
                fetchHandler();
            }
            break;
            default:
                setHighToLow(false); 
                setLowToHigh(false);  
                fetchHandler();
                
          }
        // let rev = reverse;
        // rev =!rev
        // setReverse(rev);
        // // alert("reversing",rev);
        // console.log(rev);
      };

      const nextPage = (event ,currentPage) => {
        console.log(currentPage);
        setPagination(currentPage);
        switch(currentPage) {
            case "1":{
                // alert("ok 1");
                setStartIndexInitisal(0);
                setEndIndexInitisal(12);
                break;
            }
            case "2":{
                // alert("ok 2")
                setStartIndexInitisal(startIndexInitisal + 12);
                setEndIndexInitisal(endIndexInitisal + 12);
                break;
            }
            
            default:
                alert("Page End");
        }
      }

    //   const sorting = () => {
    //     var  price = [] ;
    //     for(var i = 0 ; i< data.length ; i++){ 
    //         price.push(data[i].price);
            
    //       }
    //       console.log(price,"Price array");
    //       console.log(price.sort(),"Price array sort");
    //   }
//     function Product(props) {
//     const { product } = props
    
//     return (
//       <li
//         key={product.id}
//         className="product">
//         <img src={product.image} />
//         <div className="product-details">
//           <header>{product.title}</header>
//           <div className="category">{product.category}</div>
//           {/* <div className="price">{`$${padPrice(product.price)}`}</div> */}
//         </div>
//       </li>
//     )
//   }

//     function ProductsList(props) {
//         const { products } = props
        
//         return (
//           <ul className="products">
//             {products.map(product => (
//               <Product product={product} />
//             ))}
//           </ul>
//         )
//       }
    const handleFilterChange = useCallback(event => {
        setState(previousState => {
          let filters = new Set(previousState.filters)
          let products = data;
          
          if (event.target.checked) {
            filters.add(event.target.value)
          } else {
            filters.delete(event.target.value)
          }
          
          if (filters.size) {
            products = products.filter(product => {
              return filters.has(product.category)
            })
          }
          
          return {
            filters,
            products,
          }
        })
      }, [setState,data])


  return (
    <section className='productList'>
        <div className='container'>
            <div className='row'>
            <div className="aem-Grid aem-Grid--12 ">
                <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--hide ">
                    <ul className="breadcrumb">
                        <li><a>Clothing</a></li>
                        <li><a>Women’s</a></li>
                        <li>Outerwear</li>
                    </ul> 
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--hide">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn  aem-GridColumn--default--6 ">
                        <span className="results"> {state.products.length !== 0 ? state.products.length : data.length} Results</span>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--default--6 ">
                            <div className="sort">
                            <select id="sort" name="sort" className="btn" onChange={() =>onSelect()} >
                                <option value="sortByLatest">Sort By Latest </option>
                                <option value="sortByOldest">Sort By Oldest</option>
                                <option value="highToLow">Price: High to Low</option>
                                <option value="lowToHigh">Price: Low to High</option>
                                {/* <option value="Reset">Reset</option> */}
                                
                            </select>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            <div className='row'>
                <div className="aem-Grid aem-Grid--12 ">
                    <Filter categoryNames={categoryNames} category={category} filterSelection={filterSelection}  
                    categories={category}
                    onFilterChange={handleFilterChange}/>
                    <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                        <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10">
                                <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                                    <ul className="breadcrumb">
                                        <li><a>Clothing</a></li>
                                        <li><a>Women’s</a></li>
                                        <li>Outerwear</li>
                                    </ul> 
                                </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10" style={{ margin : "20px 0px"}}>
                                
                                <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                   <div className="filter">
                                        {/* <img className="icon" src="./../../../assets/icons/sliders.png"  alt="profile icon"/>
                                        <a className="Filter-sort">Filter Results</a>  */}
                                        <FilterMenu  categoryNames={categoryNames} 
                                            categories={category}
                                            onFilterChange={handleFilterChange}/>
                                    </div>
                                </div>
                                <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                   <div className="filter">
                                        <img className="sort-icon" src={process.env.PUBLIC_URL + `/assets/icons/sort.png`}  alt="profile icon"/>
                                        <a className="Filter-sort">Sort Products</a>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10">
                            <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                                 <div className="filter">
                                    <a className="results">{state.products.length !== 0 ? state.products.length : data.length} Results</a></div>
                            </div>
                        </div>  
                    </div>
                        <div className="aem-Grid aem-Grid--12 d-flex">
                            {content}
                            {/* {data.map((item) => (
                                <div className="aem-GridColumn  aem-GridColumn--default--4 d-flex">
                                    <div className='card'>
                                        <div className="card-header">
                                            {item.category} &#9794;
                                        </div>                            
                                        <div className='card-body'>
                                            <img src={item.image} alt="product-img" className='img-wrapper'/>
                                            <p className='title'>{item.id}</p>
                                            <p className='title'>{item.title.slice(0,17-3)+'...'}</p>
                                            <p className='price'>{item.price}</p>
                                            <img className="icon" src="assets/icons/love.png" alt="wishlist icon"/>
                                        </div>
                                        <div className="card-footer">More</div>
                                    </div>
                                </div>     
                            ))}  */}
                            {/* <ProductsList products={state.products} /> */}
                            
                        </div>
                        <div className="aem-Grid aem-Grid--12 d-flex justify-content-center">
                            
                            <div className="pagination">
                                
                                {/* {paginationCount} */}
                                {/* <a >&gt;</a> */}
                                {/* previous button */}
                                <button
                                    onClick={goToPreviousPage}
                                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                                    >
                                    <img src={process.env.PUBLIC_URL + `/assets/icons/chevron-right.svg`} className="rev-img" alt="pagination arrow" />
                                </button>

                                 {/* show page numbers */}
                                {getPaginationGroup().map((item, index) => (
                                    <button
                                    key={index}
                                    onClick={changePage}
                                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                                    >
                                    <span>{item}</span>
                                    </button>
                                ))}

                                 {/* next button */}
                                <button
                                    onClick={goToNextPage}
                                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                                >
                                   <img src={process.env.PUBLIC_URL + `/assets/icons/chevron-right.svg`} alt="pagination arrow" />
                                </button>
                            </div>
                        </div>

                    </div>  
                    
                </div>
            </div> 
        </div> 
    </section>
  )
}
