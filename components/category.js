import styles from '../styles/Category.module.css'
import Card from "./Card"

const Category = ({data, selected, selectCard}) => {
  return (
    <>
      <h1 className={styles.title}>
        {data.title}
      </h1>
      <div className={styles.grid}>
      	{data.items.map((item, index) => <Card selectCard={selectCard} selected={selected === item.id} id={data.id} data={item} key={index} />)}
      </div>
    </>
  )
}

export default Category
