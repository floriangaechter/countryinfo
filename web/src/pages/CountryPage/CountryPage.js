import CountryCell from 'src/components/CountryCell'

const CountryPage = ({ id }) => {
  return (
    <div>
      <h1>CountryPage</h1>
      <p>Find me in ./web/src/pages/CountryPage/CountryPage.js</p>
      <CountryCell id={id} />
    </div>
  )
}

export default CountryPage
