import ItemListContainer from "../itemListContainer/itemListContainer"

const Home = () => {
    const greeting = 'Bienvenido a la disquería'
    return(
        <div>
            <ItemListContainer greeting={greeting}/>
        </div>
    )
}
export default Home