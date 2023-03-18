import React, { useState } from 'react'
import {
  Box,
  Input,
  InputGroup,
  IconButton,
  List,
  ListItem,
  Image,
  Button,
  Text
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

import placeholder from '../../../public/placeholder.png'

// rewrite to api
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

interface SearchBarProps {
  setSelectPosition: any
}

const SearchBar = ({ setSelectPosition } : SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const [placesList, setPlacesList] = useState<Array<any>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false)

  // Search
  // fix to api
  const getPlaceData = async () => {
    setIsLoading(true)
    const params = {
      q: searchText,
      format: 'json',
      addressdetails: '1',
      polygon_geojson: '0'
    }
    const queryString = new URLSearchParams(params).toString()
    const requestOptions = {
      method: 'GET'
    }
    await fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then(async (response) => await response.text())
      .then((result) => {
        setPlacesList(JSON.parse(result))
        setIsLoading(false)
        console.log(JSON.parse(result))
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`)
      })
  }

  const resetSearchBar = () => {
    setSearchText('')
    setPlacesList([])
  }

  const formatText = (text : string) => {
    const chunks = text.match(/.{1,50}(?:\s|$)/g)
    
    return (
      <>
        {
          chunks?.map((chunkText) => (
            <>
              {chunkText}
              <br />
            </>
          ))
        }
      </>
    )
  }

  return (
    <Box display={'flex'} flexDir={'column'}>
      <Box>
        <InputGroup size={'sm'} background={'white'}>
          <Input 
            placeholder={'Search'} 
            value={searchText} 
            onChange={(event : any) => {
              setSearchText(event.target.value)
              setIsSearchClicked(false)
            }}
          />
          <IconButton 
            aria-label={'Search'} 
            icon={<AiOutlineSearch />} 
            onClick={() => {
              getPlaceData()
              setIsSearchClicked(true)
            }}
          />
        </InputGroup>
      </Box>
      <Box>
        <List>
          {
            isLoading ? 
            <Button
              w={'100%'} 
              background={'white'} 
              display={'flex'} 
              alignItems={'center'}
              h={'45px'}
              isLoading={isLoading}
            />
            :
            placesList.length > 0 && searchText.length > 0
            ?
            placesList.map((place, index) => (
              <ListItem key={place + index} rounded={0} background={'white'} h={'100%'} py={2}>
                <Button
                  w={'100%'} 
                  background={'white'} 
                  display={'flex'} 
                  justifyContent={'flex-start'} 
                  alignItems={'center'}
                  h={'100%'}
                  onClick={() => {
                    setSelectPosition(place)
                    resetSearchBar()
                  }}
                >
                  <Image src={placeholder} w={'28px'} h={'28px'}/>
                  <Text textAlign={'left'}>
                    {formatText(place?.display_name)}
                  </Text>
                </Button>
              </ListItem>
            ))
            :
            searchText.length > 0 && placesList.length === 0 && isSearchClicked && (
            <Button
                  w={'100%'}
                  background={'white'}
                  display={'flex'}
                  alignItems={'center'}
                  h={'45px'}
            >
              <Text>
                Not Found
              </Text>
            </Button>)
          }
        </List>
      </Box>
    </Box>
  )
}

export default SearchBar