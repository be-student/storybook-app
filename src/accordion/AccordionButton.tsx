import { useContext } from "react";
import Box, { TBoxProps } from "../Box";
import { AccordionContext } from "./Accordion";

type Props = TBoxProps & {
  onClick?: () => {};
  children: React.ReactNode;
};
export default function AccordionButton({
  onClick,
  children,
  ...props
}: Props) {
  const { toggleOpen } = useContext(AccordionContext);
  return (
    <Box
      onClick={() => {
        toggleOpen();
        onClick?.();
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
