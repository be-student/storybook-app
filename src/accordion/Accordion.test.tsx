import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

test("un-controlled can be rendered", () => {
  render(
    <Accordion>
      <AccordionButton>button</AccordionButton>
      <AccordionContent>item</AccordionContent>
    </Accordion>
  );
  const Button = screen.getByText(/button/i);
  const Item = screen.queryByText(/item/i);
  expect(Button).toBeInTheDocument();
  expect(Item).not.toBeVisible();
});
test("un-controlled toggles the accordion on click", async () => {
  render(
    <Accordion>
      <AccordionButton>button</AccordionButton>
      <AccordionContent>item</AccordionContent>
    </Accordion>
  );
  const Button = screen.getByText(/button/i);
  const Item = screen.queryByText(/item/i);
  expect(Button).toBeInTheDocument();
  expect(Item).not.toBeVisible();
  userEvent.click(Button);
  expect(Button).toBeInTheDocument();
  expect(Item).toBeVisible();
  userEvent.click(Button);
  expect(Button).toBeInTheDocument();
  expect(Item).not.toBeVisible();
});

test("controlled can be rendered close", () => {
  render(
    <Accordion expand={false}>
      <AccordionButton>button</AccordionButton>
      <AccordionContent>item</AccordionContent>
    </Accordion>
  );
  const AccordionElement = screen.getByText(/button/i);
  const Item = screen.queryByText(/item/i);
  expect(AccordionElement).toBeInTheDocument();
  expect(Item).not.toBeVisible();
});
test("controlled can be rendered open", () => {
  render(
    <Accordion expand={true}>
      <AccordionButton>button</AccordionButton>
      <AccordionContent>item</AccordionContent>
    </Accordion>
  );
  const AccordionElement = screen.getByText(/button/i);
  const Item = screen.queryByText(/item/i);
  expect(AccordionElement).toBeInTheDocument();
  expect(Item).toBeVisible();
});
test("controlled can be toggled", async () => {
  let expand = false;
  render(
    <Accordion expand={expand}>
      <AccordionButton>button</AccordionButton>
      <AccordionContent>item</AccordionContent>
    </Accordion>
  );
  const AccordionElement = screen.getByText(/button/i);
  const Item = screen.queryByText(/item/i);
  expect(AccordionElement).toBeInTheDocument();
  expect(Item).not.toBeVisible();
  expand = true;
  await new Promise((r) => setTimeout(r, 1));
  expect(AccordionElement).toBeInTheDocument();
  expect(Item).not.toBeVisible();
});
