
        document.addEventListener("DOMContentLoaded", function() {
            console.log("DOMContentLoaded - Memulai eksekusi script");
            
            var navbawah = document.querySelector('nav.menubar.navbar.fixed-bottom.navbar-dark.bg-dark.p-0');
            
            if (!navbawah) {
                console.log("Selector pertama tidak ditemukan, mencoba selector alternatif...");
                navbawah = document.querySelector('nav.menubar.navbar.fixed-bottom');
            }
            
            if (!navbawah) {
                console.log("Selector kedua tidak ditemukan, mencoba selector lebih umum...");
                navbawah = document.querySelector('nav.navbar.fixed-bottom');
            }
            
            if (navbawah) {
                console.log("Navbar bawah ditemukan:", navbawah);
                
                var items = navbawah.querySelectorAll('.item');
                
                if (items.length === 0) {
                    console.log("Tidak ada elemen dengan class 'item', mencari alternatif...");
                    items = navbawah.querySelectorAll('a, button, div');
                }
                
                console.log("Jumlah item ditemukan:", items.length);
                
                var gambarBaru = {
                    "Home": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108home.webp",
                    "Login": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108login.webp",
                    "Daftar": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108daftar.webp",
                    "Promosi": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108promo.webp",
                    "Deposit": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108depo.webp",
                    "Withdraw": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108wede.webp",
                    "Live Chat": "https://ajaibcloud.sgp1.cdn.digitaloceanspaces.com/iconqris108livechat.webp"
                };
                
                items.forEach((item, index) => {
                    console.log(`Memproses item ${index + 1}:`, item);
                    
                    var textDiv = item.querySelector('div div');
                    if (!textDiv) {
                        textDiv = item.querySelector('.navbar-text, .nav-link, span, div');
                    }
                    
                    var img = item.querySelector('img');
                    
                    if (textDiv && img) {
                        var textName = textDiv.textContent.trim();
                        console.log(`Item ${index + 1}: Teks ditemukan - "${textName}"`);
                        
                        if (gambarBaru[textName]) {
                            console.log(`Mengganti gambar untuk "${textName}"`);
                            img.src = gambarBaru[textName];
                            
                            img.onerror = function() {
                                console.error(`Gagal memuat gambar untuk "${textName}": ${this.src}`);
                            };
                        } else {
                            console.log(`Tidak ada gambar pengganti untuk "${textName}"`);
                        }
                      
                        textDiv.style.color = '#E7FFFF';
                        textDiv.style.fontWeight = 'bold';
                        textDiv.style.transition = 'color 0.3s ease';
                    } else {
                        console.log(`Item ${index + 1}: Teks atau gambar tidak ditemukan`);
                        if (!textDiv) console.log(" - Teks tidak ditemukan");
                        if (!img) console.log(" - Gambar tidak ditemukan");
                    }
                });
                
                console.log("Proses penggantian ikon selesai");
            } else {
                console.error("Navbar bawah tidak ditemukan. Periksa struktur HTML dan selector.");
            }
        });

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            console.log("Document sudah siap, menjalankan script...");
        }
