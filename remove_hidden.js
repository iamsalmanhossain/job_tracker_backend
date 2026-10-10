const fs = require('fs');
const file = 'c:/salmans_project/job_tracker_frontend/src/components/auth/ResetPassword.tsx';
let content = fs.readFileSync(file, 'utf8');

// Use regex to remove the specific block of hidden inputs
content = content.replace(/\{\/\*\s*Hidden inputs.*?\*\/\}\s*<input type="hidden" \{\.\.\.register\("email"\)\} \/>\s*<input type="hidden" \{\.\.\.register\("otp"\)\} \/>/, '');

fs.writeFileSync(file, content);
console.log('Removed hidden inputs successfully.');
