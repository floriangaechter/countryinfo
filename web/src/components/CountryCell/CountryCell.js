export const QUERY = gql`
  query($id: String!) {
    country: getCountry(id: $id) {
      id
      name
      currency
      handedness
      languages
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div>Error: {error.message.replace('GraphQL error: ', '')}</div>
)

export const Success = ({ country }) => {
  return JSON.stringify(country)
}
