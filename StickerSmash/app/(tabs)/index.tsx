import { Link } from "expo-router";
import { Text, View } from "react-native";
import { globalStyles } from '../styles';

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.baseText}>
        I LOVE NAGI
      </Text>

      // Keeping for reference for how to link
      {/* <Link href={"/about"} style={globalStyles.hyperLinkButton}> */}
      {/*   Go to about page &lt;3 */}
      {/* </Link> */}

    </View>
  );
}
