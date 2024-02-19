import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Getstarted = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 20, }}>Get started</Text>
      <Text>Sign up today and start placing order</Text>
      <View style={{
        backgroundColor: "white",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "red",
        borderRadius: 8,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingHorizontal: 16,
            paddingVertical: 14,
            width: 150,

          }}
        >
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
            paddingVertical: 14,
            width: 150,
            backgroundColor: "red"
          }}
        >
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 70,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: 400,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('LocationPermit')}
      >            
        {/* Button login */}
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Getstarted;