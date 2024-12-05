import express from "express";
import routes from "./src/routes/postRoutes.js"

const app = express();
app.use(express.static("uploads"));
routes(app)

app.listen(3000,() => {
    console.log("Servidor Escutando...");
});






// const posts =[
//   {
//       descricao: "Um gatinho fofo dormindo",
//       imagem: "https://placekitten.com/200/300",
//       id: 1
//   },
//   {
//       descricao: "Gatinho curioso explorando a caixa",
//       imagem: "https://placekitten.com/300/200",
//       id: 2
//   },
//   {
//     id: 3,
//     descricao: "Gato tomando sol na janela",
//     imagem: "https://placekitten.com/300/400"
//   }

// ]





// function buscarPostPorId(id){
//   return posts.findIndex((post) => {
//     return post.id === Number(id)
//   })
// }
// app.get("/posts/:id",(req, res) => {
//   const index = buscarPostPorId(req.params.id)
//   res.status(200).json(posts[index]);
// });

// const posts1 = [
//   {
//     descricao: "Um gatinho fofo dormindo",
//     imagem: "https://placekitten.com/200/300"
//   },
//   {
//     descricao: "Gatinho curioso explorando a caixa",
//     imagem: "https://placekitten.com/300/200"
//   },
//   {
//     descricao: "Gato brincando com um novelo de lã",
//     imagem: "https://placekitten.com/400/300"
//   },
//   {
//     descricao: "Gato tomando sol na janela",
//     imagem: "https://placekitten.com/300/400"
//   },
//   {
//     descricao: "Gato fazendo pose para a foto",
//     imagem: "https://placekitten.com/250/250"
//   }
// ];

// // Exibindo os posts no console (para demonstração)
// posts.forEach(post => {
//   console.log(post);
// });
