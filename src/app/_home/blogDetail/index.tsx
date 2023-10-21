import ja from "@/shared/ja";
import styles from "./style.css";

const BlogDetail = () => {
    return (
        <div className={styles.aboutPage}>
            <p>
                {ja.home.detail1}
                <br/>
                {ja.home.detail2}
            </p>
        </div>
    );
}

export default BlogDetail;