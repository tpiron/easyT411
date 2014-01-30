getLinks();

function toggle(source) {
  checkboxes = document.getElementsByName('dls');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
};

function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
};

function getHtml() {
for (var i=0; i<getCheckedBoxes('dls').length; i++) {
	window.open(getCheckedBoxes('dls')[i].parentNode.parentNode.getElementsByClassName('dl')[0].href) };
};
function getLinks () {
// Generate columns with .torrent file

    // Add "Download" column name for each torrents categories
    for (var j = 0; j < document.getElementsByClassName("results").length; j++) {
		var th_dl = document.createElement('th');
		th_dl.width="45px";
		th_dl.innerHTML="Download";
		document.getElementsByClassName("results")[j].tHead.getElementsByTagName("tr")[0].appendChild(th_dl);
		
		var th_se = document.createElement('th');
		th_se.width="45px";
		th_se.innerHTML="Select";
		document.getElementsByClassName("results")[j].tHead.getElementsByTagName("tr")[0].appendChild(th_se);
		
		// Add TD elements in each rows, dumping the NFO colums and replace 'nfo' per 'download'
		for (var i = 0; i < document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr").length; i++) {
			var td_dl = document.createElement('td');
			td_dl.align="center";
			td_dl.innerHTML=document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerHTML;
			td_dl.innerHTML=td_dl.innerHTML.replace('nfo','download');
			td_dl.children[0].className = td_dl.children[0].className + " dl";
			document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr")[i].appendChild(td_dl);
			
			var td_se = document.createElement('td');
			td_se.align="center";
			td_se.innerHTML='<input type="checkbox" name="dls">'
			document.getElementsByClassName("results")[j].tBodies[0].getElementsByTagName("tr")[i].appendChild(td_se);
		};
		
		// Add TFoot columns
		var th_dl = document.createElement('th');
		th_dl.width="45px";
		th_dl.innerHTML='<a href=""  target="_blank" class="ajax nfo"  id="dl_button"></a>';
		document.getElementsByClassName("results")[j].tFoot.getElementsByTagName("tr")[0].appendChild(th_dl);
		
		var th_se = document.createElement('th');
		th_se.width="45px";
		th_se.innerHTML='<input type="checkbox" name="select_all" id="selectBox">'

		document.getElementsByClassName("results")[j].tFoot.getElementsByTagName("tr")[0].appendChild(th_se);
		
    };
}
document.getElementById('selectBox').addEventListener('click', function(){ toggle(this);},false);
document.getElementById('dl_button').addEventListener('click', function(){ getHtml();},false);
