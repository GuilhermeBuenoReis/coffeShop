import { app } from "./app";

export const hello = app.get('hello', ()=> {
  return "Hello word"
});