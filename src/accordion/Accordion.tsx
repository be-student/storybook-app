import React, { createContext, useCallback, useState } from "react";
import Box, { TBoxProps } from "../Box";

const initialState = {
  isOpen: false,
  toggleOpen: () => {},
  delay: 0.35,
};
export const AccordionContext = createContext(initialState);

type Props = TBoxProps & {
  children: React.ReactNode;
  expand?: boolean;
  delay?: number;
};

export default function Accordion({
  children,
  expand,
  delay,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(expand || false);
  const toggleOpen = useCallback(() => {
    if (typeof expand === "undefined") {
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen(expand);
    }
  }, [setIsOpen, expand]);
  return (
    <AccordionContext.Provider
      value={{
        isOpen: typeof expand === "undefined" ? isOpen : expand,
        toggleOpen,
        delay: delay ? delay : 0.35,
      }}
    >
      <Box {...props}>{children}</Box>
    </AccordionContext.Provider>
  );
}
