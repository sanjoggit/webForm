const colExperience = document.querySelectorAll('#colExperience .check-label');
const cross = document.querySelectorAll('.deleteSign');
const addButton = document.getElementById('addButton');
const childColExperience = document.getElementsByClassName('check-label')[0];
const inputValue = document.getElementById('addInput').value;
const email = document.getElementById('email');
const reEmail = document.getElementById('reEmail');
let id = 0;


//************validation********************
reEmail.addEventListener('input', (e) => {
  if (reEmail.value !== email.value) {
    reEmail.setCustomValidity("email doesnot match");
  } else {
    reEmail.setCustomValidity("");
  }
});

//*************for removing checkbox**************
for (let i = 0; i < cross.length; i++) {
  cross[i].addEventListener('click', function() {
    colExperience[i].remove();
  })
}

//*************hovering experience checkbox label*********
for (let i = 0; i < cross.length; i++) {
  cross[i].parentElement.addEventListener('mouseover', function() {
    cross[i].style.display = 'inline-block';
  });
  cross[i].parentElement.addEventListener('mouseout', function() {
    cross[i].style.display = 'none';
  });
}

//***************adding experience checkbox and level*************

addButton.addEventListener('click', function() {

  addInput = document.getElementById('addInput');

  if (addInput.value.length > 0) {
    //for level
    const label = document.createElement('label');
    label.className = 'check-label';
    label.innerHTML = addInput.value;
    console.log(label);

    //for span
    const span = document.createElement('span');
    span.className = 'deleteSign';
    span.innerHTML = 'X';
    label.appendChild(span);

    //for input
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    id++
    label.appendChild(input);

    //for another span
    const span2 = document.createElement('span');
    span2.className = 'checkmark';
    label.appendChild(span2);

    //appending to parent element
    const parent = document.getElementById('colExperience');
    const appendedNode = parent.insertBefore(label, childColExperience);


    span.parentElement.addEventListener('mouseover', function() {
      span.style.display = 'inline-block';
    });
    span.parentElement.addEventListener('mouseout', function() {
      span.style.display = 'none';
    });

    span.addEventListener('click', function() {
      span.parentElement.remove();
    })

    addInput.value = "";  //to remove the input value after added
  }


});
