import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageGet } from '../../../action/paginate';
import '../../../styles/components/Product/Pagination.css';

const Pagination = ({ maxPage }) => {
    const [pageActive, setPageActive] = useState(1);
    console.log(pageActive)
    // const styles = {
    //     borderRadius: 10,
    //     backgroundColor: '#00DD75'
    // }
    // const checkActive = (match, location) => {
    //     //some additional logic to verify you are in the home URI
    //     if (!location) return false;
    //     const { pathname } = location;
    //     // console.log(pathname);
    //     return pathname === "/";
    // }
    const dispatch = useDispatch();
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(maxPage); i++) {
        pageNumbers.push(i);
    }

    const paging = pageNumbers.map((number, index) => (
        <li key={number} className={number===pageActive ? 'Pactive' : ''} onClick={() => {
                setPageActive(index+1)
                dispatch(pageGet(number))
            }}>{number}
        </li>
    ))
console.log(paging)
    return (
        <nav className="pageNum">
            <ul className="pagination">
                {
                    paging
                }
            </ul>
        </nav>
    )
}

// a href={'?page='+ number}
export default Pagination;