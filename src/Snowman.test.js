import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon";

it("renders without crashing", function () {
  render(<Snowman images={TEST_IMAGES} maxWrong={6} words="test" />);
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman images={TEST_IMAGES} maxWrong={6} words="test" />
  );
  expect(container).toMatchSnapshot();
});

it("cannot click button after max number of wrong guess", function () {
  const { container, debug } = render(
    <Snowman images={TEST_IMAGES} maxWrong={6} words={["test"]} />
  );

  const letterButton = container.querySelector("button[value='a']");
  debug(letterButton)
  fireEvent.click(letterButton);
});

