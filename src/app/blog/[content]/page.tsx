import { GetStaticPaths } from "next";
import PageContent from "./pageContent";
import styles from "./style.css";
import Header from "@/app/components/Header";
import BackLink from "./backLInk";

const Content = ({params}:{params:{content:string}}) => {
    return (
        <div>
            <Header/>
            <BackLink
                id={params.content}
            />
            <div className={styles.content}>
                <PageContent
                    page={params.content}
                />
            </div>
        </div>
    );
}

export default Content;