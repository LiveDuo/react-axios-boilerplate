import { gql } from 'apollo-boost'

let itemsSearch2 = gql`
{
	allPersons {
		id
		name
		birthYear
		eyeColor
		gender
		height
		mass
    skinColor
	}
}`

export const itemsSearch = itemsSearch2