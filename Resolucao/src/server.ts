import app from "./app";

function main() {
  try {
    app.listen(3000, "localhost", async () => {
      console.log("starting server");
    });
  } catch (error) {
    console.log("error starting server", error);
  }
}

main();
