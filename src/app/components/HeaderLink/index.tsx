import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./style.css";
import { link } from "@/shared/type";
type Props={
    link:link[];
    children:ReactNode[];
}

const Headerlink:FC<Props> = ({link,children}) => {
    return (
        <div>
            {link.map((item,index)=>(
                <div key={index} className={styles.li}>
                    <Link href={item.link} className={styles.link}>
                        {children[index]}<br/>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Headerlink;