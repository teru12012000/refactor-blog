import { client } from "@/lib/client";
import { blogdata, contentType } from "@/shared/type";

export const getBlog=async()=>{
    const res=await client.get({
        endpoint:'blog',
        queries:{limit:100},
    });
    const contents=res.contents as blogdata[];
    return contents;
};

export const getBlogcontent=async(id:string)=>{
    const res=await client.get({
        endpoint:'blog',
        contentId:id,
    });
    const content=res as blogdata;
    const data:contentType={
        data:content,
        length:content.body.length,
    }
    return data;
};
export const getBlogkind=async(id:string)=>{
    const res=await client.get({
        endpoint:'blog',
        contentId:id,
    });
    const content=res as blogdata;
    const kind=content.kind2[0]
    return kind;
};

