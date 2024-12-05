import { MongoClient } from "mongodb";
export default async function conectarAoBanco(stringconexao) {
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringconexao);
        console.log('Conectamdo ao cluster do Banco de Dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');
        return mongoClient;
    }catch (erro){
        console.error('Falha na conexão com o banco de dados!');
        process.exit();
    }
}