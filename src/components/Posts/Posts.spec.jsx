import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      cover: "img/img1.png",
      title: "title 1",
      body: "body 1",
    },
    {
      id: 2,
      cover: "img/img2.png",
      title: "title 2",
      body: "body 2",
    },
    {
      id: 3,
      cover: "img/img3.png",
      title: "title 3",
      body: "body 3",
    },
  ],
};

describe("<Posts />", () => {
  // verifica se a quantidade de posts == quantidade de posts no mock (props)
  it("should render posts", () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute(
      "src",
      "img/img3.png"
    );
  });

  it("should render no posts", () => {
    render(<Posts />);
    expect(
      screen.queryByRole("heading", { name: /title/i })
    ).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
