var my_tree_id = 0;
//var my_tree_id = "TreeA_L"; //Must match select drop down first item
var print_messages = false;
var maker_object_count = 0;

var uniqueId = function () {
    return ++maker_object_count;
}
var map_markers = {};
var streetview_markers = {};


//REQUIRES GLOBAL VARIABLES
function get_Material() {
    var new_material = current_material + "_" + current_size;
    return new_material;
}

function update_Marker() {

    local_tree_id = get_Material();
    my_icon = get_ICON_ImagePath(local_tree_id);

    drawingManager.setOptions({
        markerOptions: {
            icon: my_icon,
            draggable: true,
            title: "Drag me!",
            treeID: local_tree_id
        }
    })
}

var delete_Map_Marker = function (id) {
    if (print_messages)
        console.log("delete_Map_Marker: " + id);
    marker = map_markers[id];
    marker.setMap(null);
    marker = null;
}

var delete_StreetView_Marker = function (id) {
    if (print_messages)
        console.log("delete_StreetView_Marker: " + id);
    marker = streetview_markers[id];
    //console.log(marker);
    marker.setMap(null);
    marker = null;
}

var move_Map_Marker = function (id, newLat, newLong) {
    if (print_messages)
        console.log("move_Map_Marker: " + id);
    marker = map_markers[id];
    var tmp = { lat: newLat, lng: newLong };
    marker.setPosition(tmp);
    marker = null;
}

var move_StreetView_Marker = function (id, newLat, newLong) {
    if (print_messages)
        console.log("move_StreetView_Marker: " + id);
    marker = streetview_markers[id];
    var tmp = { lat: newLat, lng: newLong };
    marker.setPosition(tmp);
    marker = null;
}
