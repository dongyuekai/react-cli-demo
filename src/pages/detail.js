import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
const Detail = (props) => {
  useEffect(() => {
    // withRouter处理后 就可以在这里拿到match对象了
    console.log('match---', props.match)
    console.log('----Nihao ----')
  }, [])
  return <div>Detail</div>
}
export default withRouter(Detail)
