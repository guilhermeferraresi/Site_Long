let modoEscuro = false;
let idioma = "pt-br";
let estadoIdiomas

const imgLua = document.getElementById("imgLua");
const pIdioma = document.getElementById("pIdioma");


const imagensComTema = document.querySelectorAll("img");



document.addEventListener("DOMContentLoaded", () => {
  const portfolioCarousel = document.getElementById("portfolioCarousel");
  const prevPortfolio = document.getElementById("prevPortfolio");
  const nextPortfolio = document.getElementById("nextPortfolio");
  const sets = document.querySelectorAll(".portfolio-set");
  const retIdioma = document.getElementById('idRetIdioma');
  estadoIdiomas = retIdioma && retIdioma.classList.contains('cima') ? 'cima' : 'baixo';
  aplicarDivIdiomas(); 

  let currentIndex = 0;

  function scrollToCurrentSet() {
    const set = sets[currentIndex];
    if (set) {
      const left = set.offsetLeft;
      portfolioCarousel.scrollTo({ left, behavior: "smooth" });
    }
    updateButtons();
  }

  function updateButtons() {
    prevPortfolio.disabled = currentIndex === 0;
    nextPortfolio.disabled = currentIndex === sets.length - 1;
  }

  prevPortfolio.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCurrentSet();
    }
  });

  nextPortfolio.addEventListener("click", () => {
    if (currentIndex < sets.length - 1) {
      currentIndex++;
      scrollToCurrentSet();
    }
  });

 
  scrollToCurrentSet();
});


imgLua.addEventListener("click", () => {
    modoEscuro = !modoEscuro;
    console.log("Modo escuro alternado para:", modoEscuro);
    aplicarTema();
});

document.getElementById("divIdiomas").addEventListener("click", () => {
    estadoIdiomas = estadoIdiomas === "cima" ? "baixo" : "cima";
    console.log("O estado da div idiomas é:", estadoIdiomas);
    aplicarDivIdiomas();
});

document.getElementById("mudaPort").addEventListener("click", () => {
    console.log("Alternando idioma, actual:", idioma);
    idioma = "pt-br";
    document.getElementById("checkEn").classList.remove("visivel");
    document.getElementById("checkEn").classList.add("invisivel");
    document.getElementById("checkPort").classList.remove("invisivel");
    document.getElementById("checkPort").classList.add("visivel");
    document.getElementById("checkZh").classList.remove("visivel");
    document.getElementById("checkZh").classList.add("invisivel");
    console.log("Nuevo idioma:", idioma);
    aplicarIdioma();
});
document.getElementById("mudaEn").addEventListener("click", () => {
    console.log("Alternando idioma, actual:", idioma);
    idioma = "en";
    document.getElementById("checkPort").classList.remove("visivel");
    document.getElementById("checkPort").classList.add("invisivel");
    document.getElementById("checkEn").classList.remove("invisivel");
    document.getElementById("checkEn").classList.add("visivel");
    document.getElementById("checkZh").classList.remove("visivel");
    document.getElementById("checkZh").classList.add("invisivel");
    console.log("Nuevo idioma:", idioma);
    aplicarIdioma();
});
document.getElementById("mudaZh").addEventListener("click", () => {
    console.log("Alternando idioma, actual:", idioma);
    idioma = "zh";
    document.getElementById("checkPort").classList.remove("visivel");
    document.getElementById("checkPort").classList.add("invisivel");
    document.getElementById("checkEn").classList.remove("visivel");
    document.getElementById("checkEn").classList.add("invisivel");
    document.getElementById("checkZh").classList.remove("invisivel");
    document.getElementById("checkZh").classList.add("visivel");
    console.log("Nuevo idioma:", idioma);
    aplicarIdioma();
});

