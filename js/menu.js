var current_material = "TreeA";
var current_size = "sizeM";


$(document).ready(function () {
    $('.dropdown a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

$(document).on("click", ".open-Tree", function () {
    current_material = $(this).data('id');

    if (print_messages)
        console.log("Current Material " + current_material);

    Update_Tree_Menu_Interface();
    update_Marker();
});

$(document).on("click", ".open-MaterialSize", function () {
    current_size = $(this).data('id');

    if (print_messages)
        console.log("Current Material Size " + current_size);

    Update_Material_Size_Menu_Interface();
    update_Marker();
});

//TODO
function clear_bush_selection_buttons() {

}

//TODO
function clear_groundcover_selection_buttons() {

}


function clear_Material_Size_Menu_buttons() {
    try {
        
        var menu = $('#menusizeL');
        menu.removeClass('btn-info').addClass('btn-primary');

        var menu = $('#menusizeM');
        menu.removeClass('btn-info').addClass('btn-primary');

        var menu = $('#menusizeS');
        menu.removeClass('btn-info').addClass('btn-primary');

    }
    catch (err) {
        console.log(err);
    }
}
 
function Update_Material_Size_Menu_Interface()
{
    try
    {
        clear_Material_Size_Menu_buttons();

        var menu = $('#menusizeL');
        if (current_size == 'sizeL')
            menu.removeClass('btn-primary').addClass('btn-info');

        var menu = $('#menusizeM');
        if (current_size == 'sizeM')
            menu.removeClass('btn-primary').addClass('btn-info');

        var menu = $('#menusizeS');
        if (current_size == 'sizeS')
            menu.removeClass('btn-primary').addClass('btn-info');

    }
    catch (err) {
        console.log(err);
    }
}

function clear_tree_selection_buttons() {
    try {

        var menu = $('#menuTreeA');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeB');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeC');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeD');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeE');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeF');
        menu.removeClass('btn-info').addClass('btn-lg');

        var menu = $('#menuTreeG');
        menu.removeClass('btn-info').addClass('btn-lg');

    }
    catch (err) {
        console.log(err);
    }
}


function Update_Tree_Menu_Interface() {
    try {

        clear_bush_selection_buttons();
        clear_groundcover_selection_buttons();
        clear_tree_selection_buttons();

        if (print_messages)
            console.log("Update_Tree_Menu_Interface: " + current_material);

        var menu = $('#menuTreeA');
        if (current_material == 'TreeA')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeB');
        if (current_material == 'TreeB')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeC');
        if (current_material == 'TreeC')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeD');
        if (current_material == 'TreeD')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeE');
        if (current_material == 'TreeE')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeF');
        if (current_material == 'TreeF')
            menu.removeClass('btn-lg').addClass('btn-info');

        var menu = $('#menuTreeG');
        if (current_material == 'TreeG')
            menu.removeClass('btn-lg').addClass('btn-info');
    }
    catch (err) {
        console.log(err);
    }
}