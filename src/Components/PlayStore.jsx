import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import appStore from "../images/app-store-icon-png-14 1.png"
import playstoreimg from "../images/Rectangle 37.png"
const PlayStore = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} mt={8}>
        <Flex gap={8} alignItems={"center"}>
            <p className='appText'>Download Our App</p>
            <Image className='appsStore' src={playstoreimg} alt='google_play_store'/>
            <Image className='appsStore' src={appStore} alt='apple_app_store'/>
        </Flex>
    </Flex>
  )
}

export default PlayStore