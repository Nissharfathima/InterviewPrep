import { useState } from 'react';
import './Pagination.css';
const Pagination = ({ itemsPerPage, totalItems, paginate}) => {
    const pageNumber = [];
    const [currentPage, setCurrentPage] = useState(1);
    for(let i=1; i <=Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumber.push(i);
    }
    const handleClick = (num) => {
        setCurrentPage(num);
        paginate(num);
    }
    return (
        <div className="paginationContainer">
            <ul className="pagination" >
                {pageNumber.map(number => 
                        <li key={number} className={currentPage == number ? 'active' : '' } onClick={() => handleClick(number)}>{number}</li>
                )}
            </ul>
       </div>
    )
}

export default Pagination;