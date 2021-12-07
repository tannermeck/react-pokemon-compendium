import { render } from '@testing-library/react';
import PokemonList from './PokemonList.jsx';

it('should render a PokemonList component', () => {
    const pokemon = [{_id: "5ff4fb7cd89993a89cc6544f", pokemon: 'butterfree', url_image: 'www.pokemon.com', type_1: 'bug', type_2: 'flying', ability_1: 'compound-eyes', ability_2: 'NA', defense: 50 }]
    const { container } = render(<PokemonList pokemon={pokemon} />)
    expect(container).toMatchSnapshot(); 
});