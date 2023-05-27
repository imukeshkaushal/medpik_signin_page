import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Flex
        w={"80%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} gap={16}>
          <Image
            height={"70px"}
            p={4}
            src="https://d1xzdqg8s8ggsr.cloudfront.net/6471be58f62b696c387b2443/e1999618-7c61-40d2-bda5-5d8c0737f9e9_1685176468445559162?Expires=-62135596800&Signature=vvUuFKpqeXaMAnHn8nWoXyYLFweX0-3AX2nieDyYdDpTdnJqs4ZolMImb3-63X5FQs30I8V02Fj9-vd11T6ETfSQ5B0scMrNBGJaHfApeFTxfn0p3EtX66mNjBHrdZ~2JPQA0pF9kpxC7wHNkOYvHRZ9lGFUcym8AkPeNNMI5YHdqXfrsHHxgEC0r05jpzCiqpMe5sIlL5kc0VtPegQjfdOtVdCwT8Izea2S5AoR~LTXtj8ymYRcrBnGfy0wB6C41slfI5Y8W3pEZA18-JEWM~oYyQKaS1BfW4ag1YhicFLk2tyVD6Jtqj7~sPCVEqCNqc7keyp1bLrCK4ouGSKhIA__&Key-Pair-Id=K1P54FZWCHCL6J"
            alt="imag logo"
          />
          <p className="copyright">© 2020 VAJRA, All Rights Reserved</p>
        </Flex>
        <p className="copyright">Terms & conditions | FAQ’s </p>
      </Flex>
    </footer>
  );
};

export default Footer;
