import { getBlogcontent } from "@/api/getBlog";
import { client } from "@/lib/client";
import { blogdata, contentType } from "@/shared/type";
import { GetStaticPaths } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeBlock from "../codeBlock";
interface props{
    page:string;
}
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
    const data=await client.get({
        endpoint:"blog",
        queries:{
            limit:100
        }
    });
    
    const paths=data.contents.map((content:blogdata)=>(`/blog/${content.id}`));
    return {
        paths,
        fallback:false,
    }
}
const PageContent = async({page}:props) => {
    const blog:contentType=await getBlogcontent(page);
    return (
        <div>
            <div style={{boxShadow:"0px 0px 5px",}}>
                {[...Array(blog.length)].map((_,index:number)=>(
                    <div key={index} style={{margin:"30px"}}>
                        <div dangerouslySetInnerHTML={{__html:`${blog.data.body[index].body}`}}></div>
                        {blog.data.langage[index]?( 
                            <CodeBlock
                                language={blog.data.langage[index].langage[0]}
                                code={blog.data.code[index].code}
                            />
                        ):null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PageContent;