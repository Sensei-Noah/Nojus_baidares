const submitbutton = document.getElementById('submitbutton');
const list_area = document.getElementById('list_area');
const list_item_1 = document.getElementById('list-item-1');

const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const date = document.getElementById('date');
const time = document.getElementById('time');
const baidare = document.getElementById('baidariu_inputGroup');
const phone_number = document.getElementById('phone_number');

function create_list(){

    list_item_1.textContent = first_name;

    console.log(first_name);
};

submitbutton.addEventListener('click', create_list);


