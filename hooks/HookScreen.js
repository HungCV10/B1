import React, { useEffect, useState } from 'react'
import { Button, View, Text } from 'react-native'

const HookScreen = () => {
    // useState: quản lý trạng thái (lưu trữ trạng thái của ứng dụng)
    const [count, setCount] = useState(0)
    // khởi tạo biến đếm, bắt đầu từ 0

    const [check, setCheck] = useState(false);

    // useEffect: sử dụng khi có thay đổi, cập nhật dữ liệu, api
    // không có dependency => chạy mỗi lần render
    useEffect(()=>{
        console.log("chạy sau mỗi lần render")
    })
    // có dependency là mảng rỗng => chạy 1 lần khi component mount
    useEffect(()=>{
        console.log("chạy MỘT LẦN khi component mount")
    },[])

    // có dependency là [count] => chạy khi count thay đổi
    useEffect(()=>{
        console.log("số đã thay đổi thành ", count)
    },[count])


  return (
    <View style={{marginTop: 100}}>
        <Text style = {{fontSize: 30}}>Số lần bấm: {count}</Text>
        <Button title='Tăng Count' onPress={()=>setCount(count +1)}></Button>

        <Button title='Check' onPress={()=> setCheck(!check)}></Button>
    </View>
  )
}

export default HookScreen