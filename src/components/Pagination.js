import React from 'react';

const Pagination = (key, paginate, number) => {

    return (
        <ul className="pagination">
            <li key={key} className="page-item text-white">
                <a onClick={(number) => paginate(number)} className="page-link">
                    <h5 className="text-dark">{number}</h5>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;