import { app } from "./app";
import { hello } from "./routes";


app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then(()=> {
  console.log("Server running")
})