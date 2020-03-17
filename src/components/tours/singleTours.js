import React from 'react'
import {FaMap} from 'react-icons/fa'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

const SingleTourComponent = ({tour}) => {
  const {name, price, country, slug, days, images} = tour;
  console.log(tour);
  const mainImage = images[0].fluid;
  
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name}/>
        <Link to={`/tours/${slug}`} className={styles.link}>Details</Link>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}/>
            {country}
          </h4>
        </div>

        <div className={styles.details}>
          <h6>{days} days</h6>
          <h6>$ {price}</h6>
        </div>
      </div>
    </article>
  )
}

SingleTourComponent.propTypes = {
  tour:PropTypes.shape({
    name:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    days:PropTypes.number.isRequired,
    images:PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default SingleTourComponent
