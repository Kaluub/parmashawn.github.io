
function calculate() { //main calculation function

	const clan_modifier = document.getElementById("option_clan").value; 
	const worldlock_rate = document.getElementById("option_rate").value; //this will be an option for the rate of worldlocks
	let fish_total = 0, total_amount = 0;
	document.getElementById("label_option_rate").innerHTML = "Gems per World Lock: " + worldlock_rate;

	// Herring
	fish_total += (document.getElementById("het").value * 10) * clan_modifier;
	fish_total += (document.getElementById("hes").value * 40) * clan_modifier;
	fish_total += (document.getElementById("hem").value * 70) * clan_modifier;
	fish_total += (document.getElementById("hel").value * 100) * clan_modifier;
	fish_total += (document.getElementById("heh").value * 300) * clan_modifier;

	// Kingfish
	fish_total += (document.getElementById("kit").value * 10) * clan_modifier;
	fish_total += (document.getElementById("kis").value * 40) * clan_modifier;
	fish_total += (document.getElementById("kim").value * 70) * clan_modifier;
	fish_total += (document.getElementById("kil").value * 100) * clan_modifier;
	fish_total += (document.getElementById("kih").value * 300) * clan_modifier;

	// Butterflyfish
	fish_total += (document.getElementById("but").value * 15) * clan_modifier;
	fish_total += (document.getElementById("bus").value * 60) * clan_modifier;
	fish_total += (document.getElementById("bum").value * 105) * clan_modifier;
	fish_total += (document.getElementById("bul").value * 150) * clan_modifier;
	fish_total += (document.getElementById("buh").value * 450) * clan_modifier;

	// Goldfish
	fish_total += (document.getElementById("got").value * 15) * clan_modifier;
	fish_total += (document.getElementById("gos").value * 60) * clan_modifier;
	fish_total += (document.getElementById("gom").value * 105) * clan_modifier;
	fish_total += (document.getElementById("gol").value * 150) * clan_modifier;
	fish_total += (document.getElementById("goh").value * 450) * clan_modifier;

	// Carp
	fish_total += (document.getElementById("cat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("cas").value * 80) * clan_modifier;
	fish_total += (document.getElementById("cam").value * 140) * clan_modifier;
	fish_total += (document.getElementById("cal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("cah").value * 600) * clan_modifier;

	// Halibut
	fish_total += (document.getElementById("hat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("has").value * 80) * clan_modifier;
	fish_total += (document.getElementById("ham").value * 140) * clan_modifier;
	fish_total += (document.getElementById("hal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("hah").value * 600) * clan_modifier;

	// Sea Angler
	fish_total += (document.getElementById("set").value * 30) * clan_modifier;
	fish_total += (document.getElementById("ses").value * 120) * clan_modifier;
	fish_total += (document.getElementById("sem").value * 210) * clan_modifier;
	fish_total += (document.getElementById("sel").value * 300) * clan_modifier;
	fish_total += (document.getElementById("seh").value * 900) * clan_modifier;
	
	// Tuna
	fish_total += (document.getElementById("tut").value * 40) * clan_modifier;
	fish_total += (document.getElementById("tus").value * 160) * clan_modifier;
	fish_total += (document.getElementById("tum").value * 280) * clan_modifier;
	fish_total += (document.getElementById("tul").value * 400) * clan_modifier;
	fish_total += (document.getElementById("tuh").value * 1200) * clan_modifier;

	// Acid Puffer
	fish_total += (document.getElementById("act").value * 80) * clan_modifier;
	fish_total += (document.getElementById("acs").value * 320) * clan_modifier;
	fish_total += (document.getElementById("acm").value * 560) * clan_modifier;
	fish_total += (document.getElementById("acl").value * 800) * clan_modifier;
	fish_total += (document.getElementById("ach").value * 2400) * clan_modifier;

	// Dumbfish
	fish_total += (document.getElementById("dut").value * 5) * clan_modifier;
	fish_total += (document.getElementById("dus").value * 10) * clan_modifier;
	fish_total += (document.getElementById("dum").value * 30) * clan_modifier;
	fish_total += (document.getElementById("dul").value * 50) * clan_modifier;
	fish_total += (document.getElementById("duh").value * 100) * clan_modifier;

	// Piranha
	fish_total += (document.getElementById("pit").value * 30) * clan_modifier;
	fish_total += (document.getElementById("pis").value * 120) * clan_modifier;
	fish_total += (document.getElementById("pim").value * 210) * clan_modifier;
	fish_total += (document.getElementById("pil").value * 300) * clan_modifier;
	fish_total += (document.getElementById("pih").value * 900) * clan_modifier;

	// Topaz
	fish_total += (document.getElementById("tot").value * 3);
	fish_total += (document.getElementById("tos").value * 6);
	fish_total += (document.getElementById("tom").value * 12);
	fish_total += (document.getElementById("tol").value * 30);
	fish_total += (document.getElementById("toh").value * 90);

	// Emerald
	fish_total += (document.getElementById("emt").value * 5);
	fish_total += (document.getElementById("ems").value * 10);
	fish_total += (document.getElementById("emm").value * 20);
	fish_total += (document.getElementById("eml").value * 50);
	fish_total += (document.getElementById("emh").value * 150);

	// Sapphire
	fish_total += (document.getElementById("sat").value * 10);
	fish_total += (document.getElementById("sas").value * 20);
	fish_total += (document.getElementById("sam").value * 40);
	fish_total += (document.getElementById("sal").value * 100);
	fish_total += (document.getElementById("sah").value * 300);

	// Ruby
	fish_total += (document.getElementById("rut").value * 20);
	fish_total += (document.getElementById("rus").value * 40);
	fish_total += (document.getElementById("rum").value * 80);
	fish_total += (document.getElementById("rul").value * 200);
	fish_total += (document.getElementById("ruh").value * 600);

	// Diamond
	fish_total += (document.getElementById("dit").value * 30);
	fish_total += (document.getElementById("dis").value * 60);
	fish_total += (document.getElementById("dim").value * 120);
	fish_total += (document.getElementById("dil").value * 300);
	fish_total += (document.getElementById("dih").value * 900);
	
	// Gem Pouches
	fish_total += (document.getElementById("sgp").value * 200);
	fish_total += (document.getElementById("mgp").value * 1000);
	fish_total += (document.getElementById("lgp").value * 10000);

	
	
	// Find and set the boxes for total gems, total wls, and total byte
	var total_gems = document.getElementById("total_gems");
	var total_wl = document.getElementById("total_wl");
	var total_bc = document.getElementById("total_bc");
	
	total_gems.value = Math.floor(fish_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	total_wl.value = Math.floor(fish_total / worldlock_rate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	total_bc.value = Math.floor(fish_total / (worldlock_rate / 300)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // byte is set to 300, but a option might be added in the future
	
	generatelink();
	progressbar();
}

function generatelink() {
	let link = window.location.href.split('#')[0] + "#";
	let inputs = document.getElementsByClassName("calc-input");
	let i;
	for (i=0; i < inputs.length; i++) { // adds all fish and gemstones to link if value above zero
		if (inputs[i].value > 0) {
			inputs[i].style.background = "#c2ffd2";
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		} else {
			inputs[i].style.background = "white";
		};
	};
	if (document.getElementById("option_rate").value != 2500) {let str = "option_rate" + "=" + document.getElementId("option_rate").value + "&"; link += str;}
	if (link.slice(0, -1) == window.location.href.split('#')[0]) {document.getElementById("share").value = "...";}
	else {document.getElementById("share").value = link.slice(0, -1);}
	
};

function load() {
	let hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
	for(var i = 0; i < hashParams.length; i++){
		var p = hashParams[i].split('=');
		document.getElementById(p[0]).value = decodeURIComponent(p[1]);
	};
	calculate();
};

function copylink() {
	var copyText = document.getElementById("share");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	 document.execCommand("copy");
};

function progressbar() {
	let inputtotal = 0;
	const inputs = document.getElementsByClassName("calc-input");
	let i;

	let fish_total = 0;
	const clan_modifier = document.getElementById("option_clan").value; 

	let hetotal = 0, kitotal = 0, butotal = 0, gototal = 0, catotal = 0, hatotal = 0, setotal = 0, tutotal = 0, actotal = 0, dutotal = 0, pitotal = 0,
	tototal = 0, emtotal = 0, satotal = 0, rutotal = 0, ditotal = 0;


	// Herring
	hetotal += (document.getElementById("het").value * 10);
	hetotal += (document.getElementById("hes").value * 40);
	hetotal += (document.getElementById("hem").value * 70);
	hetotal += (document.getElementById("hel").value * 100);
	hetotal += (document.getElementById("heh").value * 300);

	// Kingfish
	kitotal += (document.getElementById("kit").value * 10);
	kitotal += (document.getElementById("kis").value * 40);
	kitotal += (document.getElementById("kim").value * 70);
	kitotal += (document.getElementById("kil").value * 100);
	kitotal += (document.getElementById("kih").value * 300);

	// Butterflyfish
	butotal += (document.getElementById("but").value * 15);
	butotal += (document.getElementById("bus").value * 60);
	butotal += (document.getElementById("bum").value * 105);
	butotal += (document.getElementById("bul").value * 150);
	butotal += (document.getElementById("buh").value * 450);

	// Goldfish
	gototal += (document.getElementById("got").value * 15);
	gototal += (document.getElementById("gos").value * 60);
	gototal += (document.getElementById("gom").value * 105);
	gototal += (document.getElementById("gol").value * 150);
	gototal += (document.getElementById("goh").value * 450);

	// Carp
	catotal += (document.getElementById("cat").value * 20);
	catotal += (document.getElementById("cas").value * 80);
	catotal += (document.getElementById("cam").value * 140);
	catotal += (document.getElementById("cal").value * 200);
	catotal += (document.getElementById("cah").value * 600);

	// Halibut
	hatotal += (document.getElementById("hat").value * 20);
	hatotal += (document.getElementById("has").value * 80);
	hatotal += (document.getElementById("ham").value * 140);
	hatotal += (document.getElementById("hal").value * 200);
	hatotal += (document.getElementById("hah").value * 600);

	// Sea Angler
	setotal += (document.getElementById("set").value * 30);
	setotal += (document.getElementById("ses").value * 120);
	setotal += (document.getElementById("sem").value * 210);
	setotal += (document.getElementById("sel").value * 300);
	setotal += (document.getElementById("seh").value * 900);
	
	// Tuna
	tutotal += (document.getElementById("tut").value * 40);
	tutotal += (document.getElementById("tus").value * 160);
	tutotal += (document.getElementById("tum").value * 280);
	tutotal += (document.getElementById("tul").value * 400);
	tutotal += (document.getElementById("tuh").value * 1200);

	// Acid
	actotal += (document.getElementById("act").value * 80);
	actotal += (document.getElementById("acs").value * 320);
	actotal += (document.getElementById("acm").value * 560);
	actotal += (document.getElementById("acl").value * 800);
	actotal += (document.getElementById("ach").value * 2400);

	// Dumbfish
	dutotal += (document.getElementById("dut").value * 5);
	dutotal += (document.getElementById("dus").value * 10);
	dutotal += (document.getElementById("dum").value * 30);
	dutotal += (document.getElementById("dul").value * 50);
	dutotal += (document.getElementById("duh").value * 100);

	// Piranha
	pitotal += (document.getElementById("pit").value * 30);
	pitotal += (document.getElementById("pis").value * 120);
	pitotal += (document.getElementById("pim").value * 210);
	pitotal += (document.getElementById("pil").value * 300);
	pitotal += (document.getElementById("pih").value * 900);

	// Topaz
	tototal += (document.getElementById("tot").value * 3);
	tototal += (document.getElementById("tos").value * 6);
	tototal += (document.getElementById("tom").value * 12);
	tototal += (document.getElementById("tol").value * 30);
	tototal += (document.getElementById("toh").value * 90);

	// Emerald
	emtotal += (document.getElementById("emt").value * 5);
	emtotal += (document.getElementById("ems").value * 10);
	emtotal += (document.getElementById("emm").value * 20);
	emtotal += (document.getElementById("eml").value * 50);
	emtotal += (document.getElementById("emh").value * 150);

	// Sapphire
	satotal += (document.getElementById("sat").value * 10);
	satotal += (document.getElementById("sas").value * 20);
	satotal += (document.getElementById("sam").value * 40);
	satotal += (document.getElementById("sal").value * 100);
	satotal += (document.getElementById("sah").value * 300);

	// Ruby
	rutotal += (document.getElementById("rut").value * 20);
	rutotal += (document.getElementById("rus").value * 40);
	rutotal += (document.getElementById("rum").value * 80);
	rutotal += (document.getElementById("rul").value * 200);
	rutotal += (document.getElementById("ruh").value * 600);

	// Diamond
	ditotal += (document.getElementById("dit").value * 30);
	ditotal += (document.getElementById("dis").value * 60);
	ditotal += (document.getElementById("dim").value * 120);
	ditotal += (document.getElementById("dil").value * 300);
	ditotal += (document.getElementById("dih").value * 900);
	
	let fishbar_total = hetotal + kitotal + butotal + gototal + catotal + hatotal + setotal + tutotal + actotal + dutotal + pitotal + tototal + emtotal + satotal + rutotal + ditotal;
	
	document.getElementById("hep").style.width = ((hetotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("hep").innerHTML = "Herring " + Math.round((hetotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("kip").style.width = ((kitotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("kip").innerHTML = "Kingfish " + Math.round((kitotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("bup").style.width = ((butotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("bup").innerHTML = "Butterflyfish " + Math.round((butotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("gop").style.width = ((gototal / fishbar_total) * 100).toString() + '%';
	document.getElementById("gop").innerHTML = "Goldfish " + Math.round((gototal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("cap").style.width = ((catotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("cap").innerHTML = "Carp " + Math.round((catotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("hap").style.width = ((hatotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("hap").innerHTML = "Halibut " + Math.round((hatotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("sep").style.width = ((setotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("sep").innerHTML = "Sea Angler " + Math.round((setotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("tup").style.width = ((tutotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("tup").innerHTML = "Tuna " + Math.round((tutotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("acp").style.width = ((actotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("acp").innerHTML = "Acid Puffer " + Math.round((actotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("dup").style.width = ((dutotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("dup").innerHTML = "Dumbfish " + Math.round((dutotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("pip").style.width = ((pitotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("pip").innerHTML = "Piranha " + Math.round((pitotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("top").style.width = ((tototal / fishbar_total) * 100).toString() + '%';
	document.getElementById("top").innerHTML = "Topaz " + Math.round((tototal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("emp").style.width = ((emtotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("emp").innerHTML = "Emerald " + Math.round((emtotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("sap").style.width = ((satotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("sap").innerHTML = "Sapphire " + Math.round((satotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("rup").style.width = ((rutotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("rup").innerHTML = "Ruby " + Math.round((rutotal / fishbar_total) * 100).toString() + '%';
	
	document.getElementById("dip").style.width = ((ditotal / fishbar_total) * 100).toString() + '%';
	document.getElementById("dip").innerHTML = "Diamond " + Math.round((ditotal / fishbar_total) * 100).toString() + '%';

};
