const searchinput = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-btn");
const BASEURL = "https://api.github.com/users/";
const githubprofiledetails = document.querySelector(".git-profile-details");
const Loader = document.querySelector(".loading-text");

Loader.classList.add('hidden');

function showloader(){
    Loader.classList.remove('hidden');
    Loader.classList.add('block');
    githubprofiledetails.classList.add('hidden');
}
function removeloader() {
    Loader.classList.add('hidden');
    Loader.classList.remove('block');
    githubprofiledetails.classList.remove('hidden');
}

async function fetchgithubprofiledetails() {
    showloader()
    const response = await fetch(`${BASEURL}${searchinput.value}`);
    const result = await response.json();

    if(result) {
        removeloader()
        displayprofiledetails(result);
    }
}

function displayprofiledetails(getprofiledetails) {
    const { login, name, avatar_url, html_url, bio, public_repos, followers, following, created_at, updated_at } = getprofiledetails;
    githubprofiledetails.innerHTML = `
   <div class="h-auto w-auto mb-6 p-6 font-poppins md:text-lg sm:text-xs text-stone-300 border-solid border-4 border-slate-900 rounded-md bg-slate-600 shadow-inner  shadow-slate-600 hover:shadow-2xl drop-shadow-2xl">
     <p class="text-amber-100">UserName : ${login}</p>
     <img class=" border-solid border-2 my-2 rounded-lg border-spacing-2 border-cyan-600 size-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700"src=${avatar_url} alt=${login}>
     <p class="name m-1">Name : ${name}</p>
     <p class="m-1 ">Profile:<a class="underline underline-offset-4 text-blue-300" href="${html_url}">${html_url}</a></p>
     <p class="Bio m-1 line-clamp-3 ">Bio : ${bio}</p>
     <p class="Repos m-1">Repos : ${public_repos}</p>
     <p class="Followers m-1">Followers : ${followers}</p>
     <p class="Following m-1">Following : ${following}</p>
     <p class="Created_at m-1">Created_at : ${created_at}</p>
     <p class="Updated_at m-1">Updated_at : ${updated_at}</p>
    <div>
    `
}
searchbtn.addEventListener('click', fetchgithubprofiledetails)