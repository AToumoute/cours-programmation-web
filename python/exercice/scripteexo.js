//let motproposer = "ecole";
//let mottaper = prompt("taper le mols magic")



//if ( motproposer == mottaper )
//{
//    motproposer="bonsoir"
//    console.log("parfait")
//}
//else
//{ 
//    console.log("taper a nouveau le mots")
//reload()}

//function countTrue(arr) {

//	let compteur= 0
//	for ( let i=0 ; i< arr.length; i++ )
//	{

//		if( arr[i]===true )
//		{
//            compteur +=1
//        }
//	}

//	return compteur
//}

let arr = [64,[25],12,22,[11]];
let sortedarr = [];
let lenarr= arr.length;

for (let j=0 ;j <  lenarr; j++) {
	let minarr= arr[0]

	for(let i=0 ; i<arr.length ; i++) 
	{
		if (arr[i] < minarr){ 
			minarr=arr[i]
		}
		
	}	

	sortedarr.push(minarr)
	arr.splice(arr.indexOf(minarr),1);
	
};

console.log("ancien Array:",arr) ;
console.log("nouveau array:",sortedarr);


let eltheader= document.getElementById("nav")
console.log(eltheader)



