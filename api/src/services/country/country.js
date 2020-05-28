import fetch from 'node-fetch'

import CountryInfo from './countryInfo'

export const getCountry = async ({ id }) => {
  const countryCode = id.match(/^[a-z]{2}$/i)

  let country

  if (!countryCode) {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?types=country&access_token=${process.env.MAPBOX_API_KEY}`
    )
    const json = await response.json()
    id = json.features[0].properties.short_code
  }

  country = CountryInfo.find((country) => country.id === id)

  if (!country) {
    return new Error(`No country found.`)
  }

  return { ...country }
}
