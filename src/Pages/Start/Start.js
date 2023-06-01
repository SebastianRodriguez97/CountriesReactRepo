import { Container, Card } from 'semantic-ui-react';
import Login from "../../Components/Login";
import './Start.scss';

export default function Start({ setUserAuth }) {
    return (
        <>
            <div className='start'>
                <Container textAlign='left'>
                    <Card>
                        <Card.Content description={ <Login setUserAuth={ setUserAuth } /> } />
                    </Card>
                </Container>
            </div>

        </>
    );
}