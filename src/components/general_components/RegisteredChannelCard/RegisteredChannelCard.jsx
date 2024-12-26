
  import styles from './RegisteredChannelCard.module.css';
  
  export default function RegisteredChannelCard({ channel }) {
    return (
      <div className={styles.card}>
        {/* Channel Logo */}
        <div className={styles.logo}>
          <img src={channel.logo} alt={`${channel.name} Logo`} className={styles.logoImg} />
        </div>
  
        {/* Channel Info */}
        <div className={styles.info}>
          <p className={styles.name}>{channel.name}</p>
          <p className={styles.email}>{channel.email}</p>
          <p className={styles.phone}>{channel.phone}</p>
          <p className={styles.enrollNumber}>Enroll: {channel.enrollNumber}</p>
          <p className={styles.dateAdded}>Added: {channel.dateAdded}</p>
        </div>
  
        {/* Action Buttons */}
        <div className={styles.actions}>
          <button className={styles.edit}>
            <i className="fa fa-edit"></i>
          </button>
          <button className={styles.delete}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
  