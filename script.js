// ============ TEXTOS PROFUNDOS (4 conjuntos por sentimento) ============
const prayerTexts = {
    afastado: [
        [ // Set 1: Oceano/Onda
            "Há momentos em que a vida parece um eco distante, e nós, caminhantes exilados de nosso próprio coração. Essa distância não é um castigo, mas o silêncio misterioso que antecede o reencontro. O oceano não perde sua imensidão quando a onda recua; ele apenas respira.",
            "Sinta a sua própria presença agora. O afastamento é apenas a mente tentando medir o incomensurável. Volte para o centro do seu peito. A centelha que você procura nunca saiu de você, ela apenas aguardava a sua atenção repousar.",
            "Não tente atravessar pontes longas para chegar a si mesmo. O caminho de volta é feito em um único passo, na profundidade de um único suspiro. Aceite este momento de vazio, pois é apenas na vastidão do vazio que o ser verdadeiro pode, finalmente, ancorar."
        ],
        [ // Set 2: Espelho/Névoa
            "Um espelho embaçado não perde a capacidade de refletir; ele apenas aguarda a mão que limpa a superfície. Sentir-se desconectado é como olhar através da névoa das exigências diárias. O cansaço turva a visão da alma, fazendo-nos esquecer a clareza que reside no fundo.",
            "Respire e permita que a poeira das preocupações comece a baixar. Você não precisa buscar uma nova identidade ou consertar quem você é. Apenas observe a névoa se dissipar lentamente com o calor da sua própria consciência.",
            "A imagem que surge não é de um estranho, mas do seu eu mais antigo e intocado. O que estava oculto sempre esteve presente. A conexão não é algo que se conquista lá fora, mas uma lembrança suave que brota quando finalmente paramos de procurar."
        ],
        [ // Set 3: Exílio/Jornada
            "Às vezes, somos viajantes que andam por tanto tempo que esquecem o próprio nome. A sensação de estar longe de tudo é o peso da poeira da estrada na alma. Mas cada passo dado no escuro também é um passo que nos ensina a ler o céu noturno.",
            "O lar não é um endereço geográfico, nem um lugar no passado, mas um estado de absoluta integridade no agora. Pare de caminhar por um instante. Deixe que a quietude o alcance, pois é na imobilidade que a alma nos alcança.",
            "Sinta a terra firme sob os seus pés. Você não está exilado da vida; você está apenas percorrendo o labirinto necessário para descobrir que o centro sempre esteve pulsando dentro do seu próprio peito."
        ],
        [ // Set 4: Inverno/Raízes
            "O inverno da alma congela a superfície das coisas, fazendo parecer que não há vida pulsando. Sentir-se afastado é viver essa estação fria, onde a comunicação cessa e o mundo parece mudo. Mas lembre-se: é sob a neve que as raízes crescem mais fortes.",
            "Não exija flores de si mesmo agora. Há um propósito sagrado neste recolhimento severo. A vida não parou de fluir em você; ela apenas recuou para as profundezas, para nutrir o que é essencial e invisível aos olhos ansiosos.",
            "Abrace essa hibernação espiritual. A primavera não é apressada pela nossa vontade. Quando o gelo derreter, e ele sempre derrete, você descobrirá que a seiva que sustentava o seu ser nunca deixou de correr, silenciosa e vital."
        ]
    ],
    proximo: [
        [ // Set 1: Gota/Oceano
            "Sinto o pulso da vida não apenas ao meu redor, mas tecendo a própria fibra de quem sou. Não há fronteira entre o ar que respiro e o mistério que sustenta as estrelas. Tudo é uma única e contínua canção silenciosa.",
            "Nesta clareza, percebo que não estou meramente no mundo; eu sou uma expressão do mundo despertando para si mesmo. As antigas paredes da separação ruíram. O que antes eu chamava de 'eu' é agora apenas a gota consciente de um oceano infinito.",
            "Permaneço aqui, banhado nesta comunhão intemporal. Que este instante de lucidez penetre em todas as minhas células, lembrando-me de que o universo não é um lugar distante, mas o próprio chão onde piso quando caminho com o coração desperto."
        ],
        [ // Set 2: Teia/Sinfonia
            "Cada respiração é um fio invisível que me liga a toda a existência. Não há nada isolado; a árvore, a pedra, o vento e eu somos acordes da mesma sinfonia profunda. Sinto a vibração da teia da vida, sustentando e permeando cada átomo do meu ser.",
            "Nesta comunhão, a solidão é uma ilusão impossível. Percebo que sou feito da mesma matéria que a poeira estelar e o silêncio da montanha. Onde quer que eu vá, levo comigo a totalidade, pois a parte contém o todo.",
            "Que essa ressonância pacifique minhas incertezas. Viver neste estado de conexão é dançar no ritmo do universo, sabendo que cada movimento meu ondula pela eternidade, e que sou amparado pela vasta e silenciosa inteligência da vida."
        ],
        [ // Set 3: Respiração/Vento
            "Ao inspirar, absorvo o infinito; ao expirar, entrego-me a ele. Não sou um ser respirando em um mundo; eu e o mundo somos um único pulmão respirando. A fronteira entre o dentro e o fora dissolve-se como fumaça no ar noturno.",
            "Essa fluidez traz uma paz inabalável. Compreendo que não preciso segurar a vida, apenas deixar que ela passe por mim. Eu sou o espaço aberto onde o cosmos experimenta a si mesmo. O mistério deixa de ser um enigma e torna-se a minha própria essência.",
            "Descanso nesta vastidão respiratória. Não há nada a provar, nada a defender. Sou um instrumento oco por onde sopra o vento da existência, produzindo a música perfeita deste instante preciso e intocável."
        ],
        [ // Set 4: Luz/Prisma
            "Como a luz que atravessa um prisma, vejo que todas as minhas formas e experiências são apenas dispersões de uma única e pura consciência. O mundo lá fora e a mente aqui dentro refletem-se mutuamente em um espelho infinito.",
            "Estou conectado à fonte luminosa que antecede os nomes e as formas. A separação que eu temia não passa de uma sombra brincando na parede. Quando me volto para a origem da luz, descubro que eu sou o próprio farol.",
            "Mantenho essa claridade no meu peito. Ela ilumina os cantos escuros e dissolve os medos. Caminhar com essa proximidade é ver o familiar com olhos de assombro, reconhecendo que cada rosto, cada folha, é um raio dessa mesma luz ancestral."
        ]
    ],
    necessidade: [
        [ // Set 1: Ouro/Kintsugi
            "A dor e a dificuldade muitas vezes agem como o martelo invisível que rompe a casca da nossa semente, permitindo que algo mais verdadeiro possa brotar. Neste momento de fragilidade, reconheço que não preciso ser inquebrável.",
            "Deixo cair as armaduras que pesam sobre a minha alma. O universo não exige a minha perfeição, exige apenas a minha presença crua. A força genuína nasce da coragem de abraçar a vulnerabilidade, preenchendo as próprias cicatrizes com o ouro da consciência.",
            "Que eu possa encontrar luz não fugindo da escuridão, mas permitindo que meus olhos se ajustem a ela. Nas sombras mais densas, as raízes encontram sua água mais pura. Confio na inteligência da vida que repara o que foi quebrado, tornando-o mais forte e belo."
        ],
        [ // Set 2: Tempestade/Árvore
            "Quando a tempestade uiva e os ventos dobram a estrutura da minha vida, sinto o desespero tentando arrancar minhas certezas. É na necessidade profunda que descubro a verdadeira profundidade das minhas raízes.",
            "Eu sou como a árvore ancestral: não luto contra o vento resistindo rigidamente, mas aprendo a dobrar sem quebrar. A ventania arranca as folhas secas, mas não pode tocar a minha essência enterrada na terra firme da resiliência.",
            "Aceito o impacto deste momento. As tempestades não vêm para destruir, mas para testar a nossa ancoragem. Que a fúria lá fora me ensine a cultivar a estabilidade inabalável aqui dentro, no cerne do meu tronco espiritual."
        ],
        [ // Set 3: Escuridão/Semente
            "Sinto o peso da terra sobre mim e a sufocante escuridão da incerteza. A necessidade extrema parece um enterro precoce, mas talvez seja apenas um plantio. Toda grande transformação começa no silêncio escuro e apertado do subsolo.",
            "Abraço a angústia da semente cuja casca precisa ceder. A dor do rompimento é o preço do crescimento em direção à luz. Não preciso entender todo o percurso; basta confiar no instinto vital que me empurra para cima.",
            "Que este estado de necessidade seja o solo fértil da minha reinvenção. Eu me permito ser desfeito no escuro, sabendo que as mãos invisíveis da vida estão, cuidadosamente, preparando o meu renascimento para um campo aberto e ensolarado."
        ],
        [ // Set 4: Deserto/Oásis
            "A escassez secou minhas paisagens familiares. Caminho pelo deserto da necessidade, onde miragens de alívio rápido se desfazem diante dos meus olhos cansados. A sede da alma é um fogo que purifica as intenções rasas.",
            "Não procuro mais fontes fora de mim, pois percebo que elas são passageiras. A verdadeira provação é escavar no terreno árido do meu próprio ser até encontrar o lençol freático, o oásis escondido que a seca exterior me obrigou a procurar.",
            "Entrego-me a essa busca essencial. A falta absoluta cria o espaço sagrado para o preenchimento autêntico. Que a sede que sinto agora me guie até a nascente profunda, àquela água tranquila que jorra da minha própria presença invicta."
        ]
    ],
    grato: [
        [ // Set 1: Milagre/Simplicidade
            "A gratidão é o estado de elevação de quem percebeu o milagre absurdo escondido na simplicidade do existir. Não agradeço apenas pela ausência de dor, mas pela própria capacidade de sentir, de estar vivo, de ser uma testemunha consciente deste vasto teatro cósmico.",
            "Meu coração se expande não por aquilo que possuo, mas porque reconheço que cada fôlego é um empréstimo sagrado. A intrincada teia da vida me sustenta, desde a terra silenciosa até a luz das estrelas antigas que agora tocam meu rosto.",
            "Nesta plenitude, compreendo que mesmo as perdas foram escultoras de quem me tornei. Agradeço ao que floresceu e ao que teve que murchar para abrir espaço. Eu sou a própria gratidão pulsando, um altar vivo que celebra o privilégio de simplesmente ser."
        ],
        [ // Set 2: Banquete/Hóspede
            "Reconheço a vida como um banquete incomensurável e a mim mesmo como um hóspede de honra da eternidade. O sol que aquece a pele, a água que alivia a sede, não são acidentes, mas a generosidade anônima do cosmos derramando-se em meu favor.",
            "Minha gratidão não escolhe apenas os frutos doces; curvo-me também diante dos sabores amargos que nutriram a minha resiliência e amadureceram a minha alma. Tudo é alimento para a consciência despertando.",
            "Sento-me à mesa deste instante com um sorriso sereno no espírito. Não peço mais nada. O próprio ato de saborear o agora, de sentir o pulsar do sangue e o fluxo dos pensamentos, já é a maior e mais profunda das fortunas."
        ],
        [ // Set 3: Rio/Fluxo
            "A gratidão em mim flui como um rio limpo, levando embora os detritos da expectativa e da queixa. Quando agradeço, deixo de bloquear o fluxo da existência. Compreendo que tudo o que recebo deve passar por mim, e nada deve ser acumulado com medo.",
            "Estou maravilhado com a abundância silenciosa que a mente comum ignora. Cada batida do coração é um dom contínuo que não precisei conquistar, uma dádiva que o mistério da vida insiste em renovar segundo após segundo.",
            "Solto as amarras e flutuo nessa correnteza de graça. Ser grato é reconhecer que a água do rio não me pertence, mas tenho a bênção de me banhar nela hoje. Que esse sentimento de reverência acompanhe todos os meus passos."
        ],
        [ // Set 4: Olhos/Testemunha
            "Hoje compreendo que o universo, imenso e escuro, precisa de mim para se perceber. Minha gratidão nasce da percepção profunda de que sou os olhos pelos quais a criação admira a sua própria beleza. Sou o universo experimentando a si mesmo.",
            "Que privilégio indescritível é ter consciência, ser capaz de observar uma folha caindo, sentir a textura do vento, ouvir o silêncio entre os sons. Nada disso é trivial. Cada detalhe é um bilhete de ouro para o espetáculo da existência.",
            "O assombro é o meu estado natural hoje. Transbordo em silêncio. A gratidão dissolve o próprio 'eu' agradecendo, fundindo o observador, o ato de observar e a maravilhosa tapeçaria cósmica que é observada, em uma única coisa luminosa."
        ]
    ],
    perdido: [
        [ // Set 1: Mapa/Bússola
            "O sentimento de estar perdido surge quando os mapas velhos queimam antes que novos territórios tenham sido desbravados. Caminho no escuro sem referências, e o medo da vastidão aperta o peito. Mas a desorientação é, muitas vezes, a antessala da verdadeira liberdade.",
            "Quando todas as bússolas externas quebram, sou forçado a despertar a bússola interna, aquela que não aponta para o norte magnético, mas para a verdade inegociável do meu próprio ser. Não estou à deriva; estou reaprendendo a navegar pelas estrelas do instinto.",
            "Deixo a urgência de encontrar uma resposta se acalmar. Confio que o labirinto foi desenhado não para me aprisionar, mas para me fazer abandonar o passo apressado. Estar perdido é apenas o momento de profunda pausa antes de ser, finalmente, encontrado pela alma."
        ],
        [ // Set 2: Montanha/Névoa
            "A névoa desceu densa sobre a trilha, apagando os horizontes e roubando as certezas do próximo passo. Sinto-me solto no vazio cinzento, duvidando até mesmo de onde vim. A confusão mascara a paisagem majestosa da minha própria jornada.",
            "Preciso lembrar que a montanha não desaparece só porque a névoa a encobriu. A solidez de quem sou permanece intacta, aguardando que os ventos do tempo dissipem a cerração mental. Não preciso correr no escuro; o ato mais corajoso agora é ficar parado e respirar.",
            "Aceito o manto do desconhecido. A névoa exige reverência e passadas lentas. Deixo que a visão embaçada me ensine a enxergar com outros sentidos, confiando na topografia invencível do meu próprio espírito, mesmo quando não posso vê-lo."
        ],
        [ // Set 3: Crisálida/Metamorfose
            "Perder-se não é um erro geográfico, é uma dissolução existencial. O velho casulo já não me abriga, mas a nova forma ainda não criou asas. Estou no espaço liminar, derretendo-me na sopa caótica da minha própria metamorfose. É escuro e assustador.",
            "Não tento colar as velhas peças de volta; elas já não me servem. O estar perdido é a própria inteligência da natureza reestruturando o meu destino. A dor não vem da transformação, mas da minha tentativa inútil de segurar o que a vida já descartou.",
            "Entrego-me ao mistério escuro desta crisálida. Permito-me não saber quem sou por um momento, para que eu possa emergir como quem devo ser. O voo que me espera amanhã precisa deste caos silencioso e solitário de hoje."
        ],
        [ // Set 4: Oceano Aberto/Navegação
            "Todas as margens sumiram de vista. Flutuo num oceano sem fronteiras, onde cada direção parece igual e o pânico de não ter um porto seguro tenta dominar a minha mente. A liberdade absoluta de escolha, por vezes, esmaga o navegador.",
            "Abandono a ansiedade de avistar terra firme imediatamente. As antigas viagens de descoberta eram feitas de longos silêncios sobre o azul profundo. Aprendo a deitar no fundo do meu próprio ser e observar o movimento das constelações internas.",
            "Mesmo à deriva nas águas da incerteza, eu sou o meu próprio barco. A paz retorna quando percebo que, onde quer que eu esteja nesse vasto mar da existência, estou no centro exato da minha própria jornada. E o mar também sabe o caminho de casa."
        ]
    ],
    paz: [
        [ // Set 1: Lago/Espelho
            "Descobri um santuário de quietude absoluta dentro de mim, intocável pelas tempestades lá de fora. A mente, que antes corria turbulenta, agora se assemelha a um lago perfeitamente plácido na primeira luz da manhã. Não há ondas, não há margens.",
            "Nesta imobilidade de vidro, a superfície da minha consciência reflete o céu inteiro. Nada precisa ser conquistado ou resolvido neste segundo. O tempo dissolveu-se, e sobrou apenas o frescor vibrante da pura presença e do simples ser.",
            "Sou o silêncio preenchido de significado, sem defesas, sem provas a dar. Que esta paz espelhada repouse no fundo da minha alma, servindo como refúgio eterno ao qual posso sempre retornar, independente do ruído do mundo."
        ],
        [ // Set 2: Montanha/Rocha
            "Sento-me com a firmeza ancestral de uma montanha. As nuvens das preocupações diárias passam ao meu redor, algumas cinzentas, outras velozes, mas nenhuma delas altera a solidez majestosa do meu núcleo. Eu apenas observo.",
            "A gravidade da paz me ancora na terra. A ansiedade tenta puxar minhas raízes, mas encontra apenas rocha viva. Descanso no reconhecimento de que tudo passa, enquanto a consciência que observa as coisas passando permanece eterna e imperturbável.",
            "Mantenho essa postura de dignidade silenciosa. Não luto contra os ventos nem prendo as nuvens. Apenas repouso na maravilha imponente da minha própria existência tranquila, bastando a mim mesmo na perfeição deste agora."
        ],
        [ // Set 3: Brasa/Lareira
            "A paz que sinto não é um fogo de artifício espalhafatoso, mas a quietude quente e persistente de uma brasa numa lareira silenciosa. É uma serenidade madura, profunda, que não precisa brilhar para aquecer o aposento do espírito.",
            "Acalmo-me no conforto desse calor interior. As correrias perderam a importância e a voz estridente do ego foi reduzida a um sussurro irrelevante. Encontrei aconchego na textura sutil do momento presente, livre de ontens e amanhãs.",
            "Deixo que essa brasa suave e irradiante descontraia meus ombros e ilumine minha mente sem queimar a visão. O contentamento repousa aqui. Sou simplesmente a chama quieta e constante, em paz com a penumbra ao redor."
        ],
        [ // Set 4: Espaço/Céu Aberto
            "A mente se abriu até se tornar tão vasta quanto o céu azul sem fim. Pensamentos surgem como pássaros cruzando a abóbada distante, mas não deixam rastros no espaço vazio. Eu não sou os pássaros; eu sou a vastidão onde eles voam.",
            "A imensidão desta paz não possui bordas onde bater ou ferir. É um estado de leveza incalculável, uma aceitação radical de tudo o que existe no exato momento em que existe. O peso da identidade evaporou, deixando uma clareza cristalina.",
            "Respiro o ar desimpedido da liberdade infinita. Tudo está exatamente em seu lugar. A paz não é a ausência de movimento, mas o abraço acolhedor de todo e qualquer movimento dentro de um espaço imenso de amorosa indiferença."
        ]
    ]
};

