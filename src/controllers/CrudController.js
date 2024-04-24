const connection= require('../database/conection')


module.exports={
    async Post(req,res){
        try{
            const {Endereço,Nome,Email,Telefone}= req.body
            
            if(Email.length > 0){

            await connection('Clientes').insert({
                Nome,
                Endereço,
                Telefone,
                Email
            });
            console.log('inseriu')
            return res.status(200).json('Informações Enviadas')
        }
        else{
            return res.status(400).json('Campo esta Vazio')
        }
        }
        catch(error){
            return res.status(500).json('Erro interno ao inserir os dados')
        }
      },

     async get(req,res){
      try{
       const DB= await connection('Clientes').select('*')
       return res.json(DB)
    }
    catch(error){
        return res.status(500).json('Erro interno ao obter os dados')
    }
    },
    async Put(req,res){
        try{
            const params= req.params.Email
            const {Endereço,Nome,Email,Telefone}= req.body

            const update= await connection('Clientes').where({Email:params}).update({Endereço,Nome,Email,Telefone})
            
            if(update > 0){
                return res.status(200).json('Alterado com sucesso')
            }
            else{
                return res.status(400).json("Nenhum item encontrado para atualizar")
            }
        }
        catch(error){
            console.log("erro ao alterar dados", error)
            return res.status(500).json("Erro interno ao alterar os dados")
        }

   },
   async delete(req,res){
    try{
        const {Email}= req.params

        const delet= await connection('Clientes').where({Email:Email}).del()

        if(delet >= 1){
            return res.status(200).json('Cliente deletado')
        }
        else{
            return res.status(400).json("Cliente nao encontrado")
        }
    }
    catch(error){
       return res.status(500).json("Erro interno para deletar")
    }
   }
}

