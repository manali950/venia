import React, { useCallback, useState, useEffect } from "react";
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
    const [operation, setOperation] = useState({
        isLoading:false,
        category: [],
        search:""
    });

    const [isSort, setIsSort] = useState({
        latest: false,
        oldest: false,
        highToLow: false,
        lowToHigh: false
    });

    const [pagination, setPagination] = useState({
        default: 1,
        startIndexInitisal: 0,
        endIndexInitisal: 12

    });
    const [state, setState] = useState({
        products: data,
        filters: new Set(),
    });

    let dispatch = useDispatch();
    const productStore = useSelector(state => state.products);
    let products = [...productStore.products];


    useEffect(() => {
        dispatch(getProducts());
        fetchHandler();
    }, []);

    // const products = useSelector((state) => state.products);
    // console.log(products,"products");

    useEffect(() => {
        checkDistinct();

    }, [data]);

    const fetchHandler = (event) => {
        setOperation({...operation,isLoading:true});
        axios
            .get("https://fakestoreapi.com/products")
            .then((resp) => {
                setData(resp.data);
                setOperation({...operation,isLoading:false});

            });


    }
    var dataLimit = 12;
    var pageLimit = 2;
    const [pages] = useState(Math.round(20 / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    let startIndex = currentPage * dataLimit - dataLimit;
    let endIndex = startIndex + dataLimit;

    function goToNextPage() {

        setCurrentPage((page) => page + 1);
    }
    function goToPreviousPage() {

        setCurrentPage((page) => page - 1);
    }
    function changePage(event) {

        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {

        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };


    let content = <p>Found no Data.</p>;
    let categoryNames = <p>Found no Data.</p>;
    let paginationCount = <p>Found no Data.</p>;
    if (operation.isLoading) {
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
    if (data.length > 0) {
        if (isSort.latest) {
            data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); // ascending (Default)
        }
        else if (isSort.oldest) {
            data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)); // descending
        }
        else if (isSort.highToLow) {
            data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (isSort.lowToHigh) {
            data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }

        content = data
            .filter((data) =>
                data.category.toLowerCase().includes(operation.search.toLowerCase()))
            .filter((data) => (data.id >= startIndex) && (data.id <= endIndex))
            .map((item) => (

                <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex" key={item.id}>
                    <div className='card'>
                        <Link to={`/venia/products/ProductDetails/${item.id}`}>
                            <div className='card-body'>
                                <img src={item.image} alt="product-img" className='img-wrapper' />

                                <p className='title'>{item.title.slice(0, 17 - 3) + '...'}</p>
                                <p className='price'>${item.price}</p>
                                <img className="icon" src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="wishlist icon" />
                            </div>
                        </Link>

                    </div>
                </div>
            ));

        if (state.products.length !== 0) {
            if (isSort.latest) {
                state.products.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); // ascending (Default)
            }
            else if (isSort.oldest) {
                state.products.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)); // descending
            }
            else if (isSort.highToLow) {
                state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            } else if (isSort.lowToHigh) {
                state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            }
            else if (state.products.length <= 12) {

                startIndex = 0;
                endIndex = 12;
            }
            content = state.products
                .filter((data) =>
                    data.category.toLowerCase().includes(operation.search.toLowerCase()))
                .slice(startIndex, endIndex)
                .map((item) => (

                    <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex" key={item.id}>
                        <div className='card'>

                            <Link to={`/venia/products/ProductDetails/${item.id}`}>
                                <div className='card-body'>
                                    <img src={item.image} alt="product-img" className='img-wrapper' />

                                    <p className='title'>{item.title.slice(0, 17 - 3) + '...'}</p>
                                    <p className='price'>${item.price}</p>
                                    <img className="icon" src={process.env.PUBLIC_URL + `/assets/icons/heart.svg`} alt="wishlist icon" />
                                </div>
                            </Link>

                        </div>
                    </div>
                ));
        }

        categoryNames =
        operation.category.map((category) => (
                <>
                    <div className="filter-wrapper">
                        <input type="checkbox" className="radioCheck" onClick={() => filterSelection(category)} id={category} value={category} />
                        <label htmlFor={category}> {category}</label><br></br>
                    </div>
                </>
            ))
        paginationCount =
            <>
                <a ><button onClick={event => nextPage(event, "1")}>1</button></a>
                <a ><button onClick={event => nextPage(event, "2")}>2</button></a>
            </>

    }

    const checkDistinct = () => {
        var distinctCategory = [];
        for (var i = 0; i < data.length; i++) {
            distinctCategory.push(data[i].category);
        }


        setOperation({...operation,category:distinctCategory.filter((x, i, a) => a.indexOf(x) == i)});


    };
    const filterSelection = (category) => {

        setOperation({...operation,search:category});

    };
    const onSelect = () => {

        let text;
        let dataSort = [];
        let getValue = document.getElementById("sort").value;
        switch (getValue) {
            case "sortByLatest":

                setIsSort({
                    latest: true,
                    oldest: false,
                    highToLow: false,
                    lowToHigh: false
                })

                break;
            case "sortByOldest":

                setIsSort({
                    latest: false,
                    oldest: true,
                    highToLow: false,
                    lowToHigh: false
                })


                break;
            case "highToLow": {

                setIsSort({
                    latest: false,
                    oldest: false,
                    highToLow: true,
                    lowToHigh: false
                })


            }
                break;
            case "lowToHigh": {

                 
                setIsSort({
                    latest: false,
                    oldest: false,
                    highToLow: false,
                    lowToHigh: true
                })

            }
                break;
            case "Reset": {
                alert("Reset");
                setIsSort({
                    latest: false,
                    oldest: false,
                    highToLow: false,
                    lowToHigh: false
                })
                fetchHandler();

            }
                break;
            default:
                // setHighToLow(false); 
                // setLowToHigh(false); 
                setIsSort({
                    latest: false,
                    oldest: false,
                    highToLow: false,
                    lowToHigh: false
                })
                fetchHandler();

        }

    };

    const nextPage = (event, currentPage) => {

        setPagination({ ...pagination, default: currentPage });
        switch (currentPage) {
            case "1": {

                setPagination({
                    ...pagination,
                    startIndexInitisal: 0,
                    endIndexInitisal: 12
                });
                console.log(pagination.startIndexInitisal);
                break;
            }
            case "2": {

                setPagination({
                    ...pagination,
                    startIndexInitisal: pagination.startIndexInitisal + 12,
                    endIndexInitisal: pagination.endIndexInitisal + 12
                });
                break;
            }

            default:
                alert("Page End");
        }
    }


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
    }, [setState, data])


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
                                        <select id="sort" name="sort" className="btn" onChange={() => onSelect()} >
                                            <option value="sortByLatest">Sort By Latest </option>
                                            <option value="sortByOldest">Sort By Oldest</option>
                                            <option value="highToLow">Price: High to Low</option>
                                            <option value="lowToHigh">Price: Low to High</option>


                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className="aem-Grid aem-Grid--12 ">
                        <Filter categoryNames={categoryNames} category={operation.category} filterSelection={filterSelection}
                            categories={operation.category}
                            onFilterChange={handleFilterChange} />
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
                                <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10" style={{ margin: "20px 0px" }}>

                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                        <div className="filter">

                                            <FilterMenu categoryNames={categoryNames}
                                                categories={operation.category}
                                                onFilterChange={handleFilterChange} />
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                        <div className="filter">
                                            <img className="sort-icon" src={process.env.PUBLIC_URL + `/assets/icons/sort.png`} alt="profile icon" />
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

                                {/* <ProductsList products={state.products} /> */}

                            </div>
                            <div className="aem-Grid aem-Grid--12 d-flex justify-content-center">

                                <div className="pagination">


                                    <button
                                        onClick={goToPreviousPage}
                                        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                                    >
                                        <img src={process.env.PUBLIC_URL + `/assets/icons/chevron-right.svg`} className="rev-img" alt="pagination arrow" />
                                    </button>


                                    {getPaginationGroup().map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={changePage}
                                            className={`paginationItem ${currentPage === item ? 'active' : null}`}
                                        >
                                            <span>{item}</span>
                                        </button>
                                    ))}


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
