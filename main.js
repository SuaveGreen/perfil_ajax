// document.addEventListener('DOMContentLoaded', function() {
//     const nomeElement = document.querySelector('#name')
//     const nicknameElement = document.querySelector('#username')
//     const fotoPerfilElement = document.querySelector('#avatar')
//     const reposElement = document.querySelector('#repos')
//     const seguidoresElement = document.querySelector('#followers')
//     const seguindoElement = document.querySelector('#following')
//     const linkElement = document.querySelector('#link')

//     fetch('https://api.github.com/users/suavegreeen')
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(json) {
//         nomeElement.innerText = json.name;
//         nicknameElement.innerText = json.login;
//         fotoPerfilElement.src = json.avatar_url;
//         seguidoresElement.innerText = json.following;
//         seguindoElement.innerText = json.followers;
//         reposElement.innerText = json.public_repos;
//         linkElement.href = json.html_url;
//     })
//     .catch(function(erro) {
//         alert("erro apenas")
//     })
//     .finally(function() {
        
//     })
// })

$(document).ready(function () {
    const nomeElement = document.querySelector('#name')
    const nicknameElement = document.querySelector('#username')
    const fotoPerfilElement = document.querySelector('#avatar')
    const reposElement = document.querySelector('#repos')
    const seguidoresElement = document.querySelector('#followers')
    const seguindoElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')

    $('#form-nick').submit(function (evento) {
        evento.preventDefault();
        const nicknamePerfil = $('#nickname-perfil').val();
        const endpoint = `https://api.github.com/users/${nicknamePerfil}`

        if (nicknamePerfil == '') {
            alert('Digite um nome válido')
            throw new Error('Digite um nome válido');
        }

    fetch(endpoint)
    .then(function(res) {
            if(res.status != 200) {
                throw new Error('Perfil não encontrado')
            }
            return res.json();
        })
        .then(function(json) {
            nomeElement.innerText = json.name;
            nicknameElement.innerText = json.login;
            fotoPerfilElement.src = json.avatar_url;
            seguidoresElement.innerText = json.following;
            seguindoElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o perfil, verifique e tente novamente!")
        })
        .finally(function() {
                $('#form-nick').addClass('is-hidden');
                $('#info-container').removeClass('is-hidden');
        })
        $('#button-back').click(function () {
            $('#form-nick').removeClass('is-hidden');
            $('#info-container').addClass('is-hidden');
        })
    })
})