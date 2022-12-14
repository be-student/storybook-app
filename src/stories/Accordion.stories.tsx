import { ComponentMeta } from "@storybook/react";
import Accordion from "../accordion/Accordion";
import AccordionButton from "../accordion/AccordionButton";
import AccordionContent from "../accordion/AccordionContent";
import Box from "../Box";

export const Default = () => {
  return (
    <Accordion width="300px">
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
      <AccordionContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionContent>
    </Accordion>
  );
};
export const Downside = () => {
  return (
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
  );
};
export const CustomAccordion = ({ ...props }: any) => {
  return (
    <Accordion width="300px" {...props}>
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
      <AccordionContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionContent>
    </Accordion>
  );
};

export const CustomAccordionButton = ({ ...props }: any) => {
  return (
    <Accordion width="300px">
      <AccordionButton {...props}>
        <Box display="flex" alignItems="center" justifyContent="center">
          button
        </Box>
      </AccordionButton>
      <AccordionContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionContent>
    </Accordion>
  );
};
export const CustomAccordionContent = ({ ...props }: any) => {
  return (
    <Accordion width="300px">
      <AccordionButton>
        <Box display="flex" alignItems="center" justifyContent="center">
          button
        </Box>
      </AccordionButton>
      <AccordionContent {...props}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionContent>
    </Accordion>
  );
};
export default {
  title: "Accordion",
  component: Default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    padding: { control: { type: "number" } },
    delay: {
      label: {
        describe: "only works for custom All",
      },
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Default>;
