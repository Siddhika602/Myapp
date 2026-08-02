require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const githubData={
  "login": "Siddhika602",
  "id": 274083992,
  "node_id": "U_kgDOEFYwmA",
  "avatar_url": "https://avatars.githubusercontent.com/u/274083992?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Siddhika602",
  "html_url": "https://github.com/Siddhika602",
  "followers_url": "https://api.github.com/users/Siddhika602/followers",
  "following_url": "https://api.github.com/users/Siddhika602/following{/other_user}",
  "gists_url": "https://api.github.com/users/Siddhika602/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Siddhika602/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Siddhika602/subscriptions",
  "organizations_url": "https://api.github.com/users/Siddhika602/orgs",
  "repos_url": "https://api.github.com/users/Siddhika602/repos",
  "events_url": "https://api.github.com/users/Siddhika602/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Siddhika602/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-04-06T18:27:17Z",
  "updated_at": "2026-08-01T12:40:43Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/twitter',(req,res)=>{
    res.send('Siddhikadotcom');
});
app.get('/login',(req,res)=>{
    res.send('<h1>Siddhika is very beautiful</h1>')
});
app.get('/youtube',(req,res)=>{
    res.send('<h2>She is gorgeous too</h2>')

});
app.get('/github',(req,res)=>{
    res.json(githubData)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});