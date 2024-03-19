import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Flex
} from "@chakra-ui/react";
import Plant1 from "../assets/plant-home.webp";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <section className="intro">
        <h2 fontWeight="bold">Plant Types</h2>
        <p>
          With a world of plants to choose from for your garden, where do you
          begin? Here our aim is to make it as easy as possible to decide by
          browsing the different plant types available. If you want a tree, then
          find out how they can still be a gorgeous addition to even a small
          garden.
        </p>
      </section>
      <img src={Plant1}></img>

      <div className="simple-container">
        <Card mb="20px">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb="20px"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          mb="20px"
        >
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} p={2}>
                Alpines
              </Heading>
              <img src={Plant1}></img>
            </CardHeader>
            <CardBody>
              <Text>
                Alpines are small and highly collectable plants, producing
                exquisite little flowers in a range of vibrant hues. 
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} p={2}>
                Annuals and Biennials
              </Heading>
              <img src={Plant1}></img>
            </CardHeader>
            <CardBody>
              <Text>
                These fast-growing, quick-flowering plants are easy to grow from
                seed and perfect for filling gaps in borders with short-term
                colour. 
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" textAlign={"center"} p={2}>
                Aquatic Plants
              </Heading>
              <img src={Plant1}></img>
            </CardHeader>
            <CardBody>
              <Text>
                No pond should be without plants – they bring it to life, add
                colour and interest, help to hide the liner, and attract
                wildlife of all kinds.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>

        <Flex gap="15px">
            <label style={{ flexGrow: 1 }}>
                <Input width="100%" placeholder="Email" />
            </label>
            <Button colorScheme="blue">Sign up</Button>
        </Flex>
      </div>
    </>
  );
};

export default Home;
