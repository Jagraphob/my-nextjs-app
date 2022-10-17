import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

type Props = {

}

const Home: NextPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <div className='content'>
                Wolf of Brandon Street
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <div className='content'>
                Nothing yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

