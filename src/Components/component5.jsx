import { useContext } from 'react'
import AppContext  from '../Hook/AppContext'


const Component5 = () => {
  const { user } = useContext(AppContext)

    return (
      <>
        <h1>Component5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    )
  }
export default Component5

 

