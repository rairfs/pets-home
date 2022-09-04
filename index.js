const express = require('express')
const exphbs = require('express-handlebars')
const { type } = require('express/lib/response')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('public'))

const pets = [
    {
        id: 1,
        documentoDono: '111',
        nomeDono: 'Carlos',
        identificacaoPet: '01',
        nomePet: 'Zezinho',
        tipo: 'Gato',
        raca: 'Vira-lata'
    },
    {
        id: 2,
        documentoDono: '222',
        nomeDono: 'José',
        identificacaoPet: '02',
        nomePet: 'Farofa',
        tipo: 'Cachorro',
        raca: 'Yorkshire'
    },
,    {
        id: 3,
        documentoDono: '333',
        nomeDono: 'Marcos',
        identificacaoPet: '03',
        nomePet: 'Hulk',
        tipo: 'Cachorro',
        raca: 'Pit Bull'
    },
    {
        id: 4,
        documentoDono: '444',
        nomeDono: 'João',
        identificacaoPet: '04',
        nomePet: 'Dulinha',
        tipo: 'Porquinho da índia',
        raca: 'Peruano'
    }
]

app.get('/', function (request, response) {
    response.render('home')
})

app.get('/pets', function (request, response) {

    response.render('pets', {pets})
})

app.get('/pets/:id', function (request, response) {
    const id = request.params.id
    let pet = null

    pets.forEach(function(p) {
        if (id == p.id){
            pet = p
        }
    })
    response.render('pet', {pet})
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Aplicação rodando na porta 5000")
})