
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import style from "./nav.module.css";

import {
  Menu,
  MenuButton,
  MenuList,
  Text,
  Box,
  Portal,
  Flex,
} from "@chakra-ui/react";


const style1 = {
    color:"white",
    background:"black"
}

const activeStyle = {
    color:"black",
    background:"white"
}

const MainNavbar = () => {
  //const [isLazy, setIsLazy]= useState(false);

 //const [show, setShow]= useState(false) 

 

 //console.log(cartLength.length)


  return (
    <div>
   
      <div className={style.mainLower}>
        <div>
          <Menu>
            <MenuButton color="white">0-24 MONTHS</MenuButton>
            <Portal>
              <MenuList>
                <Box
                  p="40px"
                  bg="white"
                  shadow="md"
                  w="100%"
                  display="flex"
                  m="auto"
                  gap="10px"
                  paddingLeft="250px"
                  paddingRight="300px"
                >
                  <Box
                    bg="#f3f3f3"
                    color="black"
                    fontSize="14px"
                    textAlign="left"
                    paddingLeft="15px"
                    w="33%"
                    h="auto"
                    lineHeight="2"
                    borderRadius="10px"
                    paddingTop="10px"
                  >
                    <Text>CLOTHING</Text>
                    <Text>SHOES</Text>
                    <Text>ACCESSORIES</Text>
                    <Text>VIEW ALL</Text>
                    <hr />
                    <Text>LATEST ARRIVAL</Text>
                    <Text>THIS PAST WEEK</Text>
                    <Text>TOP DESIGNERS</Text>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <img
                        src="https://www.yoox.com/images/items/12/12857035vn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"
                        alt="Tshirt"
                      />
                      <Text>MARNI</Text>
                      <Text>US$ 381,00</Text>
                    </Box>
                    <Box>
                      <img
                        src="https://www.yoox.com/images/items/45/45684525ls_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"
                        alt="Tshirt"
                      />
                      <Text>EMPORIO</Text>
                      <Text>US$ 141,00</Text>
                    </Box>
                    <Box>
                      <img
                        src="https://www.yoox.com/images/items/12/12856467bm_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"
                        alt="Tshirt"
                      />
                      <Text>RICK OWENS</Text>
                      <Text>US$ 198,00</Text>
                    </Box>
                    <Box>
                      <img
                        src="https://www.yoox.com/images/items/17/17314395iw_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center"
                        alt="Tshirt"
                      />
                      <Text>DOLCE AND GABBANIA</Text>
                      <Text>US$ 565,00</Text>
                    </Box>
                  </Box>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </div>
        <div>
          <Menu>
            <MenuButton color="white">3-8 YEARS</MenuButton>
            <Portal>
              <MenuList>
                <Box
                  p="40px"
                  bg="white"
                  shadow="md"
                  display="flex"
                  m="auto"
                  w="100%"
                  gap="10px"
                  paddingLeft="420px"
                  paddingRight="300px"
                >
                  <Box
                    bg="#f3f3f3"
                    color="black"
                    fontSize="14px"
                    textAlign="left"
                    paddingLeft="15px"
                    w="33%"
                    h="auto"
                    lineHeight="2"
                    borderRadius="10px"
                    paddingTop="10px"
                    display="flex"
                    m="auto"
                  >
                    <Box>
                      <Text>ACNE STUDIOS</Text>
                      <Text>BALENCIAGA</Text>
                      <Text>BOTTEGAVENETA</Text>
                      <Text>BURBERRY</Text>
                      <hr />
                      <Text>CALVIN KLEIN</Text>
                      <Text>THIS PAST WEEK</Text>
                      <Text>GCDS</Text>
                    </Box>
                    <Box paddingLeft="20px">
                      <Text>LEVI'S</Text>
                      <Text>MARNI</Text>
                      <Text>NIKE</Text>
                      <Text>PRADA</Text>
                      <Text>SAINT LAUTENT</Text>
                      <Text>VERSACE</Text>
                      <Text>KENZO</Text>
                    </Box>
                  </Box>
                  <Box display="flex" gap="15px">
                    <Box>
                      <img
                        src="https://www.yoox.com/images/yoox80/banners/6825_2_Montblanc_M_Dropdown.jpg?634485886601286852"
                        alt="Tshirt"
                      />
                      <Text>MONTBLANC</Text>
                      <Text fontSize="12px">MAKE YOUR MOVE</Text>
                    </Box>
                    <Box>
                      <Box>
                        <img
                          src="https://www.yoox.com/images/yoox80/banners/6825_7_Balenciaga_M_Small.jpg?634485886601286852"
                          alt="1"
                        />
                        <Text>BALENCIAGA</Text>
                        <Text fontSize="12px">
                          ELEGANCE THAT BREAK THE RULES
                        </Text>
                      </Box>
                      <Box>
                        <img
                          src="https://www.yoox.com/images/yoox80/banners/6825_3_Prada_M_Small.jpg?634485886601286852"
                          alt="2"
                        />
                        <Text>PRADA</Text>
                        <Text fontSize="12px">
                          INNOVATIVE AND ICONIC PATTERNS
                        </Text>
                      </Box>
                    </Box>
                    <Box></Box>
                  </Box>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </div>
        <div>
          <Menu>
            <MenuButton color="white"> 9-16 YEARS</MenuButton>
            <Portal>
              <MenuList>
                <Box
                  display="flex"
                  gap="15px"
                  lineHeight="2"
                  paddingLeft="370px"
                  paddingRight="300px"
                >
                  <Box bg="#f3f3f3" fontSize="15px" paddingLeft="15px">
                    <h3>CATEGORIES</h3>
                    <h5> T-SHIRTS AND TOPS</h5>
                    <h5>SHIRTS</h5>
                    <h5>SWEATERS AND SWEATSHIRTS</h5>
                    <h5>PANTS</h5>
                    <h5>SHORTS AND BERMUDA</h5>
                    <h5>SWIMWARE</h5>
                    <h5>BLAZERS</h5>
                    <h5>JACKETS</h5>
                    <Link to="/clothing">
                      <h5>VIEW ALL</h5>
                    </Link>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">DESIGNERS</h3>
                    <h5>BALENCIAGA</h5>
                    <h5>DOLCE AND GABBANA</h5>
                    <h5>GIORGIO ARIMANI</h5>
                    <h5>GUCCI</h5>
                    <h5>MAISON MERGIELA</h5>
                    <h5>NEILBARRETT</h5>
                    <h5>PRADA</h5>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">MEN'S STYLE</h3>
                    <h5>OUR STYLISH 'S LIST</h5>
                    <h5>ENDLESS SUMMER</h5>
                    <h5>WONDERFUL WEDDING</h5>
                    <h5>GOLDEN HOUR</h5>
                    <h5>DARK SUMMER NIGNT</h5>
                    <h5>HI GUYZ</h5>
                  </Box>
                  <Box>
                    <img
                      src="https://www.yoox.com/images/yoox80/banners/6824_2_TrendGardenParty_Clothing_DD_M.jpg?634485886601286852"
                      alt="2"
                    />
                    <Text>GARDEN OF DREAMS</Text>
                    <Text fontSize="12px">A MAGICAL MIDSUMMER NIGHT</Text>
                  </Box>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </div>
        <div>
          <Menu>
            <MenuButton color="white">COLLABORATIONS</MenuButton>
            <Portal>
              <MenuList>
                <Box
                  display="flex"
                  gap="15px"
                  lineHeight="2"
                  paddingLeft="370px"
                  paddingRight="300px"
                >
                  <Box bg="#f3f3f3" fontSize="15px" paddingLeft="15px">
                    <h3>CATEGORIES</h3>
                    <h5>LOAFERS</h5>
                    <h5>LACED SHOES</h5>
                    <h5>SNEAKERS</h5>
                    <h5>SANDLES</h5>
                    <h5>BOOTS</h5>
                    <h5>ESPANDRILLES</h5>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">DESIGNERS</h3>
                    <h5>BALENCIAGA</h5>
                    <h5>NEIL BARRETT</h5>
                    <h5>GIORGIO ARIMANI</h5>
                    <h5>GUCCI</h5>
                    <h5>MAISON MERGIELA</h5>
                    <h5>VELENTO</h5>
                    <h5>PRADA</h5>
                    <h5>SANTOLI</h5>
                    <h5>rick owens</h5>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">MEN'S STYLE</h3>
                    <h5>OUR STYLISH 'S LIST</h5>
                    <h5>SNEAKER</h5>
                    <h5>RUNNING SHOES</h5>
                    <h5>SLIDES AND SANDLES</h5>
                    <h5>WONDERFUL WEDDINGS</h5>
                    <h5>HI GUYZ</h5>
                    <h5>LIGHT LOAFERS</h5>
                  </Box>
                  <Box>
                    <img
                      src="https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnSandals_DD_M.jpg?634485886601286852"
                      alt="2"
                    />
                    <Text>FUN IN THE SUN</Text>
                    <Text fontSize="12px">
                      FROM MINIMAL SANDALS TO COLOURFUL SLIDES: ALL THE SEASON
                      MUST-HAVES
                    </Text>
                  </Box>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </div>
        <div>
          <Menu>
            <MenuButton color="white">GIFT GUIDE</MenuButton>
            <Portal>
              <MenuList>
                <Box
                  display="flex"
                  gap="15px"
                  lineHeight="2"
                  paddingLeft="350px"
                  paddingRight="300px"
                >
                  <Box bg="#f3f3f3" fontSize="15px" paddingLeft="15px">
                    <h3>CATEGORIES</h3>
                    <h5>BAGPACKS AND FANNY PACKS</h5>
                    <h5>HANDBAGS</h5>
                    <h5>EYEWER</h5>
                    <h5>WATCHES</h5>
                    <h5>JEWELARY</h5>
                    <h5>WALLETS</h5>
                    <h5>BELTS</h5>
                    <h5>LUGGAGE</h5>
                    <h5>SCARVES AND FOULARDS</h5>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">DESIGNERS</h3>
                    <h5>BALENCIAGA</h5>
                    <h5>BOTTEGA VENETA</h5>
                    <h5>GIORGIO ARIMANI</h5>
                    <h5>GUCCI</h5>
                    <h5>DOLCE AND GABBANA</h5>
                    <h5>MAISON MERGIELA</h5>
                    <h5>VELENTO</h5>
                    <h5>VERSCE</h5>
                    <h5>SANTOLI</h5>
                    <h5>TOM FORD</h5>
                  </Box>
                  <Box fontSize="11px" paddingLeft="15px">
                    <h3 fontSize="15px">MEN'S STYLE</h3>
                    <h5>IN LOVE WITH SUNGLASSES</h5>
                    <h5>WONDERFUL WEDDINGS</h5>
                    <h5>HI GUYZ</h5>
                  </Box>
                  <Box>
                    <img
                      src="https://www.yoox.com/images/yoox80/banners/6824_2_TrendGardenParty_Acc_DD_M.jpg?634485886601286852"
                      alt="2"
                    />
                    <Text>THE ECCENTRIC TOUCH</Text>
                    <Text fontSize="12px">
                      OPT FOR INTERESTING AND ORIGINAL ACCESSORIES
                    </Text>
                  </Box>
                </Box>
              </MenuList>
            </Portal>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
