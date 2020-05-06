var open = document.getElementById('hamburger');
		var changeIcon = true;

		open.addEventListener("click", function(){
			var nav = document.querySelector('nav');
			var icon = document.querySelector('.menu-toggle i');

			nav.classList.toggle("menu-open");

			if (changeIcon) {
				icon.classList.remove("fa-bars");
				icon.classList.add("fa-times");

				changeIcon = false;
			}
			else {
				icon.classList.remove("fa-times");
				icon.classList.add("fa-bars");
				changeIcon = true;
			}
		});
