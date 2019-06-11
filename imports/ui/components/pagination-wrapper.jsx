import React from 'react';
import PageButton from './page-button';

const PaginationWrapper = ({ current, pages, total, limit, setPageNumber }) => (
  <section className="pagination">
    <div className="container">
      { current > 1
        ? <a href={`/page/${current - 1}`} className="hide arrows" onClick={() => setPageNumber(current - 1)}>Prev</a>
        : null
      }
      {
        pages.map((text, index) => {
          if (text === '...') {
            return (
              <span key={index}>...</span>
            );
          }

          return (
            <PageButton
              isActive={current === text ? 1 : 0}
              setPageNumber={setPageNumber}
              text={text}
              key={index}
            />
          );
        })
      }
      { current < Math.ceil(total / limit)
        ? (<a href={`/page/${current + 1}`} className="hide arrows" onClick={() => setPageNumber(current + 1)}>Next</a>)
        : null
      }
    </div>
  </section>
);

PaginationWrapper.displayName = 'PaginationWrapper';

export default PaginationWrapper;
