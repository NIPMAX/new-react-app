import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from "../hooks/useFetch"

export default function About() {

    const {data: movies , isPending, error} = useFetch('http://localhost:3000/articles')

    return (
        <Container>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>

            {movies && movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td className='cardParagraph'>By {movie.author}</td>               
                </tr>
            ))}

            </tbody>
            </Table>
      
        </Container>
    )
}
