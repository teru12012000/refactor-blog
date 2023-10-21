import { getBlogkind } from "@/api/getBlog";
import Back from "@/app/components/back";
interface props{
    id:string;
}
const BackLink = async({id}:props) => {
    const kind:string=await getBlogkind(id);
    return (
        <Back
            link={`/kind/${kind}`}
        />
    );
}

export default BackLink;