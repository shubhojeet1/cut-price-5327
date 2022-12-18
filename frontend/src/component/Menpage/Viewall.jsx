import React from 'react'
import "./Viewall.css"
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, VStack, Text,Image } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { AiFillCaretRight } from "react-icons/ai"




const Viewall = () => {

    const Viewdata = [
        {
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



    return (

        <>
            <Box display="flex" position="relative" ml={175}>
                <Box w="20%" position="sticky" top="0" left="0" h="fit-content">
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
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

                                            <Text display={"flex"} gap={"2px"} width={"200px"} > <AiFillCaretRight id='icons' /> Acceceserry</Text>
                                            <Text display={"flex"} width={"200px"} justifyContent="left"> <AiFillCaretRight id="icons" /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w="200px" > <AiFillCaretRight id="icons" /> Activewere</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Belts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"} > <AiFillCaretRight id="icons" /> Coats & jackets</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Dining</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Eyewear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Footwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Handbags</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jeans and Denim</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> jewelry</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Jumpsuits and Overalls</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Luggage</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Pants</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Shirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Small Leather Goods</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Suits and Sweatshirts</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> T-Shirt and Tops</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Underwear</Text>
                                            <Text width={"fit-content"} display={"flex"} justifyContent="left" w={"200px"}  > <AiFillCaretRight id='icons' /> Watches</Text>
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>


                        

                    </Accordion>


                     <Box>
                        <Image src="https://www.yoox.com/images/yoox80/banners/6971_2_teleyoox_DM_ROWHK.png?634485886601286852"/>


                        </Box>                   

                </Box>








                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" p={30} m="40px">
                    {
                    Viewdata.map((item) => {

                        return(
                            <div>
                                <div>
                                    <img src={item.image}></img>
                                    <h2 id='text'>{item.name}</h2>
                                    <h3 id='text'>{item.title}</h3>
                                    <h3 id='text'>{item.price}</h3>
                                </div>

                            </div>
                        )
                    })

                    }

                </Box>
            </Box>


        </>

    )



}

export default Viewall