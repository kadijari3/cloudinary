		jQuery(document).ready(function() {
			var capekkali = document.getElementById('announcement');
			//var capekkali = document.querySelector('div.my-5.p-3.rounded-3.glassmorphism');
			if (!capekkali) {
				return;
			}
			var gifHtmlContent = `
			<div style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;" id="navigasi" class="container">
				<div style="background-color: rgba(0, 0, 0, 0);" >
					<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; text-align: center;">
						<div style="display: flex; flex-direction: column; gap: 10px;">
							<a href="/game?category=101"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/homeiconsl.gif" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
						<div style="display: flex; flex-direction: column; gap: 10px;">							
							<a href="/game?category=102"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/homeiconc.gif" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
						<div style="display: flex; flex-direction: column; gap: 10px;">		
							<a href="/sport"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/homeiconsp.gif" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
						<div style="display: flex; flex-direction: column; gap: 10px;">
							<a href="/togel"><img src="https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/homeiconl.gif" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
					</div>
				</div>
			</div>`;			
      	jQuery(gifHtmlContent).insertBefore(capekkali);
		});
