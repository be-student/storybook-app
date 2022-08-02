import "./App.css";
import Accordion from "./accordion/Accordion";
import AccordionContent from "./accordion/AccordionContent";
import AccordionButton from "./accordion/AccordionButton";
import Box from "./Box";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Box p="2rem">
      <Accordion width="300px">
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
          quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
          dolor doloremque quod iusto.
        </AccordionContent>
        <AccordionButton>
          <Box
            bg="rgba(0,0,0,0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            button
          </Box>
        </AccordionButton>
      </Accordion>
      <Accordion width="300px" expand={!isOpen} onClick={onClick}>
        <AccordionButton>
          <Box
            width="100%"
            bg="rgba(0,0,0,0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            button
          </Box>
        </AccordionButton>

        <AccordionContent>
          <Box width="100%">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
            quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
            dolor doloremque quod iusto.
          </Box>
        </AccordionContent>
      </Accordion>
      <Accordion width="300px" expand={isOpen} onClick={onClick}>
        <AccordionButton width="100%">
          <Box
            bg="rgba(0,0,0,0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            button
          </Box>
        </AccordionButton>

        <AccordionContent>
          <Box>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
            quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
            dolor doloremque quod iusto.
          </Box>
        </AccordionContent>
      </Accordion>
    </Box>
  );
}

export default App;
