//Code by Eres
function addPasswordToggle() {
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        document.head.appendChild(link);
    }
    const jangankampungandek = document.getElementById('password');
    const asikkauajayangkesini = document.getElementById('confirmpassword');
    
    const fields = [
        { field: jangankampungandek, id: 'togglePassword' },
        { field: asikkauajayangkesini, id: 'toggleConfirmPassword' }
    ];
    
    fields.forEach((item) => {
        const field = item.field;
        if (!field) return;
        
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.width = '100%';
        
        field.parentNode.insertBefore(wrapper, field);
        wrapper.appendChild(field);
        
        field.style.paddingRight = '35px';
        
        const toggleIcon = document.createElement('button');
        toggleIcon.type = 'button';
        toggleIcon.innerHTML = '<i class="bi bi-eye"></i>';
        toggleIcon.style.position = 'absolute';
        toggleIcon.style.right = '5px';
        toggleIcon.style.top = '50%';
        toggleIcon.style.transform = 'translateY(-50%)';
        toggleIcon.style.cursor = 'pointer';
        toggleIcon.style.color = '#c80000';
        toggleIcon.style.background = 'transparent';
        toggleIcon.style.border = 'none';
        toggleIcon.style.padding = '5px';
        toggleIcon.style.zIndex = '5';
        toggleIcon.style.fontSize = '18px';

        wrapper.appendChild(toggleIcon);
        
        toggleIcon.addEventListener('click', function() {

            const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
            field.setAttribute('type', type);
            
            const icon = this.querySelector('i');
            if (type === 'password') {
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
                this.title = 'Tampilkan password';
            } else {
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
                this.title = 'Sembunyikan password';
            }
        });
        
        toggleIcon.title = 'Tampilkan password';
    });
}

document.addEventListener('DOMContentLoaded', function() {addPasswordToggle();});
