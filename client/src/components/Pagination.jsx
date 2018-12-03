import * as React from 'react'

// Creates numbered buttons based on the number of total pages:

const createButtons = (number) => {
  const buttons = []
  for(let i=0; i<number; i++){
    buttons.push(i+1)
  }
  return(buttons) 
}


export default function Pagination(props) {
  
  return (
    <nav>
      <ul className="pagination justify-content-center">
        { props.previous !== null &&
        <li className="page-item">
            <div className="page-link" onClick={() => props.handlePageChange(props.previous.page)}>
              <span>&laquo;</span>
            </div>
        </li>
        }
        { props.pages &&
         createButtons(props.pages).map(button =>
            <div className="page-link" onClick={() => props.handlePageChange(button)} key={button}>
              {button}
            </div>
          )
        }
        { props.next !== null &&
        <li className="page-item" onClick={() => props.handlePageChange(props.next.page)}>
            <div className="page-link">
              <span>&raquo;</span>
            </div>
        </li>
        }
      </ul>
    </nav>
  )
}
