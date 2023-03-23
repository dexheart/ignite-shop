import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useRouter } from 'next/router' 

export default function Product() {

    const {query} = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>

                
            </ImageContainer>


            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti dolorum, velit expedita eveniet dicta dolor dolores ut eaque dolorem quas reiciendis unde ea repellat adipisci rem illum? Odio, reiciendis.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}