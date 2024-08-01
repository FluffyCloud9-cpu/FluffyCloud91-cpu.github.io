document.getElementById('toggle-button').addEventListener('click', function() {
    const emailMessage = document.getElementById('email-message');
    const backgroundMusic = document.getElementById('background-music');

    if (emailMessage.style.opacity === '0' || emailMessage.style.opacity === '') {
        
        emailMessage.style.display = 'block';
        setTimeout(() => {
            emailMessage.style.opacity = '1';
        }, 0);

        
        backgroundMusic.play().catch(error => {
            console.log("Audio play error:", error);
        });
        
        this.textContent = '💌';
    } else {
        
        emailMessage.style.opacity = '0'; 
        setTimeout(() => {
            emailMessage.style.display = 'none'; 
        }, 2000); 

        
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; 

        this.textContent = '💌';
    }
});
