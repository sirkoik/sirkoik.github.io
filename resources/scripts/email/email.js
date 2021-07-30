const addr = [
  'e', 'n', 'o', 't',
  's', 'e', 'c', 'k',
  'i', 'o', 'k', 'a'
];

const domain = [
  'm', 'o', 'c',
  '.', 'l', 'i',
  'a', 'm', 'g'
];

const email = `${addr.reverse().join('')}@${domain.reverse().join('')}`;

export const loadEmail = () => {
  const emailEl = document.getElementById('email-addr');
  emailEl.href = `mailto:${email}`;
  emailEl.title = `Email me at ${email}`;

  document.getElementById('email-container').style.visibility = 'visible';
}