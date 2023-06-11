import { TextInput, Button, View, Text } from "react-native";

function LoginForm(){
    return(
        
       <View>
        <TextInput placeholder="email"></TextInput>
        <TextInput placeholder="contraseña"> </TextInput>
        <Button title="ENVIAR" onPress={()=> console.log("enviado")}></Button>
       </View>


        
    )
}

export default LoginForm