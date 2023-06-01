import { Card, Image } from 'semantic-ui-react'
import "./DataItem.scss";

export default function DataItem({
    propDataItem,
    functionCallback
}) {
    const country = propDataItem;

    const GetItemDetail = () => {
        console.log(country.name.common);
        functionCallback(country.name.common);
    }

    return (
        <>
            <Card className='data-item' onClick={ GetItemDetail }>
                <Image src={ country.flags.png } wrapped ui={ false } />
                <Card.Content>
                    <Card.Header>{ country.name.common }</Card.Header>
                    <Card.Meta>
                        <span>{ country.name.official }</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </>
    );
}
