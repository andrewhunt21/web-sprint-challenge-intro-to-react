// Write your Character component here
import styled from "styled-components";

const CharacterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    opacity: 75%;
    width: 75%;
    margin: auto;
    margin-top: 25px;
`

const Character = ({ character }) => {

    // const [character, setCharacter] = useState(data)

    // useEffect (() => {
    //     setCharacter(character)
    // },[])

    return (
        <CharacterContainer>
            { character && <h2> {character.name} </h2> }
            { character && <p> Height: {character.height} </p>}
            { character && <p> Mass: {character.mass} </p>}
            { character && <p> Hair Color: {character.hair_color} </p>}
            { character && <p> Skin Color: {character.skin_color} </p>}
            { character && <p> Eye Color: {character.eye_color} </p>}
            { character && <p> Birth Year: {character.birth_year} </p>}
            { character && <p> Gender: {character.gender} </p>}
        </CharacterContainer>
    )
}

export default Character