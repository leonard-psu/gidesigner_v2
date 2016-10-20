
var default_tree_icon = 'icons/tree1_icon_medium.png';


function get_ICON_ImagePath(material_id) {
    var result = default_tree_icon; //'icons/tree1_icon_large.png';
    if (print_messages)
        console.log("get_ICON_ImagePath: " + material_id);

    switch (material_id) {
        case "TreeA_sizeL":
            result = 'icons/tree1_icon_large.png';
            break;
        case "TreeA_sizeM":
            result = 'icons/tree1_icon_medium.png';
            break;
        case "TreeA_sizeS":
            result = 'icons/tree1_icon_small.png';
            break;

        case "TreeB_sizeL":
            result = 'icons/tree2_icon_large.png';
            break;
        case "TreeB_sizeM":
            result = 'icons/tree2_icon_medium.png';
            break;
        case "TreeB_sizeS":
            result = 'icons/tree2_icon_small.png';
            break;

        case "TreeC_sizeL":
            result = 'icons/tree3_icon_large.png';
            break;
        case "TreeC_sizeM":
            result = 'icons/tree3_icon_medium.png';
            break;
        case "TreeC_sizeS":
            result = 'icons/tree3_icon_small.png';
            break;

        case "TreeD_sizeL":
            result = 'icons/tree4_icon_large.png';
            break;
        case "TreeD_sizeM":
            result = 'icons/tree4_icon_medium.png';
            break;
        case "TreeD_sizeS":
            result = 'icons/tree4_icon_small.png';
            break;

        case "TreeE_sizeL":
            result = 'icons/tree5_icon_large.png';
            break;
        case "TreeE_sizeM":
            result = 'icons/tree5_icon_medium.png';
            break;
        case "TreeE_sizeS":
            result = 'icons/tree5_icon_small.png';
            break;

        case "TreeF_sizeL":
            result = 'icons/tree6_icon_large.png';
            break;
        case "TreeF_sizeM":
            result = 'icons/tree6_icon_medium.png';
            break;
        case "TreeF_sizeS":
            result = 'icons/tree6_icon_small.png';
            break;

        case "TreeG_sizeL":
            result = 'icons/tree7_icon_large.png';
            break;
        case "TreeG_sizeM":
            result = 'icons/tree7_icon_medium.png';
            break;
        case "TreeG_sizeS":
            result = 'icons/tree7_icon_small.png';
            break;
    }

    return result;
}

function get_StreetView_Marker(material_id) {

    if (print_messages)
        console.log("get_StreetView_Marker: " + material_id);

    var result = null;

    switch (material_id) {
        case "TreeA_sizeL":
            result = {
                url: 'icons/tree1_big.png',
                size: new google.maps.Size(280, 440),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(140, 440)
            };
            break;
        case "TreeA_sizeM":
            result = {
                url: 'icons/tree1_medium.png',
                size: new google.maps.Size(140, 220),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(70, 220)
            };
            break;
        case "TreeA_sizeS":
            result = {
                url: 'icons/tree1_small.png',
                size: new google.maps.Size(70, 110),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(35, 110),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;

        case "TreeB_sizeL":
            result = {
                url: 'icons/tree2_big.png',
                size: new google.maps.Size(337, 429),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(168.5, 429)
            };
            break;
        case "TreeB_sizeM":
            result = {
                url: 'icons/tree2_medium.png',
                size: new google.maps.Size(169, 215),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(84.5, 215)
            };
            break;
        case "TreeB_sizeS":
            result = {
                url: 'icons/tree2_small.png',
                size: new google.maps.Size(85, 108),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(42.5, 108),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;

        case "TreeC_sizeL":
            result = {
                url: 'icons/tree3_big.png',
                size: new google.maps.Size(335, 409),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(167.5, 409)
            };
            break;
        case "TreeC_sizeM":
            result = {
                url: 'icons/tree3_medium.png',
                size: new google.maps.Size(168, 205),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(84, 205)
            };
            break;
        case "TreeC_sizeS":
            result = {
                url: 'icons/tree3_small.png',
                size: new google.maps.Size(84, 103),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(42, 103),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;

        case "TreeD_sizeL":
            result = {
                url: 'icons/tree4_big.png',
                size: new google.maps.Size(287, 371),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(143.5, 371)
            };
            break;
        case "TreeD_sizeM":
            result = {
                url: 'icons/tree4_medium.png',
                size: new google.maps.Size(144, 186),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(72, 186)
            };
            break;
        case "TreeD_sizeS":
            result = {
                url: 'icons/tree4_small.png',
                size: new google.maps.Size(72, 93),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(36, 93),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;

        case "TreeE_sizeL":
            result = {
                url: 'icons/tree5_big.png',
                size: new google.maps.Size(303, 355),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(151.5, 355)
            };
            break;
        case "TreeE_sizeM":
            result = {
                url: 'icons/tree5_medium.png',
                size: new google.maps.Size(152, 178),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(76, 178)
            };
            break;
        case "TreeE_sizeS":
            result = {
                url: 'icons/tree5_small.png',
                size: new google.maps.Size(76, 89),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(38, 89),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;

            //HackBerry
        case "TreeF_sizeL":
            result = {
                url: 'icons/tree6_big.png',
                size: new google.maps.Size(476, 570),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(238, 570)
            };
            break;
        case "TreeF_sizeM":
            result = {
                url: 'icons/tree6_medium.png',
                size: new google.maps.Size(238, 285),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(119, 285),
            };
            break;
        case "TreeF_sizeS":
            result = {
                url: 'icons/tree6_small.png',
                size: new google.maps.Size(119, 143),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(59.5, 143),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;
            //pine tree
        case "TreeG_sizeL":
            result = {
                url: 'icons/tree7_big.png',
                size: new google.maps.Size(449, 539),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(224.5, 539)
            };
            break;
        case "TreeG_sizeM":
            result = {
                url: 'icons/tree7_medium.png',
                size: new google.maps.Size(225, 270),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(112.5, 270)
            };
            break;
        case "TreeG_sizeS":
            result = {
                url: 'icons/tree7_small.png',
                size: new google.maps.Size(113, 135),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(56.5, 135),
                //scaledSize: new google.maps.Size(70, 110)
            };
            break;


    }

    return result;
}
