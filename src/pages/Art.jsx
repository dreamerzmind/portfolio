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
  Flex,
} from "@chakra-ui/react";
import Plant1 from "../assets/plant-home.webp";
import Art1 from "../assets/geordanna-cordero-fields.jpeg";
import Painting1 from "../assets/painting.webp";
import Blue2 from "../assets/blue-green.jpeg";
import Blue1 from "../assets/blue-painting.jpeg";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Art = () => {
  return (
    <>
      <div class="image-container">
      <img className="blue-green" src={Blue1} />
      <div class="overlay-text">
          <p>Unleash Your Imagination</p>
        </div>
        <div class="overlay-button">
          <button>Click Me</button>
        </div>
      </div>
      <div class="intro-first-background">
        <p className="intro-first">ART FORMS</p>
      </div>
      <body>
        <div class="background-block">
          <p className="block-text-intro">Painting</p>
          <div class="overlay-button">
            <button>Click Me</button>
          </div>
        </div>
      </body>
      <section className="intro-title">
        <p>
          Creativity is allowing yourself to make mistakes. Art is knowing which
          ones to keep.
        </p>
      </section>
      <section className="intro">
        <h2 fontWeight="bold">Art</h2>
        <p>
          The expression or application of human creative skill and imagination,
          typically in a visual form such as painting or sculpture, producing
          works to be appreciated primarily for their beauty or emotional power.
        </p>
      </section>
      <div class="image-container">
        <img src={Art1} />
        <div class="overlay-text">
          <p>Unleash Your Imagination</p>
        </div>
        <div class="overlay-button">
          <button>Click Me</button>
        </div>
      </div>

      <body>
        <div class="background-block">
          <div>
            <p className="block-text">Painting</p>
            <p className="block-paragraph">
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term "painting"
              describes both the act and the result of the action.
            </p>
          </div>
          <div>
            <p className="block-text">Pottery</p>
            <p className="block-paragraph">
              Pottery is the process and the products of forming vessels and
              other objects with clay and other raw materials, which are fired
              at high temperatures to give them a hard and durable form. The
              place where such wares are made by a potter is also called a
              pottery.
            </p>
          </div>
        </div>
      </body>

      <div class="image-text-container">
        <img src={Art1} />
        <div class="text-content">
          <h2>
            <a href="https://catalog.gmu.edu/colleges-schools/visual-performing-arts/art/">
              Painting Class
            </a>
          </h2>
          <p>
            Bring a set of brushes and a palette with paint. Instructions on how
            to become a phenomenal artist will be included.
          </p>
        </div>
      </div>

      <div class="image-text-container">
        <img src={Art1} />
        <div class="text-content">
          <h2>
            <a href="https://catalog.gmu.edu/colleges-schools/visual-performing-arts/art/">
              Drawing Class
            </a>
          </h2>
          <p>
            Bring a set of color pencils and a sharpener. Instructions on how to
            become a phenomenal artist will be included.
          </p>
        </div>
      </div>

      <div class="image-text-container">
        <div class="text-content">
          <h2>It's never too late to start becoming an artist.</h2>
          <p>
            Bring a set of color pencils and a sharpener. Instructions on how to
            become a phenomenal artist will be included.
          </p>
        </div>
      </div>

      <div className="card-container">
        <div class="card">
          <img src={Art1} />
          <div class="card-content">
            <h2>Painting</h2>
            <p>A mix of colors on canvas.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card">
          <img src={Art1} />
          <div class="card-content">
            <h2>Painting</h2>
            <p>A mix of colors on canvas.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card">
          <img src={Art1} />
          <div class="card-content">
            <h2>Painting</h2>
            <p>A mix of colors on canvas.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card">
          <img src={Art1} />
          <div class="card-content">
            <h2>Painting</h2>
            <p>A mix of colors on canvas.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>

      <section class="content-block">
        <h2>Calm Yourself</h2>
        <p>Grab your brush and canvas.</p>
        <h3 class="imagine-text">Just Imagine</h3>
        <p>No limitations to what you think.</p>
        <h3>Create your story</h3>
        <p>It's in your hands to write the unwritten.</p>
      </section>

      <div class="card-container">
        <div class="card-lg">
          <img src={Art1} />
          <h2>Painting</h2>
          <p>A mix of colors on canvas.</p>
          <a href="#">Read more</a>
        </div>
        <div class="card-lg">
          <img src={Art1} />
          <h2>Painting</h2>
          <p>A mix of colors on canvas.</p>
          <a href="#">Read more</a>
        </div>
        <div class="card-lg">
          <img src={Art1} />
          <h2>Painting</h2>
          <p>A mix of colors on canvas.</p>
          <a href="#">Read more</a>
        </div>
      </div>
     <div>
       <section className="ending">
         <p className="subscribe">Subscribe to the Newsletter</p>
         <p className="subscribe-news">Receive news about upcoming events and classes.</p>
         <Flex gap="15px">
           <label style={{ flexGrow: 1 }}>
             <Input width="100%" placeholder="Name" />
           </label>
            <Button className="subscribe-button-name">Sign up</Button>
           <label style={{ flexGrow: 1 }}>
             <Input width="100%" placeholder="Email" />
           </label>
         </Flex>
         <p className="address">1800 Alexandria Street</p>
          <p>Alexandria, VA 22041
          <p>United States</p>
          <br></br>
          <p>252-252-2552</p>
          <p>manalibrahim02@gmail.com</p>
          </p>
       </section>
     </div>
    </>
  );
};

export default Art;
