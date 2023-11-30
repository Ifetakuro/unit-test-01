import { rest } from "msw";

//https://mswjs.io/docs/getting-started  install msw to mock endpoints

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Princess Diana",
        },
      ]),
    );
  }),
];
