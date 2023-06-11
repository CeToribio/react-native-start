import { Text } from "react-native";

function Saludar(props){
const{name} = props

    return(
        <Text>Hola {name}</Text>

    )
}

export default Saludar