// ============ ESTADO GLOBAL ============
let currentMood = null;
let currentPrayerTexts = [];
let currentParagraph = 0;
let isSpeaking = false;
let isPaused = false;
let utterance = null;
let speechSynth = window.speechSynthesis;
let selectedVoice = null;
let speechRate = 1.0;
let rainAudioCtx = null;
let rainGain = null;
let isRaining = false;
let pianoOscillators = [];
let isPianoPlaying = false;
let pianoInterval = null;

// ============ TEMAS ============
function initTheme() {
    const saved = localStorage.getItem('prayerTheme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('prayerTheme', next);
}

// ============ NAVEGAÇÃO ============
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function showMenu() {
    showSection('menu-section');
}

// ============ SELECÇÃO DE SENTIMENTO ============
function selectMood(mood) {
    currentMood = mood;
    
    // Escolhe um dos 4 conjuntos aleatoriamente
    const moodSets = prayerTexts[mood];
    const randomSetIndex = Math.floor(Math.random() * moodSets.length);
    currentPrayerTexts = moodSets[randomSetIndex];
    
    currentParagraph = 0;
    showSection('prayer-section');
    renderPrayer();
}

function renderPrayer() {
    const container = document.getElementById('prayer-content');
    const moodNames = {
        afastado: '🌙 Afastado',
        proximo: '✨ Próximo',
        necessidade: '🤲 Em Necessidade',
        grato: '🙏 Grato',
        perdido: '🌫️ Perdido',
        paz: '☮️ Em Paz'
    };
    
    let html = `<h2>${moodNames[currentMood]}</h2>`;
    
    // Círculo de respiração
    html += `
        <div class="breath-circle" id="breathCircle">
            <span>Respire</span>
        </div>
    `;
    
    // Parágrafo atual
    html += `<div class="prayer-text" id="prayerText">${currentPrayerTexts[currentParagraph]}</div>`;
    
    // Navegação de parágrafos
    html += `
        <div class="paragraph-nav">
            <span class="paragraph-dots">
                ${currentPrayerTexts.map((_, i) => 
                    `<span class="dot ${i === currentParagraph ? 'active' : ''}"></span>`
                ).join('')}
            </span>
        </div>
    `;
    
    // Botões de ação
    html += `
        <div class="action-buttons">
            ${currentParagraph > 0 ? '<button class="btn-secondary" onclick="prevParagraph()">← Anterior</button>' : ''}
            ${currentParagraph < currentPrayerTexts.length - 1 ? 
                '<button class="btn-primary" onclick="nextParagraph()">Próximo →</button>' : 
                '<button class="btn-primary" onclick="finishPrayer()">Concluir ✨</button>'
            }
        </div>
    `;
    
    // Botões de ação extras
    html += `
        <div class="extra-actions">
            <button class="btn-icon" onclick="toggleSpeech()" id="speechBtn" title="Ouvir oração">▶️ Ouvir</button>
            <button class="btn-icon" onclick="saveReflection()" title="Salvar reflexão">💾 Salvar</button>
        </div>
    `;
    
    container.innerHTML = html;
}

function nextParagraph() {
    if (currentParagraph < currentPrayerTexts.length - 1) {
        currentParagraph++;
        renderPrayer();
    }
}

function prevParagraph() {
    if (currentParagraph > 0) {
        currentParagraph--;
        renderPrayer();
    }
}

function finishPrayer() {
    stopSpeech();
    showSection('menu-section');
    
    // Atualizar estatísticas
    updateStats();
    
    // Mostrar mensagem
    showToast('✨ Momento de paz concluído!');
}

// ============ MÚSICA AMBIENTE (CHUVA) ============
function toggleRain() {
    if (isRaining) {
        stopRain();
    } else {
        startRain();
    }
}

function startRain() {
    if (!rainAudioCtx) {
        rainAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const bufferSize = 2 * rainAudioCtx.sampleRate;
    const noiseBuffer = rainAudioCtx.createBuffer(1, bufferSize, rainAudioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }
    
    const whiteNoise = rainAudioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;
    
    // Filtro para som de chuva
    const bandpass = rainAudioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 800;
    bandpass.Q.value = 0.5;
    
    const highpass = rainAudioCtx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 400;
    
    rainGain = rainAudioCtx.createGain();
    rainGain.gain.value = 0.15;
    
    whiteNoise.connect(bandpass);
    bandpass.connect(highpass);
    highpass.connect(rainGain);
    rainGain.connect(rainAudioCtx.destination);
    
    whiteNoise.start();
    rainAudioCtx._rainSource = whiteNoise;
    
    isRaining = true;
    document.getElementById('rainBtn').classList.add('active');
}

function stopRain() {
    if (rainAudioCtx && rainAudioCtx._rainSource) {
        rainAudioCtx._rainSource.stop();
        rainAudioCtx._rainSource = null;
    }
    isRaining = false;
    document.getElementById('rainBtn').classList.remove('active');
}

// ============ PIANO AMBIENTE ============
function togglePiano() {
    if (isPianoPlaying) {
        stopPiano();
    } else {
        startPiano();
    }
}

function startPiano() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
    
    function playNote() {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = notes[Math.floor(Math.random() * notes.length)];
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2);
    }
    
    pianoInterval = setInterval(playNote, 2000 + Math.random() * 3000);
    playNote();
    
    isPianoPlaying = true;
    document.getElementById('pianoBtn').classList.add('active');
}

