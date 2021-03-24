/* 
  Promise
*/
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((result) => {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos;
  })
  .then((repos) => {
    console.log(`Total number of repos is: ${repos.length}`);
    return repos;
  })
  .then((repos) => {
    console.log(`First repo is: ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(`Last repo is: ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    repos.forEach((repo) => {
      // console.log(repo.name);
      let repoElement = document.createElement("div");
      let repoElementText = document.createTextNode(repo.name);
      repoElement.appendChild(repoElementText);
      document.body.appendChild(repoElement);
    });
  });
