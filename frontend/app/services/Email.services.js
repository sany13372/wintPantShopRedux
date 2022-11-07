import emailjs from '@emailjs/browser'

export const EmailServices = {

    async sendEmail(data){
        const emailContent = {
            from_name:data.namefooter,
            email:data.emailfooter,
            telephone:data.telephonefooter,
            message:data.comments,
        }
        
        emailjs.send('service_dpsd40k','template_rv78tfl',emailContent,'C5DJLd7nVs9qg1gHM')
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
}