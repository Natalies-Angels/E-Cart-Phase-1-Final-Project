function collapsible()
{
  const collapse = document.getElementsByClassName("collapsingForms");

  for (let i = 0; i < collapse.length; i++)
  {
    collapse[i].addEventListener("click", function() 
    {
      this.classList.toggle("active");
      const forms = this.nextElementSibling;
      if (forms.style.display === "block")
      {
      forms.style.display = "none";
      } 
      else 
      {
      forms.style.display = "block";
      }
    });
  } 
}
collapsible();

document.addEventListener('DOMContentLoaded', ()=>
{
 let reviewForm = document.getElementById('reviewForm')
  reviewForm.addEventListener('submit', (e) =>
  {
    e.preventDefault()
    postReview(e.target.review.value);
    reviewForm.reset();
  })
})

function postReview(newReview)
{
  let p = document.createElement('p');
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteReview)
  btn.textContent = 'Delete Review';
  p.textContent = `${newReview} `;
  p.appendChild(btn);
  document.querySelector('#reviewContainer').appendChild(p)
}

function deleteReview(e)
{
  e.target.parentNode.remove();
}

const init = () =>
{
  const signIn = document.querySelector('#SignIn');
  signIn.addEventListener('submit', (e) =>
  {
    e.preventDefault();
    const username = document.querySelector('input#Uname')
    const password = document.querySelector('input#Pass')
    
    fetch(`http://localhost:3000/users/${password.value}`)
    .then(response => response.json())
    .then(data => {
      const userDetails = document.querySelector('section#userDetails p');
      console.log(userDetails)
      userDetails.innerText = `Welcome ${username.value}!!!`;
    })
  });
}
document.addEventListener('DOMContentLoaded', init);

init();