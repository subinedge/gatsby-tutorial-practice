import React from 'react'
import SingleTourComponent from './singleTours'
import toursStyles from '../../css/items.module.css'

const ToursComponent = ({tours}) => {
  return (
    <section className={toursStyles.tours}>
      <h2>Our tours</h2>
      <div className={toursStyles.center}>
        {tours.map(({node}) => {
          return <SingleTourComponent key={node.key} tour={node}/>
        })}
      </div>
    </section>
  )
}

export default ToursComponent
