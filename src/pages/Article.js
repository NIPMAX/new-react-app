import { useParams ,useHistory} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { Container } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import '../styles/Article.css'



export default function Article() {

    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const history = useHistory()
    const {data:article , isPending, error} = useFetch(url)

    useEffect(() => {
        if(error){
            //redirect
            setTimeout(() =>{
                history.push('/')
            },3000)
        }
    }, [error, history])

    return (
        <div>
        <Container>
            <br />
            {isPending && <div>Loading...</div>}
            {error && 
                <Alert className="fade alert alert-danger show text-center">
                    {error} <Alert.Link href="/">Go back</Alert.Link> auto redirecting to Home page
                </Alert>
            }

            {article && 
             <div>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="reactLogo"></img>
                 <h2>{article.title}</h2>
                 <br />
                 <p>{article.body}</p>
                 <p className="author">-(by {article.author})</p>
             </div>
             }

            {!error &&  
                <Link to="/"><Button variant="outline-secondary">Back to home</Button>{' '}</Link>
            }
           

        </Container>
        </div>
    )
}
