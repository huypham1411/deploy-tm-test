import React from 'react';
import {useDispatch} from 'react-redux';
import {pageGet} from '../../../action/paginate';
import '../../../styles/components/Product/Pagination.css';

const Pagination = ({maxPage})=>{
    const styles = {
        borderRadius: 10,
        backgroundColor: '#00DD75'
    }
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        // console.log(pathname);
        return pathname === "/";
    }
    const dispatch=useDispatch();
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(maxPage);i++){
        pageNumbers.push(i);
    }
    
    return(
        <nav className="pageNum">
            <ul className="pagination">
            {
                pageNumbers.map(number=>(
                    <li key={number} >
                        <a href={`#${number}`} onClick={()=>dispatch(pageGet(number))}>{number}</a>
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}

// a href={'?page='+ number}
export default Pagination;