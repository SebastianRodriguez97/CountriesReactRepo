import { Menu, Segment, Button } from 'semantic-ui-react'
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { RemoveCurrentUser } from '../../Services/Service';

export default function Header() {
    const navigate = useNavigate();

    const LogoutHandler = () => {
        RemoveCurrentUser();
        navigate(0);
    }

    return (
        <>
            <div className='header'>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item
                            name='Countries'
                            active={ true }
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Button primary onClick={ LogoutHandler }>Sign Out</Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        </>
    );
}