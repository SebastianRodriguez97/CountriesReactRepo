import { Container } from 'semantic-ui-react';
import DataList from "../../Components/DataList";
import './Countries.scss';

export default function Countries() {
    return (
        <>
            <div className="countries">
                <Container>
                    <DataList />
                </Container>
            </div>
        </>
    );
}