
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <div className="parent_box">
      <Box w={"50%"} display={"flex"} flexDirection={"row-reverse"}>
        <Image className='logo' src = "https://d1xzdqg8s8ggsr.cloudfront.net/6471be58f62b696c387b2443/e1999618-7c61-40d2-bda5-5d8c0737f9e9_1685176468445559162?Expires=-62135596800&Signature=vvUuFKpqeXaMAnHn8nWoXyYLFweX0-3AX2nieDyYdDpTdnJqs4ZolMImb3-63X5FQs30I8V02Fj9-vd11T6ETfSQ5B0scMrNBGJaHfApeFTxfn0p3EtX66mNjBHrdZ~2JPQA0pF9kpxC7wHNkOYvHRZ9lGFUcym8AkPeNNMI5YHdqXfrsHHxgEC0r05jpzCiqpMe5sIlL5kc0VtPegQjfdOtVdCwT8Izea2S5AoR~LTXtj8ymYRcrBnGfy0wB6C41slfI5Y8W3pEZA18-JEWM~oYyQKaS1BfW4ag1YhicFLk2tyVD6Jtqj7~sPCVEqCNqc7keyp1bLrCK4ouGSKhIA__&Key-Pair-Id=K1P54FZWCHCL6J" alt = "logo"/>
      </Box>
      <Box w={"50%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} pl={8} pr={8}>
        <p className='header_text'>HOME</p>
        <p className='header_text'>+91 89715 80265</p>
      </Box>
    </div>
  )
}

export default Header