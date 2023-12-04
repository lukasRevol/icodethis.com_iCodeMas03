const picture = document.querySelector('.picture');
const info = document.querySelector('.info');
const icon = document.querySelectorAll('.icon');
const mail = document.querySelector('.mail-input');
const btnOrder = document.querySelector('.btn-order');
const thxText = document.querySelector('.thx');
const thxBtn = document.querySelector('.btn-thx');

const mailRegEx =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkMail = () => {
	if (mail.value.toLowerCase().match(mailRegEx)) {
		iconTransform();
		boxTransform();
		thxBtn.classList.toggle('hide');
		thxText.classList.toggle('hide');
	} else {
		mail.value = '';
		mail.placeholder = 'invalid email';
		mail.classList.add('invalid-mail');
	}
};

const iconTransform = () => {
	icon.forEach((el) => {
		el.classList.toggle('icon-transform');
	});
};

const boxTransform = () => {
	picture.classList.toggle('box-transform');
	info.classList.toggle('box-transform');
};

document.addEventListener('DOMContentLoaded', function () {
	setTimeout(boxTransform, 600);
	iconTransform();
});

btnOrder.addEventListener('click', checkMail);
thxBtn.addEventListener('click', () => {
	iconTransform();
	boxTransform();
	thxBtn.classList.toggle('hide');
	thxText.classList.toggle('hide');
});
mail.addEventListener('click', () => {
	mail.classList.remove('invalid-mail');
	mail.placeholder = '';
});
