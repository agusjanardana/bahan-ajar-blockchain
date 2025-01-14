const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(previousHash,nama,kampus,jurusan,angkatan){
        this.previousHash = previousHash;
        this.nama = nama;
        this.kampus = kampus;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return SHA256(this.previousHash + this.nama + this.kampus + this.jurusan + this.angkatan).toString();
    }

}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()]
    }
    createGenesisBlock(){
        return new Block("Genesis","GenesisName","GenesisKampus","GenesisJurusan","GenesisAngkatan");
    }
    addBlock(jsonOfInformation){
        let readyBlock = new Block(jsonOfInformation.previousHash,jsonOfInformation.nama,jsonOfInformation.kampus,jsonOfInformation.jurusan,jsonOfInformation.angkatan);
        this.chain.push(readyBlock);
    }
    showBlockchain(){
        return this.chain;
    }
}

blockchain = new Blockchain()
// let input1 = ["f2e5b6ee3fde6cd31ccba98a59f8c44f41838de0059e1538126018d44520cc23","Daffa","Telkom U","If","2019"]
// Blockchain.addBlock(input1)
// let input2 = ["31ce8b317cbfcc3d847898192e0a0b0f1528c5a9b1be59f07f4cead2e52520b1","Agus","Telkom U","If","2022"]
// Blockchain.addBlock(input2)

module.exports = blockchain;
// console.log(Blockchain.showBlockchain())