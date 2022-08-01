import { useContext, useEffect, useRef } from "react";
import Box, { TBoxProps } from "../Box";
import { AccordionContext } from "./Accordion";

type Props = TBoxProps & {
  children: React.ReactNode;
};
export default function AccordionItem({ children, ...props }: Props) {
  const { isOpen } = useContext(AccordionContext);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (isOpen) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    } else {
      parentRef.current.style.height = "0";
    }
  }, [isOpen]);
  return (
    <Box
      overflow="hidden"
      boxSizing="border-box"
      style={{ transition: "height 0.35s ease" }}
      ref={parentRef}
    >
      <Box ref={childRef} {...props}>
        {children}
      </Box>
    </Box>
  );
}
