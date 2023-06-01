import { Card, Dimmer, Loader } from 'semantic-ui-react'
import DataItem from '../DataItem/DataItem';
import "./DataList.scss";
import { useState } from "react";
import DataItemDetail from '../DataItemDetail/DataItemDetail';
import { GetCountries } from '../../Services/Service';

export default function DataList() {
    const [openModal, setOpenModal] = useState(false);
    const [countrySelected, setCountrySelected] = useState(null);
    const countries = GetCountries();

    const ShowDataItemDetail = (nameCountry) => {
        let countryObj = countries.result.find(country => country.name.common === nameCountry);
        console.log(countryObj);
        setCountrySelected(countryObj);
        setOpenModal(true);
    }

    const CloseDataItemDetail = () => {
        setCountrySelected(null);
        setOpenModal(false);
    }

    return (
        <>
            <div className="data-list">
                { countries.loading || !countries.result ?
                    (
                        <Dimmer active inverted>
                            <Loader inverted>Loading...</Loader>
                        </Dimmer>
                    )
                    :
                    (
                        <Card.Group>
                            {
                                countries.result.map((country, index) => (
                                    <DataItem propDataItem={ country } functionCallback={ ShowDataItemDetail } key={ index } />
                                ))
                            }
                        </Card.Group >
                    )
                }
            </div>

            { countrySelected && <DataItemDetail openModal={ openModal } country={ countrySelected } functionCallback={ CloseDataItemDetail } /> }

        </>
    );
}
