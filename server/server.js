const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.use('/redirect', async (req, res) => {
  console.log('triggered');
  const requestToken = req.query.code;
  const response = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${requestToken}`,
  });
  const token = response.data.split('access_token=')[1].split('&')[0];
  console.log(token);
  try {
    const userInfo = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {
        Authorization: 'token ' + token,
      },
    });
    console.log('got user info');
    console.log(userInfo.data.name);
    return res
      .cookie('user', userInfo.data.name, {
        httpOnly: true,
        // expires in 10 minutes
        maxAge: 600000,
      })
      .redirect('http://localhost:8080');
  } catch (err) {
    console.log('oops');
  }
});

// check for cookie with hashed name
app.get('/auth/checkSession', (req, res) => {
  if (!req.cookies.user) {
    return res.json({ message: 'No cookie found' });
  }
  return res.json({ name: req.cookies.user });
});

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
