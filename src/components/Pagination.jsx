import React from 'react';
import '../App.css'

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalImages / imagesPerPage); index += 1) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item' onClick={() => paginate(number)}>
              {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
