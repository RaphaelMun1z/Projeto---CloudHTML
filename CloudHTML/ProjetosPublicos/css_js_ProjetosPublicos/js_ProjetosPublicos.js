window.onload = function () {
	const menu = document.querySelector('.menu-toggle')
	const header = document.querySelector('header')
	const nav = document.querySelector('nav')

	menu.onclick = (e) => {
		header.classList.toggle('on')
		nav.classList.toggle('on')
	}
}

var delay = setInterval(function() {
    clearInterval(delay);
    document.querySelector('.loader-wrapper').style.display = "none";
}, 2000);

var baseLogin = document.querySelector('.base-form-login')
var baseCadastro = document.querySelector('.base-form-cadastro')
var baseRelatarBug = document.querySelector('.base-form-relatar-bug')
var baseInfoErro = document.querySelector('.base-info-erro')

function showHidenBase(obj, acao){
	if(acao == "abrir"){
		obj.style.display = "flex"
		if(obj == baseLogin){
			baseCadastro.style.display = "none"
			baseRelatarBug.style.display = "none"
			baseInfoErro.style.display = "none"
		}else
		if(obj == baseCadastro){
			baseLogin.style.display = "none"
			baseRelatarBug.style.display = "none"
			baseInfoErro.style.display = "none"
		}else
		if(obj == baseRelatarBug){
			baseLogin.style.display = "none"
			baseCadastro.style.display = "none"
			baseInfoErro.style.display = "none"
		}else
		if(obj == baseInfoErro){
			baseLogin.style.display = "none"
			baseCadastro.style.display = "none"
			baseRelatarBug.style.display = "none"
		}
	}else
	if(acao == "fechar"){
		obj.style.display = "none"
	}
}