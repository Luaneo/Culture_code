const openModalButton = document.querySelectorAll('.map-point')
const closeModalButton = document.querySelectorAll('[data-close-button]')

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}

dataset = [
    {author: 'мауро патта', mural_name: 'чашки', mural_id:'kolh4', address:'ул. колхозная 4', keywords: 'мурал колхозная женщина сардиния флоренция супруга мария'},
    {author: 'фарид руэда', mural_name: 'русская женщина', mural_id: 'kolh8', address: 'ул. колхозная 8', keywords: 'мурал'},
    {author: 'сергей юраков', mural_name: 'доживем до понедельника', mural_id: 'lug2-mon', address: 'луговая 2/1', keywords: 'мурал'},
    {author: 'деян иванович', mural_name: 'девочка на дереве', mural_id: 'pion31', address: 'ул. пионерская 31', keywords: 'мурал'},
    {author: 'саша купалян', mural_name: 'вич', mural_id: 'pion29-hiv', address: 'ул. пионерская 29', keywords: 'мурал'},
    {author: 'илья робе', mural_name: 'гора', mural_id: 'lug2-gor', address: 'ул. луговая 2', keywords: 'мурал'},
    {author: 'Филипп Думальченко', mural_name: 'бесконечный бег', mural_id: 'pion29-run', address: 'ул. пионерская 29', keywords: 'мурал'},
    // {author, mural_name, mural_id, address, keywords},
    // {author, mural_name, mural_id, address, keywords},
    // {author, mural_name, mural_id, address, keywords}
]

const form = document.querySelector('form');
const input = document.querySelector('#searchbar');
const results = document.querySelector('#search-results')

form.addEventListener('submit', el => {
    el.preventDefault();
    const keyword = input.value.trim().toLowerCase();
    console.log(keyword);
    const filteredData = dataset.filter(item => 
        item.author.toLowerCase().includes(keyword) || item.mural_name.toLowerCase().includes(keyword) || item.mural_id.toLowerCase().includes(keyword) || item.address.toLowerCase().includes(keyword) || item.keywords.includes(keyword)
    );
    console.log(filteredData);
    displayResults(filteredData);
})

const displayResults = (data) => {
    results.innerHTML = '';
    data.forEach(item => {
        const button = document.createElement('button')
        button.innerHTML = `${item.address}: "${item.mural_name}" - ${item.author}`
        button.dataset.modalTarget = `#${item.mural_id}`
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        });
        // button.addEventListener('mouseover', () => {
        //     point = document.querySelector(`.map-point[data-modal-target="${button.dataset.modalTarget}`)
        //     console.log(point);
        //     point.classList.add('active');
        //     console.log('mouseover');
        // });
        // button.addEventListener('mouseout', () => {
        //     point = document.querySelector(`.map-point[data-modal-target="${button.dataset.modalTarget}`)
        //     console.log(point);
        //     point.classList.remove('active');
        //     console.log('mouseout');
        // });
        const li = document.createElement('li')
        li.appendChild(button)
        results.appendChild(li)
    })
};
