const express = require('express'),
	fileSystem = require('fs'),
	path = require('path');
const app = express();
app.use(express.static('public'))
app.get('/pdf_file1', (req, res) => {
	fileSystem.createReadStream(path.join(__dirname, 'public/pdf.pdf')).pipe(res);
});
app.get('/', (req, res) => {
	res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
