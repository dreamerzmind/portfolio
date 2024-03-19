import { Link as RouterLink } from "react-router-dom";
import { Link, Flex, Box, Spacer } from "@chakra-ui/react";
import Plant4 from "../assets/plant-logo.jpeg";
import { useState } from "react";

export default function Nav(props) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Box bg="black" color="grey" mb="5">
      <nav>
        <Flex justifyContent="space-between">
          <Flex grow={1}>
            <Link p={3} as={RouterLink} to="/">
              Home
            </Link>
            <br />
            <Link p={3} as={RouterLink} to="/about">
              About
            </Link>
            <br />
            <Link p={3} as={RouterLink} to="/services">
              Shop
            </Link>
            <Link p={3} as={RouterLink} to="/contact">
              Contact
            </Link>
            <Link p={3} as={RouterLink} to="/art">
              Art
            </Link>
          </Flex>

          <div className="hamburger-menu__container">
            <div
              className="hamburger-menu"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            {menuOpened && (
              <div className="menu-container">
                <Link p={3} as={RouterLink} to="/services">
                  Shop
                </Link>
                <Link p={3} as={RouterLink} to="/contact">
                  Contact
                </Link>
                <Link p={3} as={RouterLink} to="/art">
                  Art
                </Link>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </Box>
  );
}
