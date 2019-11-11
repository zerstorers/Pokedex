$(document).ready(function () {
    for (i = 0; i < pokemons.length; i++) {
        $("#pokedex").append("<div>");
        $("#pokedex div").eq(i).append('<img src="' + pokemons[i].art_url + '">')
        $("#pokedex div").eq(i).append("<h2>" + pokemons[i].id + ". " + pokemons[i].name + "</h2>")
        $("#pokedex div").eq(i).append('<ul class="types">')        for (let j = 0; j < pokemons[i].types.length; j++)
         { $("#pokedex div .types").eq(i).append('<li class="type ' + pokemons[i].types[j] + '">' + pokemons[i].types[j] + '</li>') }