import { getBlog } from "@/api/getBlog";
import { blogdata, titledata } from "@/shared/type";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./style.css";
import { GetStaticPaths } from "next";
import { client } from "@/lib/client";
interface props{
    page:string;
}
export const getStaticPaths:GetStaticPaths=async()=>{
    const res= await client.get({
        endpoint:"blog",
        queries:{
            limit:100,
        }
    });
    const contents:blogdata[]=res.contents;
    const blogtitle:titledata[]=contents.map((item:blogdata)=>({kind1:item.kind[0],kind2:item.kind2[0]} as titledata));
    const notDuplication:titledata[]=Array.from(
        new Map(blogtitle.map(item=>[item.kind1,item])).values()
    )
    const paths=notDuplication.map((item:titledata)=>({params:{id:item.kind2}}));
    return {
        paths: paths,
        fallback:false
    };
}
const MenuList = async({page}:props) => {
    const blog:blogdata[]=await getBlog();
    const pageData:blogdata[]=blog.filter((item:blogdata)=>item.kind2[0]===page);
    console.log(page);
    pageData.sort((x,y)=>{
        const dateA=new Date(x.createdAt);
        const dateB=new Date(y.createdAt);
        return dateA>dateB?1:-1;
    })
    return (
        <main>
            <h2 className={styles.aboutPage}>{pageData[0].kind[0] as string}</h2>
            <div className={styles.containar}>
                <ol className={styles.numberlist}>
                    {pageData.map((item:blogdata,index:number)=>(
                        <li key={index}>
                            <Link 
                                href={`/blog/${item.id}`}
                            >
                                <Button 
                                    variant="text" 
                                    sx={{
                                        fontSize:15,
                                        textAlign:"left"
                                    }}
                                >
                                    {item.title}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    );
}

export default MenuList;