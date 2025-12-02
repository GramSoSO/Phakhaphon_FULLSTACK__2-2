const registerdate = "2023-09-17T10:00:00Z";

const option = {
    year: 'nummeric',
    month: 'long',
    day: 'nummerric',
    timezone: 'Asia/Bangkok'
   
};
const formatteddate = new Date(registerdate).toLocaleDateString('th-TH',option);
console.log(`DATE: ${formatteddate}`);