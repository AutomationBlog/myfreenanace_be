//Backend Setup Instructions for App
/** npm i dotenv nodemon mongoose express cors bcryptjs jsonwebtoken nodemailer multer razorpay */

/**
Generate a random JWT secret key
You can use the following command to generate a random JWT secret key:
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
*/

/**
.env file structure
PORT=3000
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_CLUSTER=
DB_URL=localhost:
JWT_SECRET=
GMAIL_EMAIL=
GMAIL_PASSWORD=
CLIENT_URL_LOCAL=http://localhost:3000
CLIENT_URL_CLOUD=https://domain.netlify.app
isLOCAL=true
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
**/
