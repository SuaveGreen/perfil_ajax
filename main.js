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

    $('#confirm-button').click(function() {
        const nicknamePerfil = $('#nickname-perfil').val();
        const endpoint = `https://api.github.com/users/${nicknamePerfil}`
        const botao = $(this);
        $(botao).find('form').addClass('is-hidden');
        $(botao).find('div').removeClass('is-hidden');

    fetch(endpoint)
    .then(function(res) {
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
                $(botao).find('form').addClass('is-hidden');
                $(botao).find('div').removeClass('is-hidden');
        })
        $('#form-nick').submit(function(evento) {
            evento.preventDefault();

            if ($('#name').val().length == 0) {
                throw new Error('Digite o nome');
            }
        })
    })
})