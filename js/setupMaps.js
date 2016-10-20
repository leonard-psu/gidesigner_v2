//Useful Links
//https://developers.google.com/maps/documentation/javascript/markers
//https://developers.google.com/maps/documentation/javascript/drawinglayer
//https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions
//https://developers.google.com/maps/documentation/javascript/markers


//Default map and street view position
mylat = 39.29363821988303;
mylng = -76.74452218916127;
var default_lat_long_location = { lat: mylat, lng: mylng };

if (print_messages)
    console.log("mylat = " + mylat + " mylng = " + mylng)

var drawingManager;


function initialize_Maps() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: default_lat_long_location,
        zoom: 21
    });

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: default_lat_long_location,
            pov: {
                heading: 0,
                pitch: 0
            }
        });

    map.setStreetView(panorama);

    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            //drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
            drawingModes: ['marker', 'polygon']
        },
        markerOptions: {
            icon: default_tree_icon,
            draggable: true,
            title: "Drag me!",
            id: maker_object_count,
            treeID: get_Material()
            //treeID: my_tree_id
    },
        circleOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
        }

    });

    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'markercomplete', function (current_marker) {
        //var radius = circle.getRadius();

        if (print_messages) {
            console.log("User added marker");
            console.log(current_marker.getPosition().lat());
            console.log(current_marker.getPosition().lng());
        }

        var local_material_id = get_Material();

        if (print_messages)
            console.log("local_material_id = " + local_material_id);

        //must be better way?
        var id = uniqueId(); // get new id
        current_marker.id = id;

        //console.log(maker_object_count);
        var unique_id = current_marker.id;
        if (print_messages)
            console.log("unique_id = " + unique_id);

        google.maps.event.addListener(current_marker, 'dragend', function (event) {
            if (print_messages) {
                console.log("dragend marker");
                console.log("unique_id: " + current_marker.id);
                console.log(event.latLng.lat());
                console.log(event.latLng.lng());
            }
            move_StreetView_Marker(current_marker.id, event.latLng.lat(), event.latLng.lng());
        });

        google.maps.event.addListener(current_marker, "rightclick", function (point) {
            if (print_messages) {
                console.log("delMarker marker");
                console.log("unique_id: " + current_marker.id);
            }
            if (confirm('Are you sure you want to delete marker on map and streetview?')) {
                delete_Map_Marker(current_marker.id);
                delete_StreetView_Marker(current_marker.id);
            }
            else
            {
                if (print_messages) {
                    console.log("delete markers ignored");
                }
            }
        });

        var my_icon = get_StreetView_Marker(local_material_id);

        var streetview_marker = new google.maps.Marker({
            position: { lat: current_marker.getPosition().lat(), lng: current_marker.getPosition().lng() },
            map: panorama,
            icon: my_icon,
            draggable: true,
            title: "Drag me! " + unique_id,
            id: unique_id
        });

        google.maps.event.addListener(streetview_marker, "rightclick", function (point) {

            if (confirm('Are you sure you want to delete marker on map and streetview?')) {
                delete_Map_Marker(streetview_marker.id);
                delete_StreetView_Marker(streetview_marker.id);
            }
            else {
                if (print_messages) {
                    console.log("delete markers ignored from street view");
                }
            }

        });

        google.maps.event.addListener(streetview_marker, 'dragend', function (event) {
            if (print_messages) {
                console.log("dragend marker in streetview");
                console.log("unique_id: " + streetview_marker.id);
                console.log(event.latLng.lat());
                console.log(event.latLng.lng());
            }
            move_Map_Marker(streetview_marker.id, event.latLng.lat(), event.latLng.lng());
        });

        map_markers[id] = current_marker;
        streetview_markers[id] = streetview_marker;

    });

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (current_polygon) {

        console.log("User added polygon");

    });



}
