var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Frank";
names[3]="Larry";
names[4]="jason";
names[5]="Jim";
names[6]="jack";
names[7]="Paul";
names[8]="Quin Brian";
names[9]="Jen";

for(var i=0; i < names.length; i++){
	if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j')
	{
        console.log("Goodbye " + names[i])
	}
	else {
		console.log("hello " +names[i])
	}
}