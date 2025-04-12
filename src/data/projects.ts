
export interface Project {
  id: string;
  title: {
    en: string;
    de: string;
    fr: string;
    es: string;
    cs: string;
    ru: string;
    pl: string;
    pt: string;
    zh: string;
    it: string;
    ja: string;
  };
  description: {
    en: string;
    de: string;
    fr: string;
    es: string;
    cs: string;
    ru: string;
    pl: string;
    pt: string;
    zh: string;
    it: string;
    ja: string;
  };
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: {
      en: "E-commerce Dashboard",
      de: "E-Commerce-Dashboard",
      fr: "Tableau de bord e-commerce",
      es: "Panel de control de comercio electrónico",
      cs: "Dashboard pro e-commerce",
      ru: "Панель управления электронной коммерцией",
      pl: "Panel e-commerce",
      pt: "Painel de e-commerce",
      zh: "电子商务仪表板",
      it: "Dashboard e-commerce",
      ja: "Eコマースダッシュボード"
    },
    description: {
      en: "A comprehensive dashboard for managing online stores with analytics and inventory tracking.",
      de: "Ein umfassendes Dashboard zur Verwaltung von Online-Shops mit Analysen und Bestandsverfolgung.",
      fr: "Un tableau de bord complet pour gérer les boutiques en ligne avec des analyses et un suivi des stocks.",
      es: "Un panel de control completo para gestionar tiendas online con análisis y seguimiento de inventario.",
      cs: "Komplexní dashboard pro správu online obchodů s analytikou a sledováním zásob.",
      ru: "Комплексная панель управления для управления интернет-магазинами с аналитикой и отслеживанием инвентаря.",
      pl: "Kompleksowy panel do zarządzania sklepami internetowymi z analizami i śledzeniem zapasów.",
      pt: "Um painel abrangente para gerenciar lojas online com análises e rastreamento de estoque.",
      zh: "用于管理在线商店的综合仪表板，具有分析和库存跟踪功能。",
      it: "Una dashboard completa per gestire negozi online con analisi e tracciamento dell'inventario.",
      ja: "分析と在庫追跡機能を備えたオンラインストアを管理するための包括的なダッシュボード。"
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "/placeholder.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: '2',
    title: {
      en: "Task Management Application",
      de: "Aufgabenverwaltungsanwendung",
      fr: "Application de gestion des tâches",
      es: "Aplicación de gestión de tareas",
      cs: "Aplikace pro správu úkolů",
      ru: "Приложение для управления задачами",
      pl: "Aplikacja do zarządzania zadaniami",
      pt: "Aplicativo de gerenciamento de tarefas",
      zh: "任务管理应用",
      it: "Applicazione di gestione attività",
      ja: "タスク管理アプリケーション"
    },
    description: {
      en: "A Kanban-style task manager with drag-and-drop functionality and team collaboration features.",
      de: "Ein Aufgabenmanager im Kanban-Stil mit Drag-and-Drop-Funktionalität und Funktionen für die Teamzusammenarbeit.",
      fr: "Un gestionnaire de tâches de style Kanban avec des fonctionnalités de glisser-déposer et de collaboration en équipe.",
      es: "Un gestor de tareas estilo Kanban con funcionalidad de arrastrar y soltar y características de colaboración en equipo.",
      cs: "Správce úkolů ve stylu Kanban s funkcí přetažení a funkcemi týmové spolupráce.",
      ru: "Менеджер задач в стиле Канбан с функцией перетаскивания и функциями командного сотрудничества.",
      pl: "Menadżer zadań w stylu Kanban z funkcją przeciągnij i upuść oraz funkcjami współpracy zespołowej.",
      pt: "Um gerenciador de tarefas estilo Kanban com funcionalidade de arrastar e soltar e recursos de colaboração em equipe.",
      zh: "具有拖放功能和团队协作功能的看板式任务管理器。",
      it: "Un gestore di attività in stile Kanban con funzionalità di trascinamento e caratteristiche di collaborazione di team.",
      ja: "ドラッグアンドドロップ機能とチームコラボレーション機能を備えたかんばんスタイルのタスクマネージャー。"
    },
    tags: ["Vue.js", "Vuex", "Firebase", "CSS Grid"],
    imageUrl: "/placeholder.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: '3',
    title: {
      en: "Weather Forecast App",
      de: "Wettervorhersage-App",
      fr: "Application de prévisions météo",
      es: "Aplicación de pronóstico del tiempo",
      cs: "Aplikace předpovědi počasí",
      ru: "Приложение прогноза погоды",
      pl: "Aplikacja prognozy pogody",
      pt: "Aplicativo de previsão do tempo",
      zh: "天气预报应用",
      it: "App di previsioni meteo",
      ja: "天気予報アプリ"
    },
    description: {
      en: "A beautiful weather application that provides real-time forecasts, radar maps, and severe weather alerts.",
      de: "Eine schöne Wetter-App, die Echtzeit-Vorhersagen, Radarkarten und Unwetterwarnungen bietet.",
      fr: "Une belle application météo qui fournit des prévisions en temps réel, des cartes radar et des alertes météo graves.",
      es: "Una hermosa aplicación meteorológica que proporciona pronósticos en tiempo real, mapas de radar y alertas de clima severo.",
      cs: "Krásná meteorologická aplikace poskytující předpovědi v reálném čase, radarové mapy a výstrahy před nepříznivým počasím.",
      ru: "Красивое погодное приложение, которое предоставляет прогнозы в режиме реального времени, радарные карты и предупреждения о суровой погоде.",
      pl: "Piękna aplikacja pogodowa zapewniająca prognozy w czasie rzeczywistym, mapy radarowe i ostrzeżenia o trudnych warunkach pogodowych.",
      pt: "Um belo aplicativo de clima que fornece previsões em tempo real, mapas de radar e alertas de clima severo.",
      zh: "一个美丽的天气应用程序，提供实时预报、雷达地图和恶劣天气警报。",
      it: "Una bellissima applicazione meteo che fornisce previsioni in tempo reale, mappe radar e avvisi di condizioni meteorologiche avverse.",
      ja: "リアルタイムの予報、レーダーマップ、悪天候警報を提供する美しい天気アプリ。"
    },
    tags: ["React Native", "Node.js", "WeatherAPI", "Geolocation"],
    imageUrl: "/placeholder.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com"
  }
];
