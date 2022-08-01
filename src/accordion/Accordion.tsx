import React, { createContext, useCallback, useState } from "react";
import Box, { TBoxProps } from "../Box";

const initialState = {
  isOpen: false,
  toggleOpen: () => {},
};
export const AccordionContext = createContext(initialState);

type Props = TBoxProps & {
  children: React.ReactNode;
  expand?: boolean;
};

export default function Accordion({ children, expand, ...props }: Props) {
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
      }}
    >
      <Box {...props}>{children}</Box>
    </AccordionContext.Provider>
  );
}
