const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedia = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedia[0].includes(aluno)){
        const indice = listaDeAlunosEMedia[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedia[1][indice]
        
        console.log(`${aluno} tem a média ${mediaDoAluno}!`)
    }
    else
        console.log("Aluno não encontrado!");
}

exibeNomeENota("João");
exibeNomeENota("Juliana");
exibeNomeENota("Evaldo");