import { ComponentMeta } from "@storybook/react";
import Accordion from "../accordion/Accordion";
import AccordionButton from "../accordion/AccordionButton";
import AccordionItem from "../accordion/AccordionContent";
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
      <AccordionItem>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionItem>
    </Accordion>
  );
};
export const Downside = () => {
  return (
    <Accordion width="300px">
      <AccordionItem>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionItem>
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
export const CustomAll = ({ ...props }: any) => {
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
      <AccordionItem>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionItem>
    </Accordion>
  );
};

export const CustomTitle = ({ ...props }: any) => {
  return (
    <Accordion width="300px">
      <AccordionButton {...props}>
        <Box display="flex" alignItems="center" justifyContent="center">
          button
        </Box>
      </AccordionButton>
      <AccordionItem>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionItem>
    </Accordion>
  );
};
export const CustomContent = ({ ...props }: any) => {
  return (
    <Accordion width="300px">
      <AccordionButton>
        <Box display="flex" alignItems="center" justifyContent="center">
          button
        </Box>
      </AccordionButton>
      <AccordionItem {...props}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        laudantium, fugiat modi officiis dolores qui? Ipsum voluptates vel
        quisquam, rem laboriosam illum obcaecati excepturi magnam aspernatur
        dolor doloremque quod iusto.
      </AccordionItem>
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
