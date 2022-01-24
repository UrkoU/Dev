// Crea las imágenes draggables
$(".imgDraggable").draggable({
    revert: true,
    revertDuration: 700,
    start: function(ui, event) {
        // Recorre los divs y añade color rojo/verde según acepten
        aGuardados.forEach((element)=>{
            if ($(`#${ui.target.id}${element}`).is(":visible")) $(`#div${element}`).addClass("cannotAccept");
            else $(`#div${element}`).addClass("canAccept");
        });
    },
    stop: function(ui, event) {
        aGuardados.forEach((element)=>{
            $(`#div${element}`).removeClass("cannotAccept");
            $(`#div${element}`).removeClass("canAccept");
        });
    }
});
function CrearDroppables() {
    $(".droppableItem").droppable({
        drop: function(event, ui) {
            // console.log(ui.draggable[0].id);
            // console.log(event.target.id);
            let destId = event.target.id;
            destId = destId.replace("div", "");
            // console.log(destId);
            $(`#${ui.draggable[0].id}${destId}`).show();
        }
    });
    $(".droppableItem").disableSelection();
    $(".droppableItem").css("cursor", "default");
}

//# sourceMappingURL=index.95395cc1.js.map
