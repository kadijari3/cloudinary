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
						<a href="/game?provider=1001&category=101"><img src="https://ajaibcloud.org/uploads/193d52bd-b6c3-47d0-a62d-40697317b0a7.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1004&category=101"><img src="https://ajaibcloud.org/uploads/78273974-147b-4ecc-a367-682934996a9c.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=2029&category=101"><img src="https://ajaibcloud.org/uploads/0b8a71dc-52cf-408c-bb6e-c393a9f0a24d.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1002&category=101"><img src="https://ajaibcloud.org/uploads/3b6f8fdb-d002-4aff-ab18-84c436fa9c9f.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
					</div>
					<!-- Kolom 2 -->
					<div style="display: flex; flex-direction: column; gap: 10px;">
						<a href="/game?provider=1003&category=101"><img src="https://ajaibcloud.org/uploads/69f5ffb7-930c-415c-9651-6aff5abe44b3.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1211&category=101"><img src="https://ajaibcloud.org/uploads/c3e51919-3fc9-4bf5-8ffb-045fd5f87db7.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1010&category=101"><img src="https://ajaibcloud.org/uploads/89f14cc3-d591-4b32-bd92-35d8d4b63258.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
						<a href="/game?provider=1203&category=101"><img src="https://ajaibcloud.org/uploads/c7a8efbe-b7f2-4549-81c7-12665948b44f.webp" style="width: 100%; height: auto; border-radius: 4px;"></a>
					</div>
				</div>
			</div>
			</div>`;

			targetElement.insertAdjacentHTML('afterend', gifHtmlContent);
		};
