import { Link } from "react-router-dom";
import "./Navbar.css";
import { Icon, Search2Icon } from "@chakra-ui/icons";
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { FiHeart } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="navbar">

            <div className="top">
                <div className="empty"></div>
                <div className="top_left">
                    <p>United States</p>
                    <p>Customer Care</p>
                </div>

                <div className="top_middle">
                    <p>FREE STANDARD SHIPPING ON ORDERS OVER $200</p>
                </div>

                <div className="top_right">
                    <Link to="/register"><p>Register</p></Link>
                    <p onClick={onOpen}>Login</p>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>It’s great to see you again.</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Input placeholder="E-MAIL" />
                                <Input placeholder="PASSWORD" />
                                <Button onClick={onClose}>LOG IN</Button>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </div>
                <div className="empty"></div>
            </div>

            <div className="middle">
                <div className="empty"></div>
                <div className="middle_left">
                    <Link to="/">WOMEN</Link>
                    <Link to="/men">MEN</Link>
                    <Link to="/kids">KIDS</Link>
                    <Link to="/design+art">DESIGN+ART</Link>
                </div>

                <div className="middle_middle">
                    <img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="YOOX" />
                </div>

                <div className="middle_right">
                    <Search2Icon />
                    {/* onClick={onOpen}  */}
                    {/* modal insert */}
                    {/* <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalFooter>
                                <Input placeholder="Search..." />
                            </ModalFooter>
                        </ModalContent>
                    </Modal> */}
                    {/* modal end */}
                    <Icon as={FiHeart} />
                    <Icon as={MdShoppingCart} />
                </div>
                <div className="empty"></div>
            </div>

        </div>
    )
}

export default Navbar;