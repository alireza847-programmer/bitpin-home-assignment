import { create } from "apisauce";

export const api = create({
  baseURL: "https://api.bitpin.org/",
});

api.addAsyncRequestTransform(async (req) => {});

api.addAsyncResponseTransform(async (res) => {
  console.log(res);
});
