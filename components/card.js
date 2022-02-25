import { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = ({data, id, selected, selectCard}) => {
  return (
    <div className={selected ? styles.selected : styles.unselected}>
      <div className={styles.title}>
        <h3>
          {data.title}
        </h3>
      </div>
      <div className={styles.imagewrap}>
      	<Image
					src={data.photoUrL}
					alt={data.id}
					width={384}
					height={568}
				/>
      </div>
      <button className={styles.button} onClick={() => selectCard(id, data.id)}>
      	SELECT
      </button>
    </div>
  )
}

export default Card
