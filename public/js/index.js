// preloader 
setTimeout(function(){
  $('.preloader').addClass('d-none');
  $('.main-content').removeClass('d-none');
}, 2500);


// navbar
var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar')
var navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("shadow-lg")
});

// close nav-links on click
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    $('.navbar-collapse').removeClass('show')
  })
})

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    if (scrollTop >= 50) {
      $('.navbar').addClass('shadow-lg');
      $('.navbar').addClass('navbar-scrolled');
      $('.navbar').removeClass('navbar-unscrolled');


    } else if (scrollTop < 50) {
      $('.navbar').addClass('navbar-unscrolled');
      $('.navbar').removeClass('shadow-lg');
      $('.navbar').removeClass('navbar-scrolled');
    }

  });

});

// resume section info toggle
var kmApbBtn = document.querySelector(".km-apb-btn");
var kmApbInfo = document.querySelector('.km-apb-info')
kmApbBtn.addEventListener("click", function () {
  kmApbBtn.classList.toggle("btn-transform");
  kmApbInfo.classList.toggle("d-none")
});

var kmMptBtn = document.querySelector(".km-mpt-btn");
var kmMptInfo = document.querySelector('.km-mpt-info')
kmMptBtn.addEventListener("click", function () {
  kmMptBtn.classList.toggle("btn-transform");
  kmMptInfo.classList.toggle("d-none")
});

var kmAmtBtn = document.querySelector(".km-amt-btn");
var kmAmtInfo = document.querySelector('.km-amt-info')
kmAmtBtn.addEventListener("click", function () {
  kmAmtBtn.classList.toggle("btn-transform");
  kmAmtInfo.classList.toggle("d-none")
});


// toast
const toastLive = document.getElementById('toast')
$('#form').submit(function () {
  const toast = new bootstrap.Toast(toastLive)

 //emailJS
 var params = {
  userName: document.getElementById("user_name").value,
  userEmail: document.getElementById("user_email").value,
  userMessage: document.getElementById("user_message").value
}

 const serviceID = "";
 const templateID = ""

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("user_name").value = ""
    document.getElementById("user_email").value = ""
    document.getElementById("user_message").value = ""
  })

  toast.show()
  return false;
 });

// tiltJS
$('.js-tilt').tilt({
  glare: true,
  maxGlare: 0.5,
})


function createImageModal(modalId, imageSrc) {
  // Check if the modal already exists
  if (!document.getElementById(modalId)) {
      // Create the modal HTML structure
      const modalHTML = `
          <div id="${modalId}" class="modal" style="display: none;">
              <div class="modal-content">
                  <span class="close" onclick="document.getElementById('${modalId}').style.display='none'">&times;</span>
                  <img src="${imageSrc}" alt="Certificate Preview" style="width: 100%; height: auto;">
              </div>
          </div>
      `;

      // Append the modal to the body
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // Add the window click event handler to close the modal when clicking outside of it
      window.addEventListener('click', function(event) {
          const modal = document.getElementById(modalId);
          if (event.target == modal) {
              modal.style.display = "none";
          }
      });
  }
}

function showImageModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'block';
  }
}

function closeImageModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'none';
  }
}