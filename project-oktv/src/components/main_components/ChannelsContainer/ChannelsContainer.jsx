import styles from './ChannelsContainer.module.css';
import 'bootstrap';

//* Import the RegisteredChannelCard component:
import RegisteredChannelCard from '../../general_components/RegisteredChannelCard/RegisteredChannelCard';

export default function ChannelsContainer({ channels }) {
    return (
      <div className={styles.container}>
        {channels.map((channel) => (
          <RegisteredChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    );
  }

