//Code by Eres
		window.onload = function() {
			var targetElement = document.getElementById('announcement');
			if (!targetElement) {
				return;
			}
			
			var gifHtmlContent = `
			<div style="padding: 10px 10px;" id="rekomendasigame" class="container">
			<div style="padding: 5px; border: 1px solid #ffbb00; border-radius: 8px; background:  background-color: rgba(0, 0, 0, 0.3);" >
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
					<!-- Kolom 1 -->
					<div style="display: flex; flex-direction: column; gap: 10px;">
						<a href="/game?provider=1001&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom3.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1004&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom1.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=2029&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom4.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1002&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom7.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
					</div>
					<!-- Kolom 2 -->
					<div style="display: flex; flex-direction: column; gap: 10px;">
						<a href="/game?provider=1003&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom6.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1211&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom2.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1010&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom5.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1203&category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/qris108/banner/gamerekom8.gif" style="width: 100%; height: auto; border-radius: 4px;"></a>
					</div>
				</div>
			</div>
			</div>`;

			targetElement.insertAdjacentHTML('afterend', gifHtmlContent);
		};
