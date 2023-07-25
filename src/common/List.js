import React from 'react'

export default function List(props) {
  return (
    <div className="list">
            <h4>{props.expense_for}</h4>
            <p>{props.expense_amt} &#8377;</p>
          </div>
  )
}
