import React from 'react'
import { Text, View, Image } from 'react-native'

const SectionView = ({title, tenSuKien, ngayDienRa, diaDiem, thoiGian, hinhAnh}) => {
  return (
    <View>
        <Text>{title}</Text>
        <Text>{tenSuKien}</Text>
        <Text>{ngayDienRa}</Text>
        <Text>{diaDiem}</Text>
        <Text>{thoiGian}</Text>
        {/* <Image source = {hinhAnh} style = {{height: 300, width: 300}}></Image> */}
         {hinhAnh && (
        <Image
          source={hinhAnh}
          style={{ height: 200, width: 200, marginTop: 10, borderRadius: 10 }}
        />
      )}0
    </View>
  )
}

export default SectionView