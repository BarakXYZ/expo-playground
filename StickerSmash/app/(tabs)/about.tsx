import { Text, View } from "react-native";
import { globalStyles } from '../styles';

export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.baseText, { flexDirection: 'row' }]}>
        <Text>נאדי </Text>
        <Text style={globalStyles.hotText}>באדי</Text>
      </Text>
    </View>
  );
}
