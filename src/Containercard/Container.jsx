import Button from "../Button/Button";
import "./ContainerCard.css"

const ContainerCard = ({imagem, titulo, texto, classe}) => {
    return(
        <article className={classe}>
        <img src={imagem} alt="" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button nomeBotao="CLAIM YOUR FREE TRIAL" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
    )
}

export default ContainerCard;