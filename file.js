function generateOTP() {
    const otpLength = 6;
    let otp = '';
    const characters = '01234849274932843294829819482048012481204812048012401294';
    
    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    
    document.getElementById('otp').textContent = otp;
}

