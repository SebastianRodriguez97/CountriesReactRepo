import { useState, useEffect } from "react";
import { Header, Button, Image, Modal, List, Grid } from 'semantic-ui-react'
export default function DataItemDetail({
    openModal,
    country,
    functionCallback
}) {
    const [open, setOpen] = useState(false);
    if (country.capital == null) {
        country.capital = "-";
    }

    useEffect(() => {
        (async () => {
            setOpen(openModal);
        })();
    });

    return (
        <>
            <Modal
                onClose={ () => functionCallback() }
                open={ open }
            >
                <Modal.Header>{ country.name.common }</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src={ country.flags.png } wrapped />
                    <Modal.Description>
                        <Header>{ country.name.official }</Header>
                        <Grid doubling columns={ 2 }>
                            <Grid.Column>
                                <List relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Capital</List.Header>
                                            <List.Description as='a'>{ country.capital }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Region</List.Header>
                                            <List.Description as='a'>{ country.region }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Subregion</List.Header>
                                            <List.Description as='a'>{ country.subregion }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Area</List.Header>
                                            <List.Description as='a'>{ country.area }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Flag</List.Header>
                                            <List.Description as='a'>{ country.flag }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Population</List.Header>
                                            <List.Description as='a'>{ country.population }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Timezones</List.Header>
                                            <List.Description as='a'>{ country.timezones }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Continents</List.Header>
                                            <List.Description as='a'>{ country.continents }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Start Of Week</List.Header>
                                            <List.Description as='a'>{ country.startOfWeek }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={ () => functionCallback() }>Close</Button>
                </Modal.Actions>
            </Modal >
        </>
    );
}
