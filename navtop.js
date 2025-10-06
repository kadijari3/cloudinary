		document.addEventListener("DOMContentLoaded", function() {
		const categoryNavbar = document.getElementById('category-navbar');

		if (categoryNavbar) {
			const items = categoryNavbar.querySelectorAll('.item');
			const gambarBaru = {
			"Home": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108home.webp",
			"Slot": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108lot.webp",
			"Casino": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108casi.webp",
			"Sport": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108sport.webp",
			"Table": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108tab.webp",
			"Togel": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108tog.webp",
			"Fishing": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108fish.webp",
			"COCK F.": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108cock.webp",
			"Arcade": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108arcade.webp",
			"Promo": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108promo.webp",
			"MEGAGACOR": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108maxwin.webp"
			};

			items.forEach(item => {
			const textDiv = item.querySelector('div div'); // <div style="font-size:0.65em">Home</div>
			const img = item.querySelector('img');

			if (textDiv && img) {
				const textName = textDiv.textContent.trim();

				if (gambarBaru[textName]) {
				img.src = gambarBaru[textName];
				}

				textDiv.style.fontWeight = 'bold';
				textDiv.style.transition = 'all 60s ease';
			}
			});
		}
		});
