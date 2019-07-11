


const body = document.querySelector('body');

const main = document.querySelector('main');

function randomArr(arr, num) {
	console.log(num)
	var rand = [],
		lns = arr.length;
	for (i = 0; i < num; i++) {
		rand[i] =
	arr[Math.floor(Math.random() * lns)];
	}
	return rand;
}
var all = "0123456789abcdef",
	colorList = [];
// const arrColors =[
//     "#FF5722","#d1edee","bb1133","ff4f00","bc012e","ee3300","ff4400","ee2222","#ce1127"
// ];
let arrColors=["#15151c","#ff44ee","#fcefc1","#fff7d8","#e2bea2","#ccddff","#b2a5d3","#78342f","#fcf0e5","#fffbe8","#e5d2dd","#acdfdd","#ee0033","#cd5b26","#2dfe54","#fcd917","#f8a39d","#726e68","#d0d557","#dfe6ea","#8d725a","#dde3e6","#f4ebd0","#6d434e","#a5a943","#eeee33","#00ee00","#f9e7c8","#ffebd1","#a47bac","#dceedb","#ebe5d5","#f2f3ce","#2ba727","#364141","#ab8a68","#f5e4de","#1f2847","#f2eeaf","#b1b2c4","#f9d97b","#d9e6ee","#f9eed6","#fff1dc","#a3b8ce","#fef9d3","#9bbc0f","#feffea","#af5941","#fff6b9","#976f3c","#d7e0e7","#fce974","#fe9773","#484a80","#dfc16d","#ffe536","#3aafdc","#1bfc06","#85569c","#d72e83","#f39539","#ea5a79","#e94f58","#009e6c","#f1e740","#d2b395","#eddbda","#5d76cb","#a7c9eb","#a8acb7","#dfcaaa","#475f94","#e7dfe3","#cce7e8","#d4d3e0","#dad4e4","#c9d4e1","#decfd2","#c2d1e2","#ded0d8","#abd5dc","#f5efe8","#d5d4d0","#ecddd6","#add8e6","#cdd2de","#d2d3e1","#a8d3e1","#b7c9e2","#b7d2e3","#bed7f0","#c6dde4","#c0d8eb","#a4dbe4","#e9c4cc","#add2e3","#cfe0f2","#94d0e9","#b5651d","#d6d5d2","#9ed6e8","#deced1","#c6d4e1","#c9d2df","#dbd9c9","#f9dbcf","#d8f3d7","#d8decf","#dbe2cc","#d8f2dc","#e0d5c9","#dfd3ca","#d5dad1","#afd5d8","#c3ece9","#93ccea","#ddd7d1","#cbd7ed","#f9e9c9","#e0ffff","#c2e4e7","#c6dedf","#e2d9d2","#fce9d5","#9ed1e3","#a4d4ec","#cddbdc","#c4dadd","#a7aea5","#d4e3d7","#d5ebdd","#d4ced1","#e5deca","#d9d2c9","#ead5c7","#d8cdd3","#d6eadb","#f3ded7","#ead3e0","#c1d8eb","#ebe0cf","#fce6db","#e2f4d7","#ecf4d2","#ede8d7","#d7efd5","#e6d2dc","#d2d9cd","#d4cfcc","#d7d3ca","#e2e1c8","#c0b5aa","#76ff7b","#d5d8c9","#d7ddcd","#dce0cd","#e5f4d5","#e8f4d2","#d4e6d9","#e2f0d2","#d7d4e4","#d8dcd6","#bacad4","#cdd6ea","#dccfce","#e5ddcb","#d0d2de","#eddbd7","#bbe4ea","#d8ded0","#d0d4e3","#ccd0da","#aed4d8","#e2d9d4","#dbe4d1","#acd6db","#bce6e8","#d6ead8","#d3d2dd","#e0eed4","#d6d9cb","#efc0fe","#e3d2cf","#ddd6e7","#d9e0d0","#eed2d7","#c8ffb0","#d3e7dc","#dcc6d2","#d7d2e2","#d8e6ce","#dbd5ce","#dad1d7","#e7d9d4","#d8d7ca","#d1f0dd","#dcd5d3","#aa5511","#f6ddce","#e3dbd0","#d3e1d3","#f4dddb","#d1efdd","#c292a1","#cee1d9","#b6ffbb","#a6fbb2","#ded5e2","#c4d9eb","#d8cdd0","#b8d3e4","#d6e4d4","#e2d4e1","#f4dcdc","#e3d8d4","#cbd3e6","#eaf3d0","#acbf69","#c1e8ea","#dad7e8","#e6a8d7","#d6cdd0","#e1d4e8","#cde7dd","#ccdfdc","#d3cccd","#ced5e4","#d4cbce","#dbdacb","#b2fba5","#d5d3e3","#dcd6d1","#e1ced4","#c8d4e7","#d0d0d7","#c1c6fc","#e0d5cd","#f0d7d7","#ecdbd6","#cde5de","#ffd1df","#fedfdc","#ddced1","#ebdcd7","#e9d3d5","#d8c9cc","#fad9da","#d8d6cc","#e2dec8","#c8d8e8","#ebe1cb","#bee0e2","#e7dad7","#c4d9ef","#d1d6eb","#c5d0d9","#ead4e0","#d9ced5","#c2d2d8","#e0d5e9","#cdded7","#fde1d4","#c6d5ea","#ecdfca","#e7d8ea","#f3d3d9","#caddde","#c3d5e5","#615544","#f4d4d6","#f3dcd8","#fea993","#ccf1e3","#bbd3da","#dedcc6","#e1dacf","#b7cdd9","#b9d4e7","#abd6de","#a0febf","#a7ffb5","#e0e9d0","#f1e8ce","#fce0d6","#e7dccf","#a3d4ef","#cbe8df","#cef2e4","#d5dfd3","#d4dbd1","#cee3d9","#a1d0e2","#afcfe0","#bad7dc","#c2e3e8","#cfd1d8","#d1e2d8","#d5e3d0","#cedcd4","#cfe0d7","#dcddcc","#cfded7","#c3cad3","#d8eee7","#e0cfd2","#d6e8d5","#e3e3d7","#c7d2dd","#cbd0d7","#c9e7e3","#d2ccd1","#b0c4de","#e4dad3","#cde5e2","#deedd4","#b19d8d","#d5d0cb","#bbd6ea","#e2d8d4","#bcd6e9","#c5d2df","#dfd2d9","#e1d0d8","#7ef4cc","#bfe7ea","#b8ced9","#d8d5d0","#d6b4fc","#dcd9eb","#d4ccce","#dbd6d3","#acdce7","#bfd5eb","#c2f0e6","#b7dadd","#e6dad6","#b5d1df","#e0d4d0","#99d0e7","#cedcd6","#fffe7a","#c2ff89","#ead7d5","#d1dbd2","#75fd63","#a55af4","#e4eadf","#f7e0e1","#c7a1a9","#f3f4f4","#f8d568","#d9dcd5","#3d7afd","#61e160","#a552e6","#fe2f4a","#e5ebe6","#93b9df","#efde74","#f7a233","#f8f2de","#3d474b","#15f2fd","#d7c1ba","#befd73","#f0e87d","#cdc2ca","#a18899","#e1ebde","#ffeeff","#bbaeb9","#9b959c","#bb989f","#f0eeeb","#bf3160","#f0f1ce","#c99387","#ffe7d5","#f6eed5","#506886","#c7e5df","#e0efe9","#eae0d4","#e9b6c1","#f1ebc8","#a6d292","#675754","#e6f0ea","#7b6c8e","#ffc355","#b1fc99","#f0e7a9","#ff8ad8","#130173","#e9eadb","#ff0055","#b2c8dd","#db5079","#f7d994","#eff0bf","#fffedf","#e5e7e8","#47413b","#c8e0e0","#cfc9c5","#cb904e","#f1ddd8","#e6cfce","#92d2ed","#dce4dd","#f7eacf","#faf0c9","#f3e9cf","#faeacd","#bcc0cc","#b5ced4","#fff4dd","#edd59e","#dd4411","#f7f2dd","#f7d60d","#f6f4ef","#eef4db","#fbedb8","#f69a54","#9cd572","#93bcbb","#4e518b","#0a437a","#8a496b","#dac0cd","#8b6f70","#66648b","#71898d","#a79994","#7b85c6","#e5e6d7","#fffac1","#2e328f","#0098c8","#b2b0bd","#cfd5d7","#d5ffff","#fff9d8","#f9f3db","#5959ab"]
lns = arrColors.length;



let root = document.documentElement;

body.addEventListener("click", () => {
    rand = Math.floor(Math.random() * lns);
    all.split("");
    var newColor ="#" + randomArr(all, 6).join('');
    let colorRandom = arrColors[rand];
    //console.log("color: "+colorRandom);
    
    //root.style.setProperty('--colorPrincipal', colorRandom);

    var currentClass = main.className;

    main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
   
});
