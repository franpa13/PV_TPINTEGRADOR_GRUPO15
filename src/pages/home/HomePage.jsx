import { useSelector } from "react-redux";
import CardComponent from "../../components/ui/Card/Card";
import { Title } from "../../components/ui/Title";

import Icon from "../../components/ui/Icon";


export const HomePage = () => {


    const products = useSelector((state) => state.products.products);


    return (
        <section className="p-5 w-full flex flex-col gap-5 ">
            <Title className="text-2xl xl:text-3xl text-center text-green-700 mb-8" text="Todos los productos ">
                <Icon fontSize="large" variant="conteined" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </Icon>
            </Title>
            <div className="flex lg:justify-center justify-center items-center lg:items-start flex-wrap gap-3 gap-y-7  lg:gap-4 lg:gap-y-10">
                {products.length > 0 && products.map((prod) => {
                    return (
                        <CardComponent product={prod} key={prod.id}></CardComponent>
                    )
                })}
            </div>

        </section>
    )
}
