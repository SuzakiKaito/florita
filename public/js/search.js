const Search = document.getElementById("search");
const text = document.querySelectorAll(".box h3");
const Box = document.querySelectorAll(".box");
const image = document.querySelectorAll(".box img");
// console.log(search,text,Box,image);

Search.addEventListener("input",function(){
  console.log("focus");
  let textResult = [].filter.call(text, function(elem){
    // console.log(elem.innerText, Name.value);
    // return elem.innerText == Name.value
    console.log((new RegExp(Search.value)))
    return (new RegExp(Search.value)).test(elem.innerText)
  });

  if( textResult.length >= 1) {
    text.forEach(function(elem){
      const wrapper = elem.closest(".box");
      wrapper.style.display = "none"
      // elem.style.backgroundColor = "blue"
    });
    textResult.forEach(function(elem) {
      const wrapper = elem.closest(".box");
      wrapper.style.display = "block"
      // elem.style.backgroundColor = "tomato"
    })
  }
  console.log(textResult);
})