function stopPiano() {
    if (pianoInterval) {
        clearInterval(pianoInterval);
        pianoInterval = null;
    }
    isPianoPlaying = false;
    document.getElementById('pianoBtn').classList.remove('active');
}

// ============ TEXT-TO-SPEECH ============
function loadVoices() {
    const voiceSelect = document.getElementById('voiceSelect');
    if (!voiceSelect) return;
    
    const voices = speechSynth.getVoices();
    voiceSelect.innerHTML = '';
    
    // Priorizar vozes em português
    const ptVoices = voices.filter(v => v.lang.startsWith('pt'));
    const otherVoices = voices.filter(v => !v.lang.startsWith('pt'));
    
    [...ptVoices, ...otherVoices].forEach((voice, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        option.dataset.voiceIndex = voices.indexOf(voice);
        voiceSelect.appendChild(option);
    });
    
    // Selecionar voz brasileira padrão
    const ptBr = ptVoices.find(v => v.lang === 'pt-BR');
    if (ptBr) {
        voiceSelect.value = [...ptVoices, ...otherVoices].indexOf(ptBr);
    }
}

function toggleSpeech() {
    if (isSpeaking) {
        stopSpeech();
    } else {
        startSpeech();
    }
}

function startSpeech() {
    if (isSpeaking) return;
    
    const text = currentPrayerTexts[currentParagraph];
    utterance = new SpeechSynthesisUtterance(text);
    
    // Configurar voz
    const voiceSelect = document.getElementById('voiceSelect');
    if (voiceSelect && voiceSelect.selectedOptions[0]) {
        const voiceIndex = voiceSelect.selectedOptions[0].dataset.voiceIndex;
        utterance.voice = speechSynth.getVoices()[voiceIndex];
    }
    
    // Configurar velocidade
    utterance.rate = speechRate;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Destacar palavras durante a leitura
    const prayerText = document.getElementById('prayerText');
    if (prayerText) {
        const words = text.split(' ');
        prayerText.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
        
        const wordSpans = prayerText.querySelectorAll('.word');
        let wordIndex = 0;
        
        utterance.onboundary = (event) => {
            // Remover destaque anterior
            wordSpans.forEach(s => s.classList.remove('highlight'));
            
            // Encontrar e destacar a palavra atual
            if (event.name === 'word' && wordIndex < wordSpans.length) {
                wordSpans[wordIndex].classList.add('highlight');
                wordIndex++;
            }
        };
    }
    
    utterance.onend = () => {
        stopSpeech();
        // Avançar para próximo parágrafo automaticamente
        if (currentParagraph < currentPrayerTexts.length - 1) {
            setTimeout(() => {
                currentParagraph++;
                renderPrayer();
            }, 1500);
        }
    };
    
    speechSynth.speak(utterance);
    isSpeaking = true;
    updateSpeechButton();
}

