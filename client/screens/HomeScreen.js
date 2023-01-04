import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// import client from '../sanity'

import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == 'featured' ]{
  //         ...,
  //         restaurents[]->{
  //           ...,
  //           dishes[]->
  //         }
  //       }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])
  // console.log(featuredCategories)
  return (
    <SafeAreaView className="bg-white pt-5">
      {/*header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now !</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"></UserIcon>
      </View>
      {/*search box*/}
      <View className="flex-row mx-4 pb-2 items-center space-x-2 ">
        <View className="flex-row flex-1 bg-gray-200 space-x-2">
          <MagnifyingGlassIcon color="#00CCBB" size={26} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsHorizontalIcon
          color={'#00CCBB'}
        ></AdjustmentsHorizontalIcon>
      </View>
      {/*search box*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/*categories*/}
        <Categories></Categories>

        {/*featured rows*/}

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/*tasty Discounts*/}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        {/*offers near you*/}
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support your local Restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
