import Header from "@/app/components/Header";
import MenuList from "./menuList";
import Back from "@/app/components/back";

const MenuPage = ({ params }: { params: { page: string }}) => {
    return (
        <div>
            <Header/>
            <Back
                link={`/`}
            />
            <MenuList
                page={params.page}
            />
        </div>
    );
}

export default MenuPage;