let teamMembers = [
    member1 = {
        name: 'Wayne Barnett',
        'role': 'Founder & CEO',
        'imgSearch': 'wayne-barnett-founder-ceo.jpg'
    },
    member2 = {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'imgSearch': 'angela-caroll-chief-editor.jpg'
    },
    member3 = {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'imgSearch': 'walter-gordon-office-manager.jpg'
    },
    member4 = {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'imgSearch': 'angela-lopez-social-media-manager.jpg'
    },
    member5 = {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'imgSearch': 'scott-estrada-developer.jpg'
    },
    member6 = {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'imgSearch': 'barbara-ramos-graphic-designer.jpg'
    },
]

for (let i = 0; i < teamMembers.length; i++) {
    let name = teamMembers[i].name
    let role = teamMembers[i].role
    let imgPath = teamMembers[i].imgSearch
    document.getElementById("cardsRow").innerHTML += 
    '<div class="col-11 col-sm-6 col-lg-4" id="' + i +'"><div class="card text-center p-0 mx-1 my-3"><img src="./img/' + imgPath + '" alt="' + name +'" class="card-img-top"><div class="card-body"><h5 class="card-title">' + name + '</h5><p class="card-text">' + role + '</p></div></div></div>'

}