function aplicarDivIdiomas(){
    if(estadoIdiomas == "cima"){ 
        document.getElementById("idRetIdioma").classList.remove("baixo"); 
        document.getElementById("idRetIdioma").classList.add("cima"); 
        if (modoEscuro) {
            document.getElementById("imgFlechaIdioma").src = "img/flechaIdioma-escuro.png";
        } else{
            document.getElementById("imgFlechaIdioma").src = "img/flechaIdioma-claro.png";
        }
        
    } else { 
        document.getElementById("idRetIdioma").classList.add("baixo"); 
        document.getElementById("idRetIdioma").classList.remove("cima"); 
        if (modoEscuro) {
            document.getElementById("imgFlechaIdioma").src = "img/flechaCima-escuro.png";
        } else{
            document.getElementById("imgFlechaIdioma").src = "img/flechaCima-claro.png";
        }
        
    }
}

function aplicarTema() {
    imagensComTema.forEach(img => {
        if (modoEscuro) {
            if (img.src.includes("-claro.png")) {
                img.src = img.src.replace("-claro.png", "-escuro.png");
            }
        } else {
            if (img.src.includes("-escuro.png")) {
                img.src = img.src.replace("-escuro.png", "-claro.png");
            }
        }
    });


    imgLua.src = modoEscuro ? "img/Sun.png" : "img/lua-claro.png";
    document.body.classList.toggle("modo-escuro", modoEscuro);
}


