import Link from 'next/link';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { FC } from 'react';
import { IconButton } from '@mui/material';
import styles from './style.css';
type Props={
    link:string;
}
const Back:FC<Props> = ({link}) => {
    return (
        <div className={styles.content}>
            <Link href={link}>
                <IconButton>
                    <KeyboardBackspaceRoundedIcon sx={{fontSize:30,color:"black"}}/>
                </IconButton>
            </Link>
        </div>
    );
}

export default Back;