let modoEscuro = false;
let idioma = "pt-br";

const imgLua = document.getElementById("imgLua");
const pIdioma = document.getElementById("pIdioma");


const imagensComTema = document.querySelectorAll("img");



document.addEventListener("DOMContentLoaded", () => {
  const portfolioCarousel = document.getElementById("portfolioCarousel");
  const prevPortfolio = document.getElementById("prevPortfolio");
  const nextPortfolio = document.getElementById("nextPortfolio");
  const sets = document.querySelectorAll(".portfolio-set");

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
    console.log("Alternando idioma, actual:", idioma);
    idioma = idioma === "pt-br" ? "en" : "pt-br";
    console.log("Nuevo idioma:", idioma);
    aplicarIdioma();
});


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
        "pTituloLong": "LÓNG Technology",
        "pTxtLong": "A LÓNG Technology é uma empresa que atua na área de sistemas e sites profissionais, desde o protótipo até o gerenciamento e manutenção do seu sistema, trazendo sempre as melhores e mais novas tecnologias do mercado.",
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
        "pPortfolioTitle1": "Projeto Exemplo 1",
        "pPortfolioDesc1": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO1": "CEO da Empresa - Irineu",
        "pPortfolioTitle2": "Projeto Exemplo 2",
        "pPortfolioDesc2": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO2": "CEO da Empresa - Irineu",
        "btnVejaMais": "Veja mais projetos",
        "titFooterMenu": "Menu",
        "pFooterHome": "Home",
        "titFooterContato": "Contato",
        "pFooterTelefone": "(11) 97443-8072",
        "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
        "pFooterHorario": "Segunda à Sexta: 9:00 - 18:00",
        "pFooterEmail": "longtechnology2025@gmail.com",
        "titFooterRedes": "Redes Sociais",
        "pDireitosFooter": "LÓNG Technology @2025 - TODOS OS DIREITOS RESERVADOS",
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
        "pTituloLong": "LÓNG Technology",
        "pTxtLong": "LÓNG Technology is a company operating in the field of professional systems and websites, from prototyping to system management and maintenance, always bringing the best and latest market technologies.",
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
        "pPortfolioTitle1": "Example Project 1",
        "pPortfolioDesc1": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO1": "Company CEO - Irineu",
        "pPortfolioTitle2": "Example Project 2",
        "pPortfolioDesc2": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO2": "Company CEO - Irineu",
        "btnVejaMais": "See more projects",
        "titFooterMenu": "Menu",
        "pFooterHome": "Home",
        "titFooterContato": "Contact",
        "pFooterTelefone": "(11) 97443-8072",
        "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
        "pFooterHorario": "Monday to Friday: 9:00 AM - 6:00 PM",
        "pFooterEmail": "longtechnology2025@gmail.com",
        "titFooterRedes": "Social Media",
        "pDireitosFooter": "LÓNG Technology @2025 - ALL RIGHTS RESERVED",
        "pTermosPolitica": "Terms and Conditions of Use       Privacy Policy"
    }
};


