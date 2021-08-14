import { showModal, hideModal } from '../modal/modal.js';

const addr = ['e', 'n', 'o', 't', 's', 'e', 'c', 'k', 'i', 'o', 'k', 'a'];

const domain = ['m', 'o', 'c', '.', 'l', 'i', 'a', 'm', 'g'];

const email = `${addr.reverse().join('')}@${domain.reverse().join('')}`;

export const loadEmailNoCaptcha = () => {
  const emailEl = document.getElementById('email-addr');
  // emailEl.href = `mailto:${email}`;
  // emailEl.title = `Email me at ${email}`;
  // document.getElementById('email-container').style.visibility = 'visible';
  emailEl.addEventListener('click', (event) => {
    event.preventDefault();

    const closeHTML = `<button class="button button-close" id="modal-close">Close</button>`;

    document.getElementById(
      'modal-box-content'
    ).innerHTML = `<p>Email me at:</p><p><a target="_blank" href="mailto:${email}">${email}</a></p>${closeHTML}`;
    document.getElementById('modal-close').addEventListener('click', hideModal);
    showModal();
  });

  document.getElementById('email-container').style.visibility = 'visible';
};

export const loadEmail3 = () => {
  const emailEl = document.getElementById('email-addr');
  emailEl.addEventListener('click', (event) => {
    event.preventDefault();
    grecaptcha.ready(async () => {
      try {
        const token = await grecaptcha.execute(
          '6Lejvc4bAAAAADn9PN50JrzTShaL-1irJfSXEj8v',
          { action: 'submit' }
        );
        console.log(token);

        // send to backend https://developers.google.com/recaptcha/docs/verify

        showModal();
      } catch (error) {
        alert(error.message);
      }
    });
  });

  document.getElementById('email-container').style.visibility = 'visible';
};

// old system with reCaptch v2
export const loadEmail = () => {
  const emailEl = document.getElementById('email-addr');
  emailEl.addEventListener('click', (event) => {
    event.preventDefault();
    showModal();
  });
  document.getElementById('email-container').style.visibility = 'visible';

  const closeHTML = `<button class="button button-close" id="modal-close">Close</button>`;

  document.getElementById(
    'modal-box-content'
  ).innerHTML = `<p>To see my email, verify the captcha.</p><div id="email-captcha"></div>${closeHTML}`;
  document.getElementById('modal-close').addEventListener('click', hideModal);

  const emailCallback = (response) => {
    if (response) {
      document.getElementById('email-captcha').style.display = 'none';

      document.getElementById(
        'modal-box-content'
      ).innerHTML = `<p>Email me at:</p><p><a target="_blank" href="mailto:${email}">${email}</a></p>${closeHTML}`;
      document
        .getElementById('modal-close')
        .addEventListener('click', hideModal);
    }
  };

  grecaptcha.render('email-captcha', {
    sitekey: '6Lewbc4bAAAAAIB8BNzXFHa_Yhm8y-2DuqA719NT',
    callback: emailCallback,
  });
};
