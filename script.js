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
        "pPortfolioTitle1": "Creepy",
        "pPortfolioDesc1": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO1": "CEO da Empresa - Eduardo",
        "pPortfolioTitle2": "",
        "pPortfolioDesc2": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO2": "CEO da Empresa - Maria",
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
        "pPortfolioCEO1": "CEO da Empresa - Eduardo Faísca",
        "pPortfolioTitle2": "Example Project 2",
        "pPortfolioDesc2": "\"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\"",
        "pPortfolioCEO2": "",
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
    "pTituloLong": "LÓNG Technology",
    "pTxtLong": "LÓNG Technology 是一家从原型设计到系统管理与维护的专业系统与网站公司，始终引入市场上最好、最新的技术。",
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
    "pPortfolioTitle1": "示例项目 1",
    "pPortfolioDesc1": "\"它使用包含 200 多个拉丁单词的词典，结合一些模型句子结构来生成看起来自然的 Lorem Ipsum。生成的 Lorem Ipsum 因此始终避免重复、插入玩笑或不典型的词语等。互联网上的 Lorem Ipsum 生成器通常会根据需要重复预定义的片段，使其成为互联网上第一个真正的生成器。它使用包含 200 多个拉丁单词的词典，结合一些模型句子结构来生成看起来自然的 Lorem Ipsum。生成的 Lorem Ipsum 因此始终避免重复、插入玩笑或不典型的词语等。\"",
    "pPortfolioCEO1": "公司首席执行官 - Eduardo Faísca",
    "pPortfolioTitle2": "示例项目 2",
    "pPortfolioDesc2": "\"它使用包含 200 多个拉丁单词的词典，结合一些模型句子结构来生成看起来自然的 Lorem Ipsum。生成的 Lorem Ipsum 因此始终避免重复、插入玩笑或不典型的词语等。互联网上的 Lorem Ipsum 生成器通常会根据需要重复预定义的片段，使其成为互联网上第一个真正的生成器。它使用包含 200 多个拉丁单词的词典，结合一些模型句子结构来生成看起来自然的 Lorem Ipsum。生成的 Lorem Ipsum 因此始终避免重复、插入玩笑或不典型的词语等。\"",
    "pPortfolioCEO2": "公司首席执行官 - Maria",
    "btnVejaMais": "查看更多项目",
    "titFooterMenu": "菜单",
    "pFooterHome": "首页",
    "titFooterContato": "联系方式",
    "pFooterTelefone": "(11) 97443-8072",
    "pFooterEndereco": "Av. Brigadeiro Faria Lima, 3636",
    "pFooterHorario": "周一至周五：09:00 - 18:00",
    "pFooterEmail": "longtechnology2025@gmail.com",
    "titFooterRedes": "社交媒体",
    "pDireitosFooter": "LÓNG Technology @2025 - 保留所有权利",
    "pTermosPolitica": "使用条款       隐私政策"
  }
};


