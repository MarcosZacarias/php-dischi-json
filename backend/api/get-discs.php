<?php
$json_discs = file_get_contents("../data/dischi_json.json");
// var_dump($json_discs);
$dischi = json_decode($json_discs);

header("Content-Type: application/json");
echo json_encode($dischi);