function aplicarIdioma() {
    console.log("Aplicando idioma:", idioma);
    pIdioma.textContent = idioma.toUpperCase();
    const mapa = traducoes[idioma];
    if (!mapa) {
        console.error("No se encontraron traducciones para el idioma:", idioma);
        return;
    }
    document.querySelectorAll("[data-translation-key]").forEach(el => {
        const key = el.getAttribute("data-translation-key");
        if (mapa[key]) {
            el.innerHTML = mapa[key];
        } else {
            console.warn(`Clave de traducción "${key}" no encontrada para el idioma "${idioma}"`);
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado, inicializando idioma:", idioma);
    aplicarIdioma();
});


const traducoes = {
    "pt-br": {
        "pTechMenu": "Technology",
        "menuInicio": "Início",
        "menuSolucoes": "Soluções",
        "menuQuemSomos": "Quem Somos",
        "menuPortfolio": "Portfólio",
        "pTransformando": "Transformando o futuro da sua empresa com inovação e excelência.",
        "pCriacao": "Criação de sites e aplicativos mobile com foco em inovação, design e resultados.",
        "pContatos": "Contatos",
        "pOrc": "Faça um orçamento agora!",
        "pPorCProjetos": "Projetos Concluídos",
        "pPorCSatisfacao": "Satisfação do Cliente",
        "pPorCEquipe": "Equipe especializada",
        "tituloCardSoftware": "Criação de Softwares",
        "pCardsArquitetura": "Arquitetura de Software",
        "pCardsMetodologias": "Metodologias Ágeis",
        "pCardsTestes": "Testes de Software",
        "pCardsSeguranca": "Segurança da Informação",
        "txtCardsSoftware": "Também conhecida como desenvolvimento de software, é o processo de projetar, criar, implementar e <KILL>manter um software",
        "letraCardsL": "L",
        "tituloCardSites": "Criação de Sites",
        "pCardsFrontend": "Desenvolvimento Front-end",
        "pCardsSEO": "Otimização para SEO",
        "pCardsResponsivos": "Sites Responsivos",
        "pCardsAcessibilidade": "Acessibilidade na Web",
        "txtCardsSites": "Também referida como desenvolvimento de sites, é o conjunto de atividades necessárias para construir um website.",
        "letraCardsO": "Ó",
        "tituloCardUIUX": "UI / UX Design",
        "pCardsWireframes": "Wireframes Interativos",
        "pCardsDesignSystem": "Design System",
        "pCardsPsicologia": "Psicologia das Cores",
        "pCardsUsabilidade": "Testes de Usabilidade",
        "txtCardsUIUX": "UX Design se atenta com a funcionalidade e a experiência geral, enquanto o UI Design se preocupa com a aparência e a interação visual.",
        "letraCardsN": "N",
        "tituloCardApps": "Criação de Aplicativos",
        "pCardsNativoHibrido": "Dev. Nativo vs Híbrido",
        "pCardsAPIs": "Consumo de APIs",
        "pCardsPerformance": "Performance e Otimização",
        "pCardsPublicacao": "Publicação em Lojas",
        "txtCardsApps": "Também conhecida como desenvolvimento de aplicativos móveis, é o processo de criar software para dispositivos móveis.",
        "letraCardsG": "G",
        "pTituloQuem": "Quem Somos",
        "pConheca": "Conheça mais sobre nós",
        "pTituloLong": "Lóng Technology",
        "pTxtLong": "A Lóng Technology é uma empresa que atua na área de sistemas e sites profissionais, desde o protótipo até o gerenciamento e manutenção do seu sistema, trazendo sempre as melhores e mais novas tecnologias do mercado.",
        "pTituloNossaEquipe": "Nossa Equipe",
        "txtNossaEquipe": "Nossa equipe especializada",
        "pAno": "2025",
        "pTituloFerramentas": "Nossas Ferramentas",
        "tituloMVVMissao": "Missão",
        "pTxtMVVMissao": "Desenvolver soluções tecnológicas inovadoras e eficientes, proporcionando aos nossos clientes sistemas de alta qualidade personalizados e flexíveis, que otimizam seus processos e impulsionam seus negócios.",
        "tituloMVVVisao": "Visão",
        "pTxtMVVVisao": "Ser referência no mercado de desenvolvimento de sistemas, ser reconhecida pela excelência, inovação e compromisso com a transformação digital, impactando positivamente empresas e usuários",
        "tituloMVVValor": "Valor",
        "pTxtMVVValor": "Transparência, colaboração e foco no cliente, sempre com ética e responsabilidade, garantindo soluções eficientes.",
        "pTitTransforma": "Transforme sua ideia em realidade",
        "pTxtTrans": "Que tal impulsionarmos juntos a sua presença online? Solicite um orçamento e veja como nossa expertise em desenvolvimento pode trazer resultados incríveis para o seu negócio.",
        "pTituloPortfolio": "Portfólio",
        "pPortfolioTitle1": "PortTek",
        "pPortfolioDesc1": "A PortTek Soluções Portuárias se destaca no desenvolvimento de plataformas digitais ao evitar a repetição de padrões comuns no mercado, tornando seu aplicativo e site sobre os portos de São Paulo referências inovadoras. A empresa utiliza uma base de dados robusta e atualizada, combinada a modelos avançados de arquitetura de informação, para entregar ferramentas que realmente fazem sentido para profissionais e visitantes do setor portuário. Dessa forma, os produtos da PortTek permanecem livres de redundâncias, informações inconsistentes ou funcionalidades pouco intuitivas, garantindo uma experiência eficiente e confiável.",
        "pPortfolioCEO1": "Marina Duarte, Diretora de Tecnologia da PortTek Soluções Portuárias",
        "pPortfolioTitle2": "Happy Box",
        "pPortfolioDesc2": "A Happy Box se destaca no desenvolvimento de brinquedos especializados ao evitar a repetição de padrões genéricos do mercado, transformando sua loja física e online em referências inovadoras para crianças autistas. A empresa utiliza uma curadoria cuidadosa de materiais sensoriais e educativos, combinada a modelos avançados de organização pedagógica, para oferecer produtos que realmente fazem sentido para famílias, terapeutas e educadores. Dessa forma, os brinquedos da Happy Box permanecem livres de estímulos inadequados, informações confusas ou funcionalidades pouco efetivas, garantindo uma experiência acolhedora, consistente e verdadeiramente inclusiva.",
        "pPortfolioCEO2": "Renata Morelli, Fundadora da HappyBox",
        "pPortfolioCEO3": "CEO da Empresa - Guilherme",
        "pPortfolioTitle3": "Creepy",
        "pPortfolioDesc3": "A Creepy é uma plataforma de streaming totalmente dedicada aos amantes do terror e do suspense. Com um catálogo exclusivo que reúne desde clássicos aterrorizantes até produções independentes e originais, a Creepy oferece uma experiência imersiva para quem busca emoção, tensão e boas doses de adrenalina. Nossa interface foi pensada para proporcionar uma navegação sombria e envolvente, enquanto recursos como sugestões personalizadas e eventos especiais temáticos garantem que cada usuário encontre exatamente o tipo de medo que procura. Na Creepy, o terror não é apenas um gênero — é um universo inteiro esperando para ser explorado. Entre, se tiver coragem.",
        "pPortfolioCEO3": "Freddy Krueger, Diretor de Produto da Creepy",
        "pPortfolioTitle4": "Lumina Wear",
        "pPortfolioDesc4": "A Lumina Wear se destaca no universo da moda ao evitar os padrões repetitivos do varejo tradicional, transformando sua loja física e online em referências de estilo e originalidade. A marca utiliza um processo criativo cuidadoso e um catálogo constantemente atualizado, aliado a modelos modernos de curadoria de tendências, para oferecer peças que realmente fazem sentido para quem busca identidade na forma de vestir. Assim, os produtos da Lumina Wear permanecem livres de coleções genéricas, informações confusas ou experiências de compra pouco intuitivas, garantindo um atendimento marcante, eficiente e inspirador.",
        "pPortfolioCEO4": "Jhonatan Ferreira, Diretor Criativo da Lumina Wear",
        "pPortfolioTitle5": "StreamVibe Media",
        "pPortfolioDesc5": "A StreamVibe Media se destaca no desenvolvimento de plataformas de entretenimento ao evitar a repetição de padrões comuns no mercado, tornando seu aplicativo de streaming uma referência inovadora para amantes de filmes e séries. A empresa utiliza um catálogo amplo e constantemente atualizado, combinado a modelos avançados de curadoria e arquitetura de informação, para entregar experiências que realmente fazem sentido para usuários de todos os perfis. Dessa forma, os produtos da StreamVibe Media permanecem livres de recomendações redundantes, interfaces confusas ou funcionalidades pouco intuitivas, garantindo uma navegação eficiente, envolvente e confiável.",
        "pPortfolioCEO5": "Lucas Andrade, Diretor de Produto da StreamVibe Media",
        "pPortfolioTitle6": "Shopery Market",
        "pPortfolioDesc6": "A Shopery Market se destaca no desenvolvimento de soluções de e-commerce ao evitar a repetição de padrões comuns do varejo sustentável, transformando sua plataforma em uma referência inovadora para consumidores conscientes. A empresa utiliza uma seleção rigorosa de produtos ecológicos e uma base de informações constantemente atualizada, combinadas a modelos avançados de arquitetura de navegação, para entregar itens que realmente fazem sentido para quem busca impacto positivo. Dessa forma, os produtos da Shopery Market permanecem livres de descrições inconsistentes, curadorias superficiais ou funcionalidades pouco intuitivas, garantindo uma experiência de compra transparente, eficiente e confiável.",
        "pPortfolioCEO6": "Sofia Martins, CEO da Shopery",
        "btnVejaMais": "Veja mais projetos",
        "titFooterMenu": "Menu",
        "pFooterHome": "Home",
        "titFooterContato": "Contato",
        "pFooterTelefone": "(11) 97443-8072",
        "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
        "pFooterHorario": "Segunda à Sexta: 9:00 - 18:00",
        "pFooterEmail": "longtechnology2025@gmail.com",
        "titFooterRedes": "Redes Sociais",
        "pDireitosFooter": "Lóng Technology @2025 - TODOS OS DIREITOS RESERVADOS",
        "pTermosPolitica": "Termos e Condições de Uso       Política de Privacidade"
    },
    "en": {
        "pTechMenu": "Technology",
        "menuInicio": "Home",
        "menuSolucoes": "Solutions",
        "menuQuemSomos": "About Us",
        "menuPortfolio": "Portfolio",
        "pTransformando": "Transforming your company's future with innovation and excellence.",
        "pCriacao": "Creation of websites and mobile applications focused on innovation, design, and results.",
        "pContatos": "Contacts",
        "pOrc": "Request a quote now!",
        "pPorCProjetos": "Completed Projects",
        "pPorCSatisfacao": "Customer Satisfaction",
        "pPorCEquipe": "Specialized Team",
        "tituloCardSoftware": "Software Development",
        "pCardsArquitetura": "Software Architecture",
        "pCardsMetodologias": "Agile Methodologies",
        "pCardsTestes": "Software Testing",
        "pCardsSeguranca": "Information Security",
        "txtCardsSoftware": "Also known as software<br> development, it is the<br> process of designing,<br> creating, implementing,<br> and maintaining software.",
        "letraCardsL": "L",
        "tituloCardSites": "Website Development",
        "pCardsFrontend": "Front-end Development",
        "pCardsSEO": "SEO Optimization",
        "pCardsResponsivos": "Responsive Websites",
        "pCardsAcessibilidade": "Web Accessibility",
        "txtCardsSites": "Also referred to as website development, it is the set of activities required to build a website.",
        "letraCardsO": "Ó",
        "tituloCardUIUX": "UI / UX Design",
        "pCardsWireframes": "Interactive Wireframes",
        "pCardsDesignSystem": "Design System",
        "pCardsPsicologia": "Color Psychology",
        "pCardsUsabilidade": "Usability Testing",
        "txtCardsUIUX": "UX Design focuses on functionality and overall experience, while UI Design is concerned with appearance and visual interaction.",
        "letraCardsN": "N",
        "tituloCardApps": "App Development",
        "pCardsNativoHibrido": "Native vs. Hybrid Dev.",
        "pCardsAPIs": "API Consumption",
        "pCardsPerformance": "Performance and Optimization",
        "pCardsPublicacao": "Store Publishing",
        "txtCardsApps": "Also known as mobile app development, it is the process of creating software for mobile devices.",
        "letraCardsG": "G",
        "pTituloQuem": "About Us",
        "pConheca": "Learn more about us",
        "pTituloLong": "Lóng Technology",
        "pTxtLong": "Lóng Technology is a company operating in the field of professional systems and websites, from prototyping to system management and maintenance, always bringing the best and latest market technologies.",
        "pTituloNossaEquipe": "Our Team",
        "txtNossaEquipe": "Our specialized team",
        "pAno": "2025",
        "pTituloFerramentas": "Our Tools",
        "tituloMVVMissao": "Mission",
        "pTxtMVVMissao": "Develop innovative and efficient technological solutions, providing our clients with high-quality, customized, and flexible systems that optimize their processes and boost their businesses.",
        "tituloMVVVisao": "Vision",
        "pTxtMVVVisao": "To be a reference in the systems development market, recognized for excellence, innovation, and commitment to digital transformation, positively impacting companies and users.",
        "tituloMVVValor": "Values",
        "pTxtMVVValor": "Transparency, collaboration, and customer focus, always with ethics and responsibility, ensuring efficient solutions.",
        "pTitTransforma": "Turn your idea into reality",
        "pTxtTrans": "How about we boost your online presence together? Request a quote and see how our development expertise can deliver incredible results for your business.",
        "pTituloPortfolio": "Portfolio",
        "pPortfolioTitle1": "PortTek",
        "pPortfolioDesc1": "PortTek Port Solutions stands out in the development of digital platforms by avoiding the repetition of common market patterns, making its app and website about the ports of São Paulo innovative references in the sector. The company uses a robust and constantly updated database, combined with advanced information architecture models, to deliver tools that truly make sense for professionals and visitors in the port industry. In this way, PortTek’s products remain free from redundancies, inconsistent information, or unintuitive features, ensuring an efficient and reliable experience.",
        "pPortfolioCEO1": "Marina Duarte, Chief Technology Officer (CTO) at PortTek Port Solutions",
        "pPortfolioTitle2": "Happy Box",
        "pPortfolioDesc2": "Happy Box stands out in the development of specialized toys by avoiding the repetition of generic market patterns, turning its physical and online store into innovative references for autistic children. The company uses a careful curation of sensory and educational materials, combined with advanced models of pedagogical organization, to offer products that truly make sense for families, therapists, and educators. In this way, Happy Box toys remain free from inadequate stimuli, confusing information, or ineffective functionalities, ensuring a welcoming, consistent, and truly inclusive experience.",
        "pPortfolioCEO2": "Renata Morelli, Founder of HappyBox",
        "pPortfolioTitle3": "Creepy",
        "pPortfolioDesc3": "Creepy is a streaming platform entirely dedicated to fans of horror and suspense. With an exclusive catalog that brings together everything from terrifying classics to independent and original productions, Creepy offers an immersive experience for those seeking emotion, tension, and a good dose of adrenaline. Our interface was designed to provide a dark and immersive navigation, while features such as personalized suggestions and special themed events ensure that every user finds exactly the kind of fear they’re looking for. At Creepy, horror is not just a genre — it’s an entire universe waiting to be explored. Enter, if you dare.",
        "pPortfolioCEO3": "Freddy Krueger, Product Director at Creepy",
        "pPortfolioTitle4": "Lumina Wear",
        "pPortfolioDesc4": "Lumina Wear stands out in the fashion world by avoiding the repetitive patterns of traditional retail, transforming its physical and online stores into references of style and originality. The brand uses a careful creative process and a constantly updated catalog, combined with modern trend-curation models, to offer pieces that truly make sense for those seeking identity through the way they dress. In this way, Lumina Wear’s products remain free from generic collections, confusing information, or unintuitive shopping experiences, ensuring a remarkable, efficient, and inspiring customer experience.",
        "pPortfolioCEO4": "Jhonatan Ferreira, Creative Director at Lumina Wear",
        "pPortfolioDesc5": "StreamVibe Media stands out in the development of entertainment platforms by avoiding the repetition of common market patterns, making its streaming app an innovative reference for movie and series enthusiasts. The company uses a broad and constantly updated catalog, combined with advanced curation and information architecture models, to deliver experiences that truly make sense for users of all profiles. In this way, StreamVibe Media’s products remain free from redundant recommendations, confusing interfaces, or unintuitive features, ensuring an efficient, engaging, and reliable navigation experience.",
        "pPortfolioCEO5": "Jhonatan Ferreira, Creative Director of Lumina Wear",
        "pPortfolioTitle6": "Shopery Market",
        "pPortfolioDesc6": "Shopery Market stands out in the development of e-commerce solutions by avoiding the repetition of common patterns in the sustainable retail sector, transforming its platform into an innovative reference for conscious consumers. The company uses a rigorous selection of eco-friendly products and a constantly updated information base, combined with advanced navigation architecture models, to deliver items that truly make sense for those seeking positive impact. In this way, Shopery Market’s products remain free from inconsistent descriptions, superficial curations, or unintuitive features, ensuring a transparent, efficient, and reliable shopping experience.",
        "pPortfolioCEO6": "Sofia Martins, CEO of Shopery",
        "btnVejaMais": "See more projects",
        "titFooterMenu": "Menu",
        "pFooterHome": "Home",
        "titFooterContato": "Contact",
        "pFooterTelefone": "(11) 97443-8072",
        "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
        "pFooterHorario": "Monday to Friday: 9:00 AM - 6:00 PM",
        "pFooterEmail": "longtechnology2025@gmail.com",
        "titFooterRedes": "Social Media",
        "pDireitosFooter": "Lóng Technology @2025 - ALL RIGHTS RESERVED",
        "pTermosPolitica": "Terms and Conditions of Use       Privacy Policy"
    },

    "zh": {
    "pTechMenu": "技术",
    "menuInicio": "首页",
    "menuSolucoes": "解决方案",
    "menuQuemSomos": "关于我们",
    "menuPortfolio": "作品集",
    "pTransformando": "通过创新与卓越，改变您公司的未来。",
    "pCriacao": "专注于创新、设计与成果的网站与移动应用开发。",
    "pContatos": "联系方式",
    "pOrc": "立即请求报价！",
    "pPorCProjetos": "已完成项目",
    "pPorCSatisfacao": "客户满意度",
    "pPorCEquipe": "专业团队",
    "tituloCardSoftware": "软件开发",
    "pCardsArquitetura": "软件架构",
    "pCardsMetodologias": "敏捷方法",
    "pCardsTestes": "软件测试",
    "pCardsSeguranca": "信息安全",
    "txtCardsSoftware": "也称为软件开发，指设计、创建、实现和维护软件的过程。",
    "letraCardsL": "L",
    "tituloCardSites": "网站开发",
    "pCardsFrontend": "前端开发",
    "pCardsSEO": "SEO 优化",
    "pCardsResponsivos": "响应式网站",
    "pCardsAcessibilidade": "网络无障碍",
    "txtCardsSites": "也称为网站开发，是构建网站所需的一系列活动。",
    "letraCardsO": "Ó",
    "tituloCardUIUX": "UI / UX 设计",
    "pCardsWireframes": "交互式线框图",
    "pCardsDesignSystem": "设计系统",
    "pCardsPsicologia": "色彩心理学",
    "pCardsUsabilidade": "可用性测试",
    "txtCardsUIUX": "UX 设计关注功能性与整体体验，UI 设计关注外观与视觉交互。",
    "letraCardsN": "N",
    "tituloCardApps": "应用开发",
    "pCardsNativoHibrido": "原生 与 混合 开发",
    "pCardsAPIs": "API 调用",
    "pCardsPerformance": "性能与优化",
    "pCardsPublicacao": "应用商店发布",
    "txtCardsApps": "也称为移动应用开发，是为移动设备创建软件的过程。",
    "letraCardsG": "G",
    "pTituloQuem": "关于我们",
    "pConheca": "了解更多关于我们的信息",
    "pTituloLong": "Lóng Technology",
    "pTxtLong": "Lóng Technology 是一家从原型设计到系统管理与维护的专业系统与网站公司，始终引入市场上最好、最新的技术。",
    "pTituloNossaEquipe": "我们的团队",
    "txtNossaEquipe": "我们专业的团队",
    "pAno": "2025",
    "pTituloFerramentas": "我们的工具",
    "tituloMVVMissao": "使命",
    "pTxtMVVMissao": "开发创新高效的技术解决方案，为客户提供高质量、定制且灵活的系统，优化流程并推动业务发展。",
    "tituloMVVVisao": "愿景",
    "pTxtMVVVisao": "成为系统开发领域的标杆，以卓越、创新和对数字化转型的承诺获得认可，积极影响企业和用户。",
    "tituloMVVValor": "价值观",
    "pTxtMVVValor": "透明、协作与以客户为中心，始终以诚信与责任保障高效的解决方案。",
    "pTitTransforma": "将您的想法变为现实",
    "pTxtTrans": "让我们一起推动您的线上影响力！请求报价，看看我们的开发专长如何为您的业务带来惊人成果。",
    "pTituloPortfolio": "作品集",
    "pPortfolioTitle1": "PortTek",
    "pPortfolioDesc1": "PortTek 港口解决方案在开发数字平台方面表现突出，通过避免市场上常见的模式重复，使其关于圣保罗港口的应用程序和网站成为行业中的创新典范。公司结合稳健且持续更新的数据库与先进的信息架构模型，为港口行业的专业人士和访客提供真正有意义的工具。由此，PortTek 的产品避免了冗余、不一致的信息和不直观的功能，确保了高效且可靠的使用体验。",
    "pPortfolioCEO1": "玛丽娜·杜阿尔特，PortTek港口解决方案公司首席技术官",
    "pPortfolioTitle2": "Happy Box",
    "pPortfolioDesc2": "Happy Box 通过避免重复市场上常见的通用模式，在开发专业玩具方面脱颖而出，使其线上和线下商店成为自闭症儿童创新产品的参考。公司精心甄选感官与教育材料，并结合先进的教学组织模型，为家庭、治疗师和教育者提供真正有意义的产品。由此，Happy Box 的玩具避免了不适当的刺激、混乱的信息或低效的功能，确保为用户带来温馨、一致且真正包容的体验。",
    "pPortfolioCEO2": "Renata Morelli，HappyBox 创始人",
    "pPortfolioTitle3": "Creepy",
    "pPortfolioDesc3": "Creepy 是一个完全致力于恐怖和悬疑爱好者的流媒体平台。其独家片库囊括了从令人毛骨悚然的经典影片到独立原创作品，为寻求刺激、紧张感和肾上腺素的观众提供沉浸式体验。我们的界面以黑暗、沉浸的风格设计，同时个性化推荐和主题特别活动等功能，确保每位用户都能找到自己想要的那种“恐惧”。在 Creepy，恐怖不仅仅是一个类型——它是一个等待你探索的完整宇宙。敢的话，就进来吧。",
    "pPortfolioCEO3": "弗雷迪·克鲁格，Creepy公司产品总监",
    "pPortfolioTitle4": "Lumina Wear",
    "pPortfolioDesc4": "Lumina Wear 通过避免传统零售中重复的模式，在时尚领域脱颖而出，使其线上和线下商店成为风格与原创性的参考。品牌采用精心的创意流程和不断更新的商品目录，并结合现代化的趋势策展模型，为那些通过穿衣方式寻求自我表达的人提供真正有意义的单品。因此，Lumina Wear 的产品避免了通用系列、混乱的信息或不直观的购物体验，确保为顾客带来难忘、高效且富有启发性的服务体验。",
    "pPortfolioCEO4": "Jhonatan Ferreira，Lumina Wear 创意总监",
    "pPortfolioDesc5": "StreamVibe Media 在开发娱乐平台方面表现突出，通过避免市场上常见模式的重复，使其流媒体应用成为电影和剧集爱好者的创新参考。公司结合广泛且持续更新的目录，以及先进的策展与信息架构模型，为各类用户提供真正有意义的体验。因此，StreamVibe Media 的产品避免了重复的推荐、混乱的界面或不直观的功能，确保带来高效、沉浸且可靠的导航体验。",
    "pPortfolioCEO5": "Lucas Andrade, Diretor de Produto da StreamVibeMedia",
    "pPortfolioTitle6": "Shopery Market",
    "pPortfolioDesc6": "Shopery Market 在开发可持续零售领域的电商解决方案时，通过避免重复市场上常见的模式而脱颖而出，使其平台成为注重环保消费者的创新典范。公司采用严格筛选的环保产品，并结合持续更新的信息库和先进的导航架构模型，为追求正面影响的用户提供真正有意义的选择。因此，Shopery Market 的产品避免了不一致的商品描述、表面的策展或不直观的功能，确保带来透明、高效且可靠的购物体验。",
    "pPortfolioCEO6": "索菲娅·马丁斯，Shopery 的首席执行官",
    "btnVejaMais": "查看更多项目",
    "titFooterMenu": "菜单",
    "pFooterHome": "首页",
    "titFooterContato": "联系方式",
    "pFooterTelefone": "(11) 97443-8072",
    "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
    "pFooterHorario": "周一至周五：09:00 - 18:00",
    "pFooterEmail": "longtechnology2025@gmail.com",
    "titFooterRedes": "社交媒体",
    "pDireitosFooter": "Lóng Technology @2025 - 保留所有权利",
    "pTermosPolitica": "使用条款       隐私政策"
  }
};


