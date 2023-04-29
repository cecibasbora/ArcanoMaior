var dia = document.querySelector('input[name="dia"]');
var mes = document.querySelector('input[name="mes"]');
var ano = document.querySelector('input[name="ano"]');
var secaoPergunta = document.querySelector('.secao-pergunta');
var secaoResposta = document.querySelector('.secao-resposta');
var resposta = document.querySelector('#resposta');
var imgArcano = document.querySelector('#imgArcano');
var info = document.querySelector('#texto');

const listaArcanoCompleta = [
  {
    nome: 'O Mago',
    fotoUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*yO1cFUe99bkfUzAnZMabbw.jpeg',    
    texto: "O Mago é o Arcano Pessoal de número 1. Você possui ao alcance das mãos todas as ferramentas e habilidades que precisa para alcançar o sucesso." + "\n\n"
      +"Desta maneira, você está alinhado com o poder das mudanças e de ação para que elas aconteçam. É importante que você use sua inteligência e força de vontade para manifestar o que deseja. No amor, você costuma preferir relacionamentos sérios, pois gosta de compromissos." + "\n\n"
      +"Geralmente você é muito dedicado e, quando possui fascinação por alguém, dá tudo de si. No trabalho, você tem sempre oportunidades e melhoria nas finanças Sua saúde precisa muitas vezes da ajuda de um profissional experiente, pois você tende a se dedicar bastante ao trabalho."
  },
  {
    nome: 'A Sacerdotisa',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/02-A-Sacerdotiza-The-Priestess-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Papisa é o Arcano de número 2. Se a Alta Sacerdotisa é seu Arcano Pessoal, você possui uma figura poderosa e intrigante, permeada por intensa sexualidade, mistério e poder supremo." + "\n\n"
      +"Por ser a carta da não ação, cuja precedência é a falta de envolvimento, você é bastante observador e prefere procurar por possibilidades e potencialidades invés de interferir nos eventos. Além disso, você é altamente intuitivo e misterioso, e confia nos seus instintos e nos seus sonhos, pois a resposta para suas indagações pode vir através deles. A sua vida profissional é marcada por oportunidades importantes, mas lembre-se de manter o segredo sobre elas. Na saúde, ouça sempre o que seu corpo tem a dizer." 
  },
  {
    nome: 'A Imperatriz',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/03-A-Imperatriz-The-Empress-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Imperatriz é o Arcano Pessoal de número 3 e representa a criação e descoberta do desejo sexual. Portanto, independente de gênero, você possui uma energia materna e feminina bastante aflorada." + "\n\n"
      +"Por isso, é importante que você possa se conectar com seu lado feminino por meio da fertilidade, criatividade e sua natureza cuidadora e acolhedora. Ela também incorpora abundância, indicando uma vida confortável, gravidez ou necessidade de se conectar com a natureza." + "\n\n"
      +"No amor, você presa por relacionamento estável e o bom sexo é essencial para você. Sua vida profissional será na área da criatividade e você terá conforto e riqueza material. Já a sua saúde é geralmente restaurada em contato com a natureza."
  },
  {
    nome: 'O Imperador',
    fotoUrl: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZmI5xlNy5i/+xO7eU2E2YdKxaDTvMqlVQCs7dN9fmkgcVfVAIAFQ1kas1DxbOXdDZE6d15Gsc7uCM9eXdW0NfPzezyU9EEBeZV52+HdFoRpGRZY=',    
    texto: "O Imperador é o Arcano Pessoal de número 4. Ele incorpora a figura paterna, doadora de proteção, do sustento e que está associada à disciplina. Por isso, você está mais conectado com a energia masculina. Seu temperamento tende a ser controlador, regulador e autoritário e você preza bastante pela organização e por aspectos relacionados à paternidade." + "\n\n"
      +"Você tem personalidade forte, pensamento estratégico e gosta de estruturar, ditar regras e criar sistemas e, por isso, gosta de ocupar uma posição de poder. No amor, você costuma se interessar por pessoas mais maduras, geralmente com pessoas de boa influência, mas não tão românticas." + "\n\n"
      +"Costuma ser monogâmico, mas tende a ter problemas por ser controlador e ter padrões tóxicos. No trabalho, procura algo mais estável, pois sua saúde costuma ser afetada por estresse que se manifesta em sintomas como dores de cabeça."
  },
  {
    nome: 'O Hierofante',
    fotoUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*NgsNrrgPJQq7KiUiUpdOCQ.jpeg',    
    texto: "O Hierofante é o Arcano Pessoal de número 5 que cria uma ponte entre os céus e a terra. Você costuma ser alguém que preza os valores tradicionais e instituições. Apesar de muitas vezes carrancudo, você pode ser um mentor dotado de sabedoria e espiritualidade" + "\n\n"
      +"Você anseia por tradicionalismo e, muitas vezes, é considerado antiquado e extremista. Consequentemente, você costuma estar preso a antigas amarras convencionais ou pensamentos atrasados, muitos dos quais te impedem de ser feliz." + "\n\n"
      +"No amor, o Hierofante é a carta que indica que você preza por modelos de família pautados em casamento e compromisso. No campo profissional, costuma trabalhar bem em equipe e a se dedicar a coisas relacionadas à religião. Sua saúde costuma ser afetada devido ao seu sistema imunológico frágil."
  },
  {
    nome: 'Os Enamorados',
    fotoUrl: 'https://fotos.web.sapo.io/i/Be40703e4/20515696_htJsZ.jpeg',    
    texto: "Se a soma de sua data de nascimento deu o número 6, seu Arcano Pessoal é Os Enamorados. Como tal, você é uma pessoa que constantemente precisa tomar decisões sobre relacionamentos e a sua vida social. Neste arcano, estão contidos os mistérios das escolhas emocionais, incluindo a permanência e consolidação." + "\n\n"
      +"Você costuma ser indeciso sobre quem ama e por isso pode se encontrar facilmente em triângulos amorosos, pois é constantemente tentado pelos outros. Em seus relacionamentos, muitas vezes você acabará sacrificando um aspecto da sua vida para que eles deem certo e por isso você muitas vezes se sente incompleto." + "\n\n"
      +"No trabalho, você possui mais sucesso em atividades em grupo ou em sociedade e deve estar atento para não se envolver afetivamente com colegas. Na saúde, você tende a ter problemas no coração."
    
  },
  {
    nome: 'O Carro',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/07-O-Carro-The-Chariot-Tarot-Taro-Online-Magia-do-Caos-Caotize-se-400x703.jpg',    
    texto: "A Carruagem é o Arcano de número 7. Por representar Ação, você é uma pessoa dinâmica por natureza e não mede esforços para encarar os desafios e partir rumo à vitória ao manter controle sobre sua vida. É justamente o controle que o faz vencer. É necessário usar a força e a força de vontade para superar os obstáculos que porventura surjam no seu caminho." + "\n\n"
      +"No amor, a Carruagem mostra que é necessário dominar suas emoções antes de se desbravar num relacionamento. Já no trabalho, a Carruagem indica ambição, determinação e metas financeiras. Na saúde, é provável que você desenvolva problemas digestivos."
  },
  {
    nome: 'A Força',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/08-For%C3%A7a-Strength-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Força é o Arcano Pessoal de número 8. Você é uma pessoa rica em bravura, compaixão, força e persuasão. Além disso, você possui o poder interior para suportar momentos de estresse e perigo. Você se mantém calmo e sua resiliência te ajudará a alcançar o que deseja, até mesmo quando é difícil de se manter de pé. Sua paciência e compaixão sempre serão recompensadas" + "\n\n"
      +"No amor, indica tendência a relacionamentos com leoninos ou alguém com lado selvagem aflorado. No trabalho, tente controlar gastos e dar passos ousados na carreira. Na saúde, é importante tomar cuidado com maus hábitos que podem prejudicá-la."
  },
  {
    nome: 'O Eremita',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Eremita-.jpg',    
    texto: "O Eremita é o Arcano Pessoal de número 9. Você possui uma natureza reservada e, como o Eremita, carrega em si características como a busca pela alma, introspecção ou até mesmo propensão à reclusão." + "\n\n"
      +"Em sua jornada pelo desconhecido de si mesmo, você muitas vezes pode enfrentar períodos de solidão e propensão a crises existenciais. Apesar disso, você é estimado pela sua sabedoria e procurado como um mentor."
  },
  {
    nome: 'A Roda da Fortuna',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Roda-da-Fortuna-.jpg',    
    texto: "A Roda da Fortuna é o Arcano Pessoal de número 10. Ela representa os ciclos da vida, num momento de transição de um ciclo para o próximo, fechando o passado e se preparando para o futuro. Sua vida provavelmente é cheia de altos e baixos e, por isso, é importante que você faça uma reserva financeira." + "\n\n"
      +"Você pode achar difícil romper com padrões, por isso esteja atento para eles. No amor, é importante que você filtre as energias externas que possam atrapalhar os seus relacionamentos. No trabalho, você é dedicado, mas nem sempre recebe a posição que realmente merece. Sua saúde é relativamente estável, mas suscetível a mudanças súbitas."
  },
  {
    nome: 'A Justiça',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/11-A-Justi%C3%A7a-The-Justice-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Justiça é o Arcano Pessoal de número 11. Você preza pelo equilíbrio e tende a agir de maneira justiceira. Você às vezes parece indeciso, pois suas decisões tomadas costumam ter efeitos por um longo período." + "\n\n"
      +"Além disso, costuma arcar com as consequências dos seus atos, especialmente quando eles provocam dano a alguém. No amor, a Justiça mostra compromisso e tratamento justo, no sentido de receber o que dá ao mundo." + "\n\n"
      +"No âmbito do trabalho, é sinal de integridade de carreira e equilíbrio financeiro. No entanto, atente-se de equilibrar a vida pessoal e profissional, pois elas podem facilmente entrar em conflito. Evite conflitos, pois eles podem desequilibrar facilmente a sua saúde."
  },
  {
    nome: 'O Enforcado',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Dependurado-.jpg',    
    texto: "O Enforcado é Arcano Pessoal de número 12. Como esta carta, você costuma se sacrificar constantemente. Muitas vezes, é preciso renunciar a algo para seguir adiante. É através destes sacrifícios que você consegue enxergar o mundo diferentemente e trilhar a sua jornada espiritual neste plano." + "\n\n"
      +"No amor, o Enforcado significa sacrifício e você provavelmente fica de cabeça para baixo quando o assunto é amor e abre mão de tudo por ele. No trabalho, sua vida pode sofrer constantes mudanças e por isso você tem mais propensão à instabilidade na carreira." + "\n\n"
      +"No entanto, sua visão de mundo pode gerar oportunidades. Na saúde, é importante que você pense fora da caixa para melhorar ter uma vida mais saudável."
  },
  {
    nome: 'A Morte',
    fotoUrl: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-death.jpg',
    texto: "A Morte é o Arcano Pessoal de número 13. Se este é o seu Arcano Pessoal, você está num processo de mudança no ciclo de encarnação. A Morte significa uma mudança natural e preparação para uma nova fase da vida. Aos poucos, um processo necessário de transição se iniciará para que seu mundo mude completamente." + "\n\n"
      +"As pessoas às vezes podem ter medo de você e você pode se sentir incompreendido. Nos assuntos do Amor, você poderá ter dificuldades de se adaptar se não aceitar as mudanças e se adaptar a elas. No trabalho, este arcano indica um período de estagnação e a necessidade de mudar de emprego ou carreira. Sua saúde está mais suscetível a mudanças que podem exigir novas abordagens para sua vida." 
  },
  {
    nome: 'A Temperança',
    fotoUrl: 'https://tarotterapeutico.com.br/wp-content/uploads/2020/06/14-temperan%C3%A7a.jpg',    
    texto: "A Temperança é seu Arcano Pessoal se seu cálculo rendeu o número 14. Ela traz consigo a necessidade de ter seu próprio espaço, com uma mensagem de paz e de equilíbrio. Você é uma pessoa que usa sua clareza natural para chegar aonde deseja. Ela mostra que se você encontrar paz no que faz, as coisas vão ocorrer exatamente como devem." + "\n\n"
      +"Ela mostra sua característica adaptável às situações e às pessoas ao redor, alertando que é momento também para reavaliar suas escolhas e prioridades. No amor, a Temperança mostra uma tendência às relações equilibradas, regadas por cuidado e paciência." + "\n\n"
      +"No trabalho, ela indica progresso vagaroso de crescimento, porém consistente. Na saúde, a moderação é a chave para uma vida saudável e equilibrada."
  },
  {
    nome: 'O Diabo',
    fotoUrl: 'https://cdn.shopify.com/s/files/1/1366/7699/files/The-Devil-Tarot-Card-Meaning_large.png?v=1472766445',    
    texto: "O Diabo é o Arcano Pessoal de número 15. Pessoas regidas por este arcano têm uma tendência natural à obsessão e sexualidade aflorada." + "\n\n"
      +"Por representar um caminho que leva ao abismo e estar ligado aos instintos e ao mundo material, você está muito ligado aos prazeres da vida e muitas vezes se sente aprisionado, vazio e com faltas de realização na vida." + "\n\n"
      +"Você pode gostar de ostentação e possivelmente não possui controle sobre seus desejos ou ações. No amor, o Diabo indica um período de luxúria e sexualidade aflorada, com propensão à dependência e passionalidade. No trabalho, cuidado com maus hábitos e, principalmente, com a autossabotagem. Na saúde, cuidado com vícios e problemas gerados por drogas e comportamentos compulsivos."
  },
  {
    nome: 'A Torre',
    fotoUrl: 'https://i0.wp.com/www.astroxaman.com/wp-content/uploads/2019/12/A-Torre-Rider-Waite.jpg?resize=428%2C697&ssl=1',    
    texto: "A Torre é o Arcano Pessoal de número 16. Sua vida tende a mudanças repentinas, marcada com o surgimento de algo que estava confinado. Você pode se sentir insatisfeito, ansiando por mudanças, separação, um desejo de trocar de emprego ou mudar de país." + "\n\n"
      +"Por indicar mudanças bruscas, é importante estar atento para romper as energias de desastres ou perdas trazidas por esta carta. No amor, a Torre indica uma mudança de perspectiva súbita e por isso você tem a tendência a se apaixonar por pessoas que não mostram ser quem elas são. Cuidado." 
  },
  {
    nome: 'A Estrela',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/17-A-Estrela-The-Star-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Estrela é o Arcano Pessoal de número 17. Se este é seu Arcano Pessoal, você está numa nova fase do seu ciclo de encarnações. Agora, você é capaz de seguir o fluxo do cosmo, repleto de esperança e espiritualidade. Você possui naturalmente sorte, prosperidade, fertilidade, generosidade e verdade e sabe o seu lugar no mundo, ciente de uma parte misteriosa a quem pode recorrer." + "\n\n"
      +"No amor, a Estrela traz otimismo. Não deixe que feridas do passado interfiram em sua jornada amorosa. No trabalho, você costuma brilhar, cumprindo metas e sendo recompensado por isso. Sua saúde costuma ser excelente, mas não a deixe ser afetada pela ansiedade"
  },
  {
    nome: 'A Lua',
    fotoUrl: 'https://1.bp.blogspot.com/-KD1VyI7Fkt4/WQ-ByqmdpAI/AAAAAAAAAzU/TXbsDToj20ohTLlDVNF9wlobg5P4frGYgCLcB/s1600/a%2Blua%2Bmarseille.jpg',    
    texto: "A Lua é o Arcano Pessoal de número 18. Ela rege sonhadoras, com gosto pela fantasia e ligadas ao subconsciente. Por isso, você tem uma tendência natural à ansiedade, ilusão, intuição, aos medos e segredos. É importante não deixar a imaginação tomar conta da sua vida. Sua vida pode estar envolta por segredos escondidos prestes a emergir. Por isso, as pessoas te veem como alguém misterioso." + "\n\n"
      +"No amor, é importante ficar alerta para não ter relacionamentos fantasiosos e platônicos. No trabalho, use a sua imaginação de forma criativa, mas cuidado com problemas gerados por falta de informação"
  },
  {
    nome: 'O Sol',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/19-O-Sol-The-Sun-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "O Sol é o Arcano Pessoal de número 19. Ele marca uma vida dotada de brilho, prosperidade e consciência. Como o sol, você surge para trazer otimismo, positividade, sucesso e felicidade. O Sol significa sentimento de otimismo e de realização e por isso você ilumina todos os lugares por onde passa." + "\n\n"
      +"Você é dotado de um magnetismo social intenso e pode atrair quem você deseja. No trabalho, você será bem-sucedido e terá uma carreira estável, sem muitas dificuldades."
  },
  {
    nome: 'O Julgamento',
    fotoUrl: 'https://images.squarespace-cdn.com/content/5916d4da2994ca3bd87b3a87/1555693945104-SI4CCSJNPIEVGEFRZ8WX/IMG_8243.JPG?content-type=image%2Fjpeg',    
    texto: "O Julgamento é o Arcano Pessoal 20. Ele representa a união das forças da Lua e do Sul e um período de renascimento e despertar. Você precisa refletir e avaliar constantemente os próprios atos. É importante mudar e ser verdadeiro consigo mesmo e com suas necessidades. Isso implica mudanças que afetarão a sua vida e daqueles próximos a você." + "\n\n"
      +"No amor, não deixe sua natureza crítica te impedir de se relacionar. No trabalho, use sua avaliação natural para agir com responsabilidade e refletir sobre ações e gastos. Cuide de sua saúde, pois ela requer mais tempo para ser restaurada."
  },
  {
    nome: 'O Mundo',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/21-O-Mundo-The-World-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "O Mundo é o Arcano Pessoal de número 21. Ela representa a suprema consciência, indicando também conclusão, integridade, realização e até mesmo viagem. Como o último estágio no caminho do Tarot, você clama pela realidade profunda, aceitação, completude e consciência." + "\n\n"
      +"Sua vida pode ser repleta de realizações e equilíbrio, com sua evolução em movimento. É indicador de uma grande mudança, na qual os mundos interior e exterior se encontram."
  },
  {
    nome: 'O Louco',
    fotoUrl: 'https://3.bp.blogspot.com/-hL63irswebA/WepLPjE5HZI/AAAAAAAAtzk/zKK7CTEeO3gfi0NwadcDZbxZPnyd4Z8eACLcBGAs/s1600/RWS_Tarot_00_Fool.jpg',    
    texto: "O Louco é o Arcano de número 0 ou 22. Pessoas que tem o Louco como arcano pessoal são aventureiras, muitas vezes consideradas como andarilhas por estarem aptas a explorar novos caminhos e experimentar novas aventuras." + "\n\n"
      +"Por indicar novos começos, a influência do Louco indica uma vida cheia de aventuras com otimismo e liberdade que exigirá de você um salto na escuridão, mas que trará crescimento como resultado desta experiência. Ele é o símbolo da inocência e indica o momento de arriscar."
  },
  {}
]

/** 
  PASSO 2 - Criar uma função para que quando o usuário clique no botão
  a gente consiga executar as seguintes tarefas:
  1 - recuperar os dados do input no momento do click
  2 - transformar os valores do input em número e salvar em uma variável
  3 - injetar o valor desta soma no elemento com o id #resposta
  4 - esconder a seção pergunta, e mostrar a seção resposta
  OBS.: perceba que adicionamos um atributo onclick no elemento <button>
  no arquivo HTML, e o valor do atributo é o nome da função seguido de parênteses
  neste caso
  <button type="button" onclick="calcular()">Calcular</button>
*/
function calcular() {
  /**
    Chama a função calculaInputs passando como argumento as variáveis dia, mes e ano,
    que foram criadas no momento do carregamento da página.
    Como essa função retorna um valor, podemos atribuir esse valor de retorno a uma variável
  */
  const somaDosInputs = calculaInputs(dia, mes, ano)

  const arcanoMaior = calculaArcano(somaDosInputs)
  const arcano = revelaArcano(arcanoMaior)

  resposta.innerText = 'Seu Arcano é: ' + arcanoMaior + " - " + arcano.nome
  imgArcano.src = arcano.fotoUrl
  imgArcano.alt = 'Imagem do Arcano: ' + arcano.nome
  info.innerText = arcano.texto
  reset();
}

function calculaInputs(inputDia, inputMes, inputAno) {
  /** 
     transforma os valores digitados no input em número, guarda em variáveis
     soma todos eles e devolve o resultado
  */
  const diaDigitado = Number(inputDia.value)
  const mesDigitado = Number(inputMes.value)
  const anoDigitado = Number(inputAno.value)
  const resultadoDaSoma = diaDigitado + mesDigitado + anoDigitado
  return resultadoDaSoma
}

function calculaArcano(numero) {

  let numeroArcano = somaAlgarismos(numero)

  if (numeroArcano > 22) {
    numeroArcano = somaAlgarismos(numeroArcano)
  }

  return numeroArcano
}

function somaAlgarismos(numero) {
  const numeroString = numero.toString()
  let somaFinal = 0

  for (let i = 0; i < numeroString.length; i++) {
    somaFinal += parseInt(numeroString[i])
  }

  return somaFinal
}

function revelaArcano(numeroArcano) {
  console.log('dentro do revela', numeroArcano)

  switch (numeroArcano) {
    case 1:
      console.log(listaArcanoCompleta[0])
      return listaArcanoCompleta[0]
      break;
    case 2:
      console.log(listaArcanoCompleta[1])
      return listaArcanoCompleta[1]
      break;
    case 3:
      console.log(listaArcanoCompleta[2])
      return listaArcanoCompleta[2]
      break;  
    case 4:
      console.log(listaArcanoCompleta[3])
      return listaArcanoCompleta[3]
      break;  
    case 5:
      console.log(listaArcanoCompleta[4])
      return listaArcanoCompleta[4]
      break;  
    case 6:
      console.log(listaArcanoCompleta[5])
      return listaArcanoCompleta[5]
      break; 
    case 7:
      console.log(listaArcanoCompleta[6])
      return listaArcanoCompleta[6]
      break; 
    case 8:
      console.log(listaArcanoCompleta[7])
      return listaArcanoCompleta[7]
      break;   
    case 9:
      console.log(listaArcanoCompleta[8])
      return listaArcanoCompleta[8]
    case 10:
      console.log(listaArcanoCompleta[9])
      return listaArcanoCompleta[9]
      break;   
    case 11:
      console.log(listaArcanoCompleta[10])
      return listaArcanoCompleta[10]
      break;   
    case 12:
      console.log(listaArcanoCompleta[11])
      return listaArcanoCompleta[11]
      break;   
    case 13:
      console.log(listaArcanoCompleta[12])
      return listaArcanoCompleta[12]
      break;     
    case 14:
      console.log(listaArcanoCompleta[13])
      return listaArcanoCompleta[13]
      break;
    case 15:
      console.log(listaArcanoCompleta[14])
      return listaArcanoCompleta[14]
      break;   
    case 16:
      console.log(listaArcanoCompleta[15])
      return listaArcanoCompleta[15]
      break; 
    case 17:
      console.log(listaArcanoCompleta[16])
      return listaArcanoCompleta[16]
      break;   
    case 18:
      console.log(listaArcanoCompleta[17])
      return listaArcanoCompleta[17]
      break;   
    case 19:
      console.log(listaArcanoCompleta[18])
      return listaArcanoCompleta[18]
      break;   
    case 20:
      console.log(listaArcanoCompleta[19])
      return listaArcanoCompleta[19]
      break;   
    case 21:
      console.log(listaArcanoCompleta[20])
      return listaArcanoCompleta[20]
      break; 
    case 22:
      console.log(listaArcanoCompleta[21])
      return listaArcanoCompleta[21]
      break;  
    default:
      alert('Input Inválido')
      console.log('Input Inválido')
  }

}


function reset() {
  // nas seções secao-pergunta e secao-resposta adiciona ou remove a classe escondido
  // toggle quer dizer: se existe, remove. Se não existe, adiciona.
  // classe escondido está no arquivo css
  secaoPergunta.classList.toggle('escondido');
  secaoResposta.classList.toggle('escondido');

  // apaga os valores digitados pelo usuário nos inputs
  dia.value = '';
  mes.value = '';
  ano.value = '';
}