function stopSpeech() {
    speechSynth.cancel();
    isSpeaking = false;
    isPaused = false;
    updateSpeechButton();
    
    // Remover destaques
    document.querySelectorAll('.word').forEach(w => w.classList.remove('highlight'));
}

function togglePauseSpeech() {
    if (isPaused) {
        speechSynth.resume();
        isPaused = false;
    } else {
        speechSynth.pause();
        isPaused = true;
    }
    updateSpeechButton();
}

function updateSpeechButton() {
    const btn = document.getElementById('speechBtn');
    if (!btn) return;
    
    if (isSpeaking) {
        btn.textContent = isPaused ? '▶️ Continuar' : '⏸️ Pausar';
    } else {
        btn.textContent = '▶️ Ouvir';
    }
}

function setSpeechRate(rate) {
    speechRate = rate;
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.rate == rate);
    });
    
    // Se estiver falando, reiniciar com nova velocidade
    if (isSpeaking) {
        stopSpeech();
        startSpeech();
    }
}

// ============ HISTÓRICO ============
function saveReflection() {
    const history = JSON.parse(localStorage.getItem('prayerHistory') || '[]');
    
    const entry = {
        id: Date.now(),
        mood: currentMood,
        text: currentPrayerTexts[currentParagraph],
        date: new Date().toISOString()
    };
    
    history.unshift(entry);
    localStorage.setItem('prayerHistory', JSON.stringify(history));
    
    showToast('💾 Reflexão salva!');
}

