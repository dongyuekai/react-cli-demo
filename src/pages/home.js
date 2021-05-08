import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import tools from 'dyk-webpack-build-tools'
import { useTitle, useUpdate } from 'react-use'

export default () => {
  useEffect(() => {
    console.log('dyk--', tools.math.add(1, 3))
    console.log('dyk--', tools.string.join(1, 3))
    console.log('dyk--REACT_APP_URL_API---', process.env.REACT_APP_URL_API)
  }, [])
  const PCHome = () => {
    const update = useUpdate()
    useTitle('PCHome页面')
    return (
      <div>
        <div>Time: {Date.now()}</div>
        <button onClick={update}>Update</button>
      </div>
    )
  }
  const MobielHome = () => {
    return '我是MobieHome'
  }
  return (
    <div>
      <MediaQuery query='(min-device-width:1224px)'>
        <PCHome />
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <MobielHome />
      </MediaQuery>
    </div>
  )
}
