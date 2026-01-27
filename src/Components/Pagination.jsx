import React from 'react'

const Pagination = ({page, prev, next, MoveToTop, BackToHome}) => {
  return (
    <div className="pagination">
        <button onClick={BackToHome}>First Page</button>
        <button onClick={prev}>prev</button>
        <p>{page}</p>
        <button onClick={next}>next</button>
        <button onClick={MoveToTop}>Move to Top</button>
    </div>
  )
}

export default Pagination