function getHistory() {
    return JSON.parse(localStorage.getItem('prayerHistory') || '[]');
}

function deleteHistoryItem(id) {
    const history = getHistory().filter(item => item.id !== id);
    localStorage.setItem('prayerHistory', JSON.stringify(history));
    renderHistory();
    showToast('🗑️ Item removido');
}

function clearHistory() {
    if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
        localStorage.removeItem('prayerHistory');
        renderHistory();
        showToast('🗑️ Histórico limpo');
    }
}

function renderHistory() {
    const container = document.getElementById('history-content');
    const history = getHistory();
    
    const moodNames = {
        afastado: '🌙 Afastado',
        proximo: '✨ Próximo',
        necessidade: '🤲 Necessidade',
        grato: '🙏 Grato',
        perdido: '🌫️ Perdido',
        paz: '☮️ Paz'
    };
    
    if (history.length === 0) {
        container.innerHTML = '<p class="empty-state">Nenhuma reflexão salva ainda.</p>';
        return;
    }
    
    let html = history.map(item => `
        <div class="history-item">
            <div class="history-header">
                <span class="history-mood">${moodNames[item.mood]}</span>
                <span class="history-date">${new Date(item.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <p class="history-text">${item.text.substring(0, 150)}...</p>
            <button class="btn-delete" onclick="deleteHistoryItem(${item.id})">✕ Excluir</button>
        </div>
    `).join('');
    
    html += `<button class="btn-danger" onclick="clearHistory()">🗑️ Limpar tudo</button>`;
    
    container.innerHTML = html;
}

