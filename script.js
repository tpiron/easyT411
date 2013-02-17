getLinks();

function getLinks () {
// Generate columns with .torrent file

    // Add "Download" column name for each torrents categories
    for (var j = 0; j < document.getElementsByClassName("results").length; j++) {
	var th = document.createElement('th');
	th.width="45px";
	th.innerHTML="Download";
	document.getElementsByClassName("results")[j].tHead.getElementsByTagName("tr")[0].appendChild(th);
	
    // Add TD elements in each rows, dumping the NFO colums and replace 'nfo' per 'download'
    for (var i = 0; i < document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr").length; i++) {
	var td = document.createElement('td');
	td.align="center";
	td.innerHTML=document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerHTML;
	td.innerHTML=td.innerHTML.replace('nfo','download');
	document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr")[i].appendChild(td);
    };
    };
}