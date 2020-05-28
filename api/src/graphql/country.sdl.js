export const schema = gql`
  type Country {
    id: String!
    name: String!
    currency: String!
    handedness: String!
    languages: [String!]!
  }

  type Query {
    getCountry(id: String!): Country!
  }
`
