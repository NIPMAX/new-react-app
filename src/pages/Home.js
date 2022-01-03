import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { ThemeContext } from '../contex/ThemeContext';


// styles
import '../styles/Home.css'

export default function Home() {
    

    const {data:articles , isPending, error} = useFetch('http://localhost:3000/articles');

    return (
    // <Container fluid>

    <div>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.insider.com/5ef54cb61918242cfb4ec653?width=1300&format=jpeg&auto=webp"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>

        
        <Container className="text-center">
            <br />
            <h2 className="text-center">Articles</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <CardGroup>

            {articles && articles.map((article) => (
                <Card key={article.id}>
                   <Card.Body>
                       {/* <img src="https://brandslogos.com/wp-content/uploads/images/react-logo-vector.svg"></img> */}
                       <h5>{article.title}</h5>
                       <p className='cardParagraph'>By {article.author}</p>
                       <Link to={`article/${article.id}`} className='btn-readmore'>Read more</Link>
                    </Card.Body>
                </Card>
            ))}

            </CardGroup>

                       
        </Container>

        </div>

 
    )

}


