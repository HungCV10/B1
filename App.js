import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WrapperScreen from './screens/WrapperScreen';
import HeaderScreen from './screens/HeaderScreen';
import SectionView from './screens/SectionView';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionView
      title="tết dương lịch"
      tenSuKien="Bắn pháo hoa"
      ngayDienRa="1/7/2025"
      diaDiem="Hồ Chí Minh"
      

     ></SectionView>

      <SectionView
      title="chung kết"
      tenSuKien="Việt Nam vs Thái Lan"
      ngayDienRa="23/10/2025"
      diaDiem="Sân vận động Mỹ Đình"
      hinhAnh={require('./assets/favicon.png')}
     ></SectionView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
