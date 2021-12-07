import { screen, render } from '@testing-library/react';
import Controls from './Controls.jsx';

it('Should render a dropdown and radio button', async() => {
    const abilities = ['trace', 'klutz', 'damp'];
    const { container }= render(<Controls abilities={abilities} selectedAbility='damp' sortPokemon='asc' />);
    const dropDown = await screen.findByText(/Filter By Ability/i)
    expect(dropDown).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})