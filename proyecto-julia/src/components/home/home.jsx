import ItemListContainer from "./ItemListContainer"
const Home = () => {
    const greeting = 'Bienvenido a la disquería'
    return(
        <div>
            <ItemListContainer greeting= {greeting}/>
        </div>
    )
}
export default Home