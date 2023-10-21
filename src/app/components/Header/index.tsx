import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Headerlink from '../HeaderLink';
import { SNSLink } from '@/shared/data';
import styles from './styles.css';
import ja from '@/shared/ja';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titletxt}>{ja.header.title}</h1>
            <Headerlink link={SNSLink}>
                <GitHubIcon/>
                <TwitterIcon/>
            </Headerlink>
        </header>
    );
}

export default Header;