document.addEventListener("DOMContentLoaded", function () {
        const modalId = "popupModal"; // ID modal yang ingin diubah
        const bgColor = "rgba(0, 0, 0, 0.5)"; // Warna latar belakang yang diinginkan
    
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.addEventListener("show.bs.modal", function () {
                const modalContent = modal.querySelector(".modal-content"); // Target hanya dalam modal dengan ID ini
                if (modalContent) {
                    // Simpan warna asli sebelum mengubahnya
                    if (!modalContent.dataset.originalBg) {
                        modalContent.dataset.originalBg = modalContent.style.backgroundColor;
                            modalContent.dataset.borderRadius = modalContent.style.borderRadius;
                    }
                    modalContent.style.backgroundColor = bgColor;
                        modalContent.style.borderRadius = '25px';
                
                }
            });
    
            modal.addEventListener("hidden.bs.modal", function () {
                const modalContent = modal.querySelector(".modal-content");
                if (modalContent && modalContent.dataset.originalBg) {
                    // Kembalikan warna asli saat modal ditutup
                    modalContent.style.backgroundColor = modalContent.dataset.originalBg;
                        modalContent.style.borderRadius = modalContent.dataset.originalBg;
                }
            });
        }
    });
