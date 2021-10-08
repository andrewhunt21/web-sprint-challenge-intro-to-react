import Character from "./Character";

const Characters = ({ characters }) => {
    return (
        <>
            {characters.map((character) => (
                <Character character={character}/>
            ))}
        </>
    )
}

export default Characters