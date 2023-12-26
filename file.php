<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = date("Y-m-d H:i:s");
    $entryTitle = $_POST["entry-title"];
    $entryContent = $_POST["daily-entry"];

    $entryData = "*** Entry ***\nDate: $date\nTitle: $entryTitle\nContent: $entryContent\n\n";

    // Append the entry data to a text file
    $file = fopen("entries.txt", "a");
    fwrite($file, $entryData);
    fclose($file);
} else {
    header('Location: index.html');
}

?>
