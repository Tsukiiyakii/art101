/*
   // index.js - purpose and description here
// Author: Alyssa Yuen
// Date: 2 June
// Lincense: Public Domain
*/


$(document).ready(function() {
   $("#activate").click(function() {
       let pokemon = $("#pokemonInput").val().toLowerCase().trim();
       if (!pokemon) {
           $("#output").html("<p>Please enter a Pokémon name or ID.</p>");
           return;
       }
       let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
       $.ajax({
           url: url,
           type: "GET",
           dataType: "json",
           success: function(data) {
               let html = `
                   <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)} (#${data.id})</h3>
                   <img src="${data.sprites.front_default}" alt="${data.name}">
                   <ul>
                       <li><strong>Type:</strong> ${data.types.map(t => t.type.name).join(', ')}</li>
                       <li><strong>Height:</strong> ${data.height}</li>
                       <li><strong>Weight:</strong> ${data.weight}</li>
                       <li><strong>Base Experience:</strong> ${data.base_experience}</li>
                   </ul>
               `;
               $("#output").html(html);
           },
           error: function(jqXHR, textStatus, errorThrown) {
               $("#output").html("<p>Pokémon not found. Please try again.</p>");
               console.log("Error:", textStatus, errorThrown);
           }
       });
   });
});















