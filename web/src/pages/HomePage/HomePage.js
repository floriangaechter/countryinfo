import { usePosition } from 'use-position'
import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'

const HomePage = () => {
  const { latitude, longitude } = usePosition(false)

  useEffect(() => {
    if (latitude && longitude) {
      navigate(routes.country({ id: `${longitude},${latitude}` }))
    }
  }, [latitude, longitude])

  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
      </code>
    </div>
  )
}

export default HomePage
