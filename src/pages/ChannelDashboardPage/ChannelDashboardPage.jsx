
import styles from './ChannelDashboardPage.module.css';
import 'bootstrap'

//* Import the ChannelsContainer component:
import ChannelsContainer from '../../components/main_components/ChannelsContainer/ChannelsContainer';

//* Import the SidebarMenu component:
import SidebarMenu from '../../components/general_components/SidebarMenu/SidebarMenu';

const channelsData = [
    {
        id: 1,
        name: 'BBC News',
        email: 'bbc@example.com',
        phone: '1234567890',
        enrollNumber: '12345',
        dateAdded: '08-Dec-2021',
        logo: 'https://via.placeholder.com/50',
    },
    {
        id: 2,
        name: 'HBO',
        email: 'hbo@example.com',
        phone: '1234567890',
        enrollNumber: '67890',
        dateAdded: '08-Dec-2021',
        logo: 'https://via.placeholder.com/50',
    },

    {
        id: 3,
        name: 'HBO',
        email: 'hbo@example.com',
        phone: '1234567890',
        enrollNumber: '67890',
        dateAdded: '08-Dec-2021',
        logo: 'https://via.placeholder.com/50',
    },

];

export default function ChannelsPage({ children}) {
    return( 

        <div className={styles.parentBox}>
            <SidebarMenu/>
            <ChannelsContainer channels={channelsData}/>
        </div>
    )
}

