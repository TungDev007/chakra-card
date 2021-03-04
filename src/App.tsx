import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  Avatar,
  Image,
  IconButton,
  useMediaQuery
} from '@chakra-ui/react';
import UserImg from "./images/user.png"
import StarActive from "./images/star-active.png"
import Star from "./images/star.png"
import Heart from "./images/not-active.png"
import HeartActive from "./images/active.png"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
})

interface UserInfo {
  name: string;
  title: string;
  city: string;
  country: string;
  profileViews: number;
  websiteViews: number;
  rating: number;
}

const developerInfo: UserInfo = {
  name: 'Bernie Kenth Pramio',
  title: 'Software Architect - Web and Cloud',
  city: 'Baroy, Lano Del Norte',
  country: 'Philippines',
  profileViews: 1234,
  websiteViews: 5678,
  rating: 5,
}

const App: React.FC = () => {
  const [like, setLike] = useState<boolean>(false)
  
  const toggleImage = () => {
    setLike(!like)
  }

  const [isLargerThan420] = useMediaQuery("(min-width: 420px)")

  const renderRating = (rating: number) => {
    let Rating = []

    for (let i = 1; i <= 5; i++) {
      Rating.push(<Image src={i <= rating ? StarActive : Star} />)
    }
    return Rating
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex padding={3} justifyContent="center" alignItems="center" minH="100vh">
        <Box maxW="sm" minW={isLargerThan420 ? 420 : 375} border="1px solid #9b9b9b" borderRadius={8} overflow="hidden">            
          <Flex paddingX={8} paddingY={6} backgroundColor="#EFEFEF" alignItems="center">
            <Heading as="h5" fontSize="x-large" fontWeight={500} color="#4a4a4a">Developer Profile</Heading>
            <Spacer />
            <IconButton                
              aria-label="Like Profile"
              icon={<Image src={ like ? HeartActive : Heart} w={30} />}
              onClick={() => toggleImage()}
            />                         
          </Flex>
          <Box textAlign="center" fontSize="xl" paddingY={10} borderTop="1px solid #9b9b9b">
            <Avatar size="2xl" name="Segun Adebayo" src={UserImg} marginBottom={4}/>
            <Heading as="h5" size="lg" color="#3a4d58">{developerInfo.name}</Heading>
            <Text fontSize={15}>{developerInfo.title}</Text>
            <Text fontSize={15}>{developerInfo.city}, {developerInfo.country}</Text>
          </Box>
          <Flex paddingX={8} paddingY={6} borderTop="1px solid #9b9b9b">
            <Box fontSize="xl" textAlign="center">
              <Heading as="h6" size="md" color="#555555" marginTop={1}>{developerInfo.profileViews}</Heading>
              <Text fontSize={13} color="#a1a1a1">Profile Views</Text>
            </Box>
            <Spacer />
            <Box fontSize="xl" textAlign="center">
              <Heading as="h6" size="md" color="#555555" marginTop={1}>{developerInfo.websiteViews}</Heading>
              <Text fontSize={13} color="#a1a1a1">Website Views</Text>
            </Box>
            <Spacer />
            <Box fontSize="xl" textAlign="center">
              <Flex justifyContent="center" marginTop={1}>
                {renderRating(developerInfo.rating)}                
              </Flex>
              <Text fontSize={13} color="#a1a1a1" marginTop={2}>Avg. Ragting</Text>
            </Box>              
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
