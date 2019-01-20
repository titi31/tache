var taches = document.getElementById('taches');
var tache = document.getElementById('tache');
var afaire = document.getElementById('afaire');
var fait = document.getElementById('fait');
var toutes = document.getElementById('toutes');
var ajout = document.getElementById('ajout');
var i=0;
var dive=document.createElement('div');
taches.appendChild(dive);


//declaration des variables
function ajoutTache()//declaration de fonction
{
	i++;
	var label=document.createElement('label');
	var checkbox=document.createElement('input');
	checkbox.setAttribute('type','checkbox');
	var div=document.createElement('li');
	taches.appendChild(div);
	div.appendChild(checkbox);
	div.appendChild(label);

	div.classList.add('list-group-item');

	label.id="customControlValidation"+i;

	label.htmlFor="customControlValidation"+i;
	label.style.color="red";
	label.style.fontSize="20px";
	label.fontWeight="100%";
	checkbox.id="customControlValidation"+i;
	checkbox.name=i;
	label.style.display="inline";
	label.style.marginLeft="20px";
	label.classList.add("check");
	checkbox.classList.add("box");
	label.innerHTML=tache.value+"<br>";
	checkbox.addEventListener
	("click",function ()
	{
		
		
		if (checkbox.checked==true){
		dive.classList.add("alert");
			dive.classList.add("alert-success");
			dive.innerHTML="tache faite";
			$(".alert").fadeIn("slow",function(){
		$(this).fadeOut("slow");
	});
		}
		label.style.textDecoration="line-through";
		if(checkbox.checked==false)
		{
			
			
			label.style.textDecoration="none";	
		}
		
	}
	)
	tache.value="";

}
ajout.addEventListener
("click",function () 
{
	if (tache.value=="")
	{
		console.log('entrer un truc');
	}else
	{
	ajoutTache();
	}
}
)
tache.addEventListener
("keydown",function (e)
{
	if (e.keyCode==13)
	{
		if (tache.value==""){console.log('entrez un truc');
	}
		else
	{
		ajoutTache();
	}
	}
}
)
var check=document.querySelectorAll('input:checked');
var label=document.getElementsByClassName('check');
var li=document.getElementsByClassName('list-group-item');
function faire(bool)
{
	for (var i=0;i<label.length;i++)
	{
		var box=document.getElementById("customControlValidation"+(i+1))
		if(box.checked==bool)
		{	
			box.classList.add("d-none");
			
			
			
			
			label[i].classList.add("d-none");
		
			box.classList.remove("d-inline");
			
			label[i].classList.remove("d-inline");
		
		}
	else
		{
	
			
			box.classList.add("d-inline");
			
			
			label[i].classList.add("d-inline");
			
			box.classList.remove("d-none");
			
			label[i].classList.remove("d-none");
			
		}
	}
}

afaire.addEventListener("click",function (){
	faire(true);
	
		
})

fait.addEventListener("click",function (){
	faire(false);
	
	
})

toutes.addEventListener
("click",function toutetache()
{
	for (var i=0;i<label.length;i++)
	{
		var box=document.getElementById("customControlValidation"+(i+1));
	
		box.classList.add("d-inline");
		
		
		label[i].classList.add("d-inline");
		
		box.classList.remove("d-none");
		
		label[i].classList.remove("d-none");
		
		
		

	}
}
)