// ============ ESTATÍSTICAS ============
function getStats() {
    const history = getHistory();
    const now = new Date();
    
    // Total
    const total = history.length;
    
    // Hoje
    const today = now.toDateString();
    const todayCount = history.filter(h => 
        new Date(h.date).toDateString() === today
    ).length;
    
    // Esta semana
    const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const weekCount = history.filter(h => 
        new Date(h.date) >= weekAgo
    ).length;
    
    // Este mês
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthCount = history.filter(h => 
        new Date(h.date) >= monthStart
    ).length;
    
    // Streak
    const streak = calculateStreak(history);
    
    // Sentimentos
    const moodCounts = {};
    history.forEach(h => {
        moodCounts[h.mood] = (moodCounts[h.mood] || 0) + 1;
    });
    
    // Sentimento mais comum
    const topMood = Object.entries(moodCounts)
        .sort((a, b) => b[1] - a[1])[0];
    
    return {
        total,
        todayCount,
        weekCount,
        monthCount,
        streak,
        moodCounts,
        topMood: topMood ? topMood[0] : null
    };
}

function calculateStreak(history) {
    if (history.length === 0) return 0;
    
    const dates = [...new Set(history.map(h => 
        new Date(h.date).toDateString()
    ))].sort((a, b) => new Date(b) - new Date(a));
    
    let streak = 1;
    const today = new Date();
    
    // Verificar se orou hoje
    if (dates[0] !== today.toDateString()) {
        const yesterday = new Date(today - 24 * 60 * 60 * 1000);
        if (dates[0] !== yesterday.toDateString()) {
            return 0;
        }
    }
    
    for (let i = 0; i < dates.length - 1; i++) {
        const current = new Date(dates[i]);
        const next = new Date(dates[i + 1]);
        const diffDays = (current - next) / (24 * 60 * 60 * 1000);
        
        if (diffDays === 1) {
            streak++;
        } else {
            break;
        }
    }
    
    return streak;
}

function renderStats() {
    const container = document.getElementById('stats-content');
    const stats = getStats();
    
    const moodNames = {
        afastado: '🌙 Afastado',
        proximo: '✨ Próximo',
        necessidade: '🤲 Necessidade',
        grato: '🙏 Grato',
        perdido: '🌫️ Perdido',
        paz: '☮️ Paz'
    };
    
    let html = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${stats.total}</div>
                <div class="stat-label">Total de orações</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.todayCount}</div>
                <div class="stat-label">Hoje</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.weekCount}</div>
                <div class="stat-label">Esta semana</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.monthCount}</div>
                <div class="stat-label">Este mês</div>
            </div>
            <div class="stat-card highlight">
                <div class="stat-value">🔥 ${stats.streak}</div>
                <div class="stat-label">Sequência atual</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.topMood ? moodNames[stats.topMood] : '-'}</div>
                <div class="stat-label">Sentimento mais comum</div>
            </div>
        </div>
    `;
    
    // Gráfico de barras por sentimento
    if (Object.keys(stats.moodCounts).length > 0) {
        const maxCount = Math.max(...Object.values(stats.moodCounts));
        
        html += '<div class="mood-bars">';
        html += '<h3>Por sentimento</h3>';
        
        Object.entries(stats.moodCounts).forEach(([mood, count]) => {
            const percentage = (count / maxCount) * 100;
            html += `
                <div class="mood-bar-item">
                    <span class="mood-label">${moodNames[mood]}</span>
                    <div class="mood-bar">
                        <div class="mood-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="mood-count">${count}</span>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    if (stats.total === 0) {
        html = '<p class="empty-state">Comece sua jornada espiritual fazendo sua primeira oração!</p>';
    }
    
    container.innerHTML = html;
}

function updateStats() {
    // Atualizar stats quando necessário
}

// ============ TOAST ============
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadVoices();
    
    // Recarregar vozes quando disponíveis
    if (speechSynth.onvoiceschanged !== undefined) {
        speechSynth.onvoiceschanged = loadVoices;
    }
});

// Limpar ao fechar
window.addEventListener('beforeunload', () => {
    stopRain();
    stopPiano();
    stopSpeech();
});
