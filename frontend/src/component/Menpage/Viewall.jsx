import React, { useState } from 'react'
import "./Viewall.css"
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, VStack, Text, Image, HStack, Flex, Select, Button } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { AiFillCaretRight } from "react-icons/ai"
import { BsEye } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"





const Viewall = () => {


    const Viewdata = [
        {
            name: "ALONE",
            title: "Full-Length-T-shirt",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "VERSEL",
            title: "Full-Length-pant",
            OFFer: "25% OFF",
            price: "$1,223.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "23% OFF",
            price: "$1,111.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOROREAL",
            title: "Full-Length-Cap",
            OFFer: "30% OFF",
            price: "$1,333.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "VEMAL",
            title: "Full-Length-shirt",
            OFFer: "22% OFF",
            price: "$1,143.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ALLENSOLLY",
            title: "VALENTINO SHIRT",
            OFFer: "33% OFF",
            price: "$1,122.00",
            image: "https://www.yoox.com/images/items/17/17450038TR_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "TIGER",
            title: "Full-Length-Jacket",
            OFFer: "40% OFF",
            price: "$222.00",
            image: "https://www.yoox.com/images/items/17/17434499pq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center"
        },
        {
            name: "ALEXANDER MCQUEEN",
            title: "Bracelets",
            OFFer: "31% OFF",
            price: "$222.00",
            image: "https://www.yoox.com/images/items/17/17434499pq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center"
        }, {
            name: "ETORREDGF",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$222.00",
            image: "https://www.yoox.com/images/items/17/17434499pq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center"
        },
        {
            name: "ETORCAT",
            title: "Full-Length-shirt",
            OFFer: "29% OFF",
            price: "$1,7222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "OFF-WHITE",
            title: "Full-Length-T-shirt",
            OFFer: "29% OFF",
            price: "$1,1822.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "AMIRE",
            title: "Full-Length-Cap",
            OFFer: "29% OFF",
            price: "$1,8922.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,9722.00",
            OFFer: "19% OFF",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "69% OFF",
            price: "$1,002.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "89% OFF",
            price: "$1,9462.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "39% OFF",
            price: "$1,112.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "49% OFF",
            price: "$1,572.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,112.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "39% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "19% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "49% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            OFFer: "29% OFF",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        }, {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Cap",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390"
        },
        {
            name: "ETOR",
            title: "Full-Length-Jacket",
            price: "$1,222.00",
            image: "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390"
        },



    ]
    const [data, setData] = useState(Viewdata);
    let [page, setPage] = useState(1)
    let arr = new Array(5).fill(0)

    const handleSort = (e) => {
        // alert(e.target.value)
        switch (e.target.value) {
            case 'nhl': {
                setData([...data].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0;
                }))
            }
                break;

            case 'nlh': {
                setData([...data].sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    }
                    if (a.name > b.name) {
                        return -1
                    }
                    return 0;
                }))

            }

                break;

            default:
                break;
        }

    }

    return (


        <>

            <Box mb={10}>
                <Flex justifyContent="center">
                    <Image src='https://www.yoox.com/images/yoox80/banners/6825_1_Montblanc_WM_TOPna_sx.jpg?634485886601286852'></Image>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6966_4_8byooxFW22_TOPNA_ww.jpg?634485886601286852'></Image>
                </Flex>
            </Box>


            <HStack gap={"200px"} justifyContent="center" boxShadow="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" >
                <Box><Text fontWeight={"light"} fontSize="12px" color="gray">SAVE SEARCH</Text></Box>
                <Box><Text fontWeight={"light"} fontSize="12px">4000+ items</Text></Box>
                <Box>
                    <Select placeholder='Sort by Features' fontSize="12px" onChange={handleSort} border="none" >
                        <option value="nhl">Sort By Name: Ace To Dec</option>
                        <option value="nlh">Sort By Name: Dec to Ace</option>
                        <option value="phl">Sort By Price: High to Low</option>
                        <option value="plh">Sort By Price: Low to High</option>
                    </Select>
                </Box>



            </HStack>


            <Box display="flex" position="relative" ml={175}>
                <Box w="25%" position="sticky" top="0" left="0" h="fit-content">
                    <Accordion allowToggle>

                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                CATEGORIES

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='15px' />
                                            ) : (
                                                <AddIcon fontSize='15px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                SLEEVE STYLE

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                DESIGNERS

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do id="icons"
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                PRICE RANGE

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                SIZES

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                COLORS

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                PRINT

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                MATERIALS

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        <AccordionItem bgColor="#f5f5f5">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                SHOP BY CATEGORY

                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} backgroundColor="white">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. */}
                                        <VStack w="fit-content" >

                                            <Text fontSize={"16px"} fontWeight="light" display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" textAlign='left' display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text fontSize={"16px"} fontWeight="light" width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>




                    </Accordion>


                    <Box>
                        <Image src="https://www.yoox.com/images/yoox80/banners/6971_2_teleyoox_DM_ROWHK.png?634485886601286852" />


                    </Box>

                </Box>








                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" p={30} m="40px" gap="20px">
                    {
                        data.map((item) => {

                            return (
                                <div>
                                    <div id='image_box'>
                                        <img src={item.image} ></img>
                                        <Box display={"flex"} justifyContent="space-evenly" mb={3} >
                                            {/* borderBottom="1px solid gray" borderTop={5} */}
                                            <HStack gap={2}>
                                                <BsEye id='iconn' />
                                                <CiHeart id='iconn' />
                                            </HStack>
                                            <Flex id='new_text'> - NEW - </Flex>
                                        </Box>



                                        <h2 id='text_name'>{item.name}</h2>
                                        <h3 id='text_title'>{item.title}</h3>
                                        <h3 id='text_offer'>{item.OFFer}</h3>
                                        <h3 id='text_price'>{item.price}</h3>
                                    </div>

                                </div>
                            )
                        })

                    }

                </Box>
            </Box>

            <Box pt={"20px"} pb={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                {
                    arr.map((el, i) => {
                        return <Button key={i} onClick={() => { setPage(i + 1) }}>{i + 1}</Button>

                    })
                }
                <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Box>

        </>

    )



}

export default Viewall