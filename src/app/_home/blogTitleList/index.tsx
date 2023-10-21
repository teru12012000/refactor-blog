import { getBlog } from "@/api/getBlog";
import { client } from "@/lib/client";
import link from "@/shared/link";
import { blogdata,titledata } from "@/shared/type";
import { Button } from "@mui/material";
import { GetStaticPaths } from "next";
import Link from "next/link";
import styles from "./style.css";
const BlogTitleList = async() => {
    const blog:blogdata[]=await getBlog();
    const blogtitle:titledata[]=blog.map((item:blogdata)=>({kind1:item.kind[0],kind2:item.kind2[0]} as titledata));
    const notDuplication:titledata[]=Array.from(
        new Map(blogtitle.map(item=>[item.kind1,item])).values()
    )
    return (
        <div className={styles.containar}>
            <ol>
                {notDuplication.map((item:titledata,index)=>(
                    <li key={index}>
                        <Link href={`${link.kind}/${item.kind2}`}>
                            <Button variant="text">
                                {item.kind1}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default BlogTitleList;