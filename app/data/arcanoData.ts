const arcanoData = [
  {
    nome: 'O Mago',
    fotoUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*yO1cFUe99bkfUzAnZMabbw.jpeg',    
    texto: "O Arcano Pessoal do Mago simboliza uma missão de iniciativa e coragem. Este arcano pede por autoconfiança e independência de opiniões alheias. O equilíbrio emocional é crucial, assim como o cuidado para não se isolar emocionalmente."
  },
  {
    nome: 'A Sacerdotisa',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/02-A-Sacerdotiza-The-Priestess-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "O Arcano da Papisa ou Sacerdotisa representa a missão de viver relacionamentos profundos e harmoniosos. A intuição é uma ferramenta chave, e compartilhar sabedoria e soluções com os outros é essencial." 
  },
  {
    nome: 'A Imperatriz',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/03-A-Imperatriz-The-Empress-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Imperatriz como Arcano Pessoal destaca a missão de comunicar e motivar. Há uma ênfase em desfrutar a vida, socializar, e engajar-se em atividades criativas e hobbies que estimulem a criatividade."
  },
  {
    nome: 'O Imperador',
    fotoUrl: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZmI5xlNy5i/+xO7eU2E2YdKxaDTvMqlVQCs7dN9fmkgcVfVAIAFQ1kas1DxbOXdDZE6d15Gsc7uCM9eXdW0NfPzezyU9EEBeZV52+HdFoRpGRZY=',    
    texto: "O Imperador como Arcano Pessoal indica uma missão focada no trabalho e na afirmação do poder pessoal. A pessoa deve evitar uma vida excessivamente rotineira e trabalhosa, buscando não perder oportunidades de enriquecimento pessoal e profissional."
  },
  {
    nome: 'O Hierofante',
    fotoUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*NgsNrrgPJQq7KiUiUpdOCQ.jpeg',    
    texto: "O Hierofante como Arcano Pessoal representa uma missão de fé e aquisição de conhecimento. A pessoa deve focar em sua própria jornada espiritual, mantendo uma fé inabalável e praticando o que prega, ao invés de se preocupar com as opiniões alheias."
  },
  {
    nome: 'Os Enamorados',
    fotoUrl: 'https://fotos.web.sapo.io/i/Be40703e4/20515696_htJsZ.jpeg',    
    texto: "Os Enamorados ou Amantes como Arcano Pessoal destacam a importância de equilibrar os aspectos amorosos e familiares da vida. É crucial evitar que outros influenciem suas decisões nesses campos, manter-se longe de conflitos e fofocas, e praticar a não discriminação em todas as escolhas."
  },
  {
    nome: 'O Carro',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/07-O-Carro-The-Chariot-Tarot-Taro-Online-Magia-do-Caos-Caotize-se-400x703.jpg',    
    texto: "Este arcano encoraja a assumir o controle da própria vida, com fé e determinação. A pessoa sob a influência do Carro deve se orgulhar de sua independência espiritual e das realizações pessoais, guiando-se por um planejamento sólido e metas claras."
  },
  {
    nome: 'A Força',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/09/08-For%C3%A7a-Strength-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Força, como Arcano Pessoal, representa a necessidade de confrontar desafios com inteligência e sabedoria. A pessoa deve lidar de maneira equilibrada com aspectos práticos e espirituais da vida, relaxar e acreditar em suas capacidades, usando seu carisma e influência positivamente."
  },
  {
    nome: 'O Eremita',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Eremita-.jpg',    
    texto: "O Eremita, como Arcano Pessoal, encoraja a viver uma vida de reflexão e autoconhecimento. A pessoa deve buscar a serenidade em seu próprio espaço, evitar a dependência dos outros, e transmitir sabedoria, sempre atenta para não se doar em excesso, lembrando que cada coisa tem seu tempo."
  },
  {
    nome: 'A Roda da Fortuna',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Roda-da-Fortuna-.jpg',    
    texto: "A Roda da Fortuna, como Arcano Pessoal, representa a missão de confiar no destino e manter a fé em movimento. É vital saber o que se deseja e ter a confiança de que as coisas se alinharão. Deve-se agir com dedicação, mas sem pressão, e ser seletivo nas relações pessoais."
  },
  {
    nome: 'A Justiça',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/11-A-Justi%C3%A7a-The-Justice-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Justiça, como Arcano Pessoal, destaca a importância da racionalidade e do respeito às regras. A pessoa deve evitar o excesso de rigidez, praticando a justiça de maneira equilibrada e racional, e se afastando de influências negativas e conflituosas."
  },
  {
    nome: 'O Enforcado',
    fotoUrl: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Dependurado-.jpg',    
    texto: "O Enforcado ou o Pendurado, como Arcano Pessoal, simboliza a missão de observar e compreender a vida de múltiplas perspectivas. Deve-se evitar a estagnação e a tendência de desistir, focando em viver o presente e evitar fixar-se no passado."
  },
  {
    nome: 'A Morte',
    fotoUrl: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-death.jpg',
    texto: "A Morte, como Arcano Pessoal, representa a missão de abraçar a mudança e agir com rapidez. Procrastinação deve ser evitada, e decisões devem ser tomadas sabiamente para evitar perdas. Desafios, como lidar com a inveja alheia, são oportunidades para fortalecer o poder pessoal." 
  },
  {
    nome: 'A Temperança',
    fotoUrl: 'https://blog.ijep.com.br/wp-content/uploads/2022/07/artigo_369.jpeg',    
    texto: "A Temperança, como Arcano Pessoal, encoraja a busca pelo equilíbrio e harmonia na vida espiritual. A pessoa deve aprender a perdoar e se libertar das mágoas, especialmente em relações familiares, mantendo-se sempre em movimento e crescimento."
  },
  {
    nome: 'O Diabo',
    fotoUrl: 'https://cdn.shopify.com/s/files/1/1366/7699/files/The-Devil-Tarot-Card-Meaning_large.png?v=1472766445',    
    texto: "O Diabo, como Arcano Pessoal, sugere uma missão envolvendo a gestão de impulsos e a clareza nas relações interpessoais. É essencial para a pessoa desenvolver um senso de espiritualidade fortalecido, que serve como um escudo contra a absorção de energias externas indesejadas, e aprender a expressar-se de maneira consciente e positiva."
  },
  {
    nome: 'A Torre',
    fotoUrl: 'https://i0.wp.com/www.astroxaman.com/wp-content/uploads/2019/12/A-Torre-Rider-Waite.jpg?resize=428%2C697&ssl=1',    
    texto: "A Torre, como Arcano Pessoal, indica uma missão de construir, destruir e reconstruir. A pessoa deve cultivar a resiliência emocional para superar as adversidades e reconstruir-se continuamente, trabalhando o perdão e a superação de mágoas." 
  },
  {
    nome: 'A Estrela',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/17-A-Estrela-The-Star-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "A Estrela, como Arcano Pessoal, simboliza a missão de seguir sonhos e manter a esperança. É crucial cuidar do próprio bem-estar em todos os aspectos e valorizar as emoções para fazer brilhar a própria 'Estrela da Sorte'."
  },
  {
    nome: 'A Lua',
    fotoUrl: 'https://1.bp.blogspot.com/-KD1VyI7Fkt4/WQ-ByqmdpAI/AAAAAAAAAzU/TXbsDToj20ohTLlDVNF9wlobg5P4frGYgCLcB/s1600/a%2Blua%2Bmarseille.jpg',    
    texto: "A Lua, como Arcano Pessoal, convida a um mergulho profundo nas águas da espiritualidade e do autoconhecimento. É fundamental para a pessoa desenvolver uma forte conexão com o seu mundo interior, discernindo a realidade das ilusões e utilizando sua possível habilidade mediúnica como uma ferramenta de descoberta e proteção."
  },
  {
    nome: 'O Sol',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/19-O-Sol-The-Sun-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "O Sol, como Arcano Pessoal, representa a missão de irradiar alegria e encontrar satisfação na vida. A pessoa deve evitar superficialidades e viver com profundidade, celebrando momentos especiais, cultivando relacionamentos significativos e mantendo um equilíbrio saudável em todas as áreas da vida."
  },
  {
    nome: 'O Julgamento',
    fotoUrl: 'https://images.squarespace-cdn.com/content/5916d4da2994ca3bd87b3a87/1555693945104-SI4CCSJNPIEVGEFRZ8WX/IMG_8243.JPG?content-type=image%2Fjpeg',    
    texto: "O Julgamento, como Arcano Pessoal, indica uma missão de avaliação crítica e a capacidade de identificar oportunidades. A pessoa deve usar seu senso crítico construtivamente, organizar seu dia a dia para manter a estabilidade e evitar ficar presa ao passado, resolvendo pendências e evitando a procrastinação."
  },
  {
    nome: 'O Mundo',
    fotoUrl: 'https://caotize.se/wp-content/uploads/2018/11/21-O-Mundo-The-World-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg',    
    texto: "O Mundo, como Arcano Pessoal, encoraja a realização de grandes conquistas, mantendo uma visão positiva e proativa da vida. É fundamental para a pessoa manter seus objetivos confidenciais, desenvolver suas habilidades mediúnicas e espirituais, e manter-se aberta às percepções do mundo ao redor."
  },
  {
    nome: 'O Louco',
    fotoUrl: 'https://3.bp.blogspot.com/-hL63irswebA/WepLPjE5HZI/AAAAAAAAtzk/zKK7CTEeO3gfi0NwadcDZbxZPnyd4Z8eACLcBGAs/s1600/RWS_Tarot_00_Fool.jpg',    
    texto: "O Louco, como Arcano Pessoal, simboliza a busca pela liberdade incondicional em todos os aspectos da vida. A pessoa deve equilibrar a necessidade de liberdade com a responsabilidade, aproveitar as oportunidades de viagens e novas experiências, e cultivar uma conexão espiritual profunda."
  }
];

export default arcanoData;