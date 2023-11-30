import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript'];

    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />)
        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(skills.length)
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />);

        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start learning button is not being rendered', () => {
        render(<Skills skills={skills} />);

        //queryBy asserts the presence of an element
        const startLearningBtn = screen.queryByRole('button', {
            name: 'Start learning'
        })
        expect(startLearningBtn).not.toBeInTheDocument()
    })

    test('Start learning button is eventually display', async () => {
        render(<Skills skills={skills} />);
        // screen.debug()
        //findBy returns a promise
        const startLearningBtn = await screen.findByRole('button', {
            name: 'Start learning'

        }, {
            timeout: 3000
        })

        // screen.debug()
        expect(startLearningBtn).toBeInTheDocument()
    })
})