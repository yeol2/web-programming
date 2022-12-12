var li = document.getElementsByClassName("li");

function init() {
	alert("대한민국의 16강 진출을 축하합니다!") ;

	for (var i = 0; i < li.length; i++) {
	  li[i].addEventListener("click", handleClick);
	}
  }

function handleClick(event) {
	if (event.target.classList[1] === "clicked") {
	event.target.classList.remove("clicked");
  } else {
	for (var i = 0; i < li.length; i++) {
	  li[i].classList.remove("clicked");
	}

	event.target.classList.add("clicked");
  }
}