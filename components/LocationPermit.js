import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const LocationPermit = () => {
  const [toggle, setToggle] = useState("email");

  const handleToggle = (next) => {
    setToggle(next);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 80 }}>Explore restaurant nearby</Text>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "red",
          borderRadius: 8,
        }}
      >
        {/* Email */}
        <TouchableOpacity
          style={{
            backgroundColor: toggle == 'email' ? 'red' : 'white',
            paddingHorizontal: 16,
            paddingVertical: 14,
            width: 150,
          }}
          onPress={()=> handleToggle('email')}
        >
          <Text>Email Address</Text>
        </TouchableOpacity>

        {/* Phone number */}
        <TouchableOpacity
          style={{
            backgroundColor: toggle == 'phone' ? 'red' : 'white',
            paddingHorizontal: 16,
            paddingVertical: 14,
            width: 150,
          }}
          onPress={()=> handleToggle('phone')}
        >
          <Text>Phone Number</Text>
        </TouchableOpacity>
      </View>

{toggle == 'email' ? (
   <Text>
        This is the email section
   </Text>
): (
    <Text>This is for Phone number</Text>
)}

    </View>
  );
};

export default LocationPermit;
