
export interface BlogPost {
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
  excerpt: {
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
  content: {
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
  date: string;
  imageUrl: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: "Getting Started with React and TypeScript",
      de: "Erste Schritte mit React und TypeScript",
      fr: "Débuter avec React et TypeScript",
      es: "Comenzando con React y TypeScript",
      cs: "Začínáme s React a TypeScript",
      ru: "Начало работы с React и TypeScript",
      pl: "Pierwsze kroki z React i TypeScript",
      pt: "Começando com React e TypeScript",
      zh: "React和TypeScript入门指南",
      it: "Iniziare con React e TypeScript",
      ja: "ReactとTypeScriptを始める"
    },
    excerpt: {
      en: "Learn how to set up a new project with React and TypeScript for type-safe development.",
      de: "Erfahren Sie, wie Sie ein neues Projekt mit React und TypeScript für eine typsichere Entwicklung einrichten.",
      fr: "Apprenez à configurer un nouveau projet avec React et TypeScript pour un développement sûr au niveau des types.",
      es: "Aprende a configurar un nuevo proyecto con React y TypeScript para un desarrollo seguro en cuanto a tipos.",
      cs: "Naučte se, jak nastavit nový projekt s React a TypeScript pro typově bezpečný vývoj.",
      ru: "Узнайте, как настроить новый проект с React и TypeScript для безопасной разработки с типами.",
      pl: "Dowiedz się, jak skonfigurować nowy projekt z React i TypeScript dla bezpiecznego rozwoju typów.",
      pt: "Aprenda a configurar um novo projeto com React e TypeScript para desenvolvimento seguro de tipos.",
      zh: "学习如何使用React和TypeScript设置新项目以进行类型安全的开发。",
      it: "Impara a configurare un nuovo progetto con React e TypeScript per uno sviluppo sicuro per i tipi.",
      ja: "型安全な開発のためにReactとTypeScriptを使った新しいプロジェクトのセットアップ方法を学びましょう。"
    },
    content: {
      en: "This is a detailed guide on setting up a React project with TypeScript. We'll cover installation, configuration, and best practices.",
      de: "Dies ist ein detaillierter Leitfaden zum Einrichten eines React-Projekts mit TypeScript. Wir werden die Installation, Konfiguration und bewährten Methoden behandeln.",
      fr: "Voici un guide détaillé sur la configuration d'un projet React avec TypeScript. Nous aborderons l'installation, la configuration et les meilleures pratiques.",
      es: "Esta es una guía detallada sobre la configuración de un proyecto de React con TypeScript. Cubriremos la instalación, la configuración y las mejores prácticas.",
      cs: "Toto je podrobný průvodce nastavením projektu React s TypeScriptem. Budeme se zabývat instalací, konfigurací a osvědčenými postupy.",
      ru: "Это подробное руководство по настройке проекта React с использованием TypeScript. Мы рассмотрим установку, настройку и лучшие практики.",
      pl: "To szczegółowy przewodnik po konfiguracji projektu React z TypeScript. Omówimy instalację, konfigurację i najlepsze praktyki.",
      pt: "Este é um guia detalhado sobre a configuração de um projeto React com TypeScript. Abordaremos instalação, configuração e melhores práticas.",
      zh: "这是关于使用TypeScript设置React项目的详细指南。我们将涵盖安装、配置和最佳实践。",
      it: "Questa è una guida dettagliata sulla configurazione di un progetto React con TypeScript. Copriremo installazione, configurazione e migliori pratiche.",
      ja: "これはTypeScriptを使用したReactプロジェクトのセットアップに関する詳細なガイドです。インストール、設定、ベストプラクティスについて説明します。"
    },
    date: "2025-03-15",
    imageUrl: "/placeholder.svg",
    slug: "getting-started-with-react-typescript"
  },
  {
    id: '2',
    title: {
      en: "Understanding CSS Grid Layout",
      de: "CSS Grid Layout verstehen",
      fr: "Comprendre la mise en page CSS Grid",
      es: "Entendiendo el diseño de CSS Grid",
      cs: "Porozumění rozložení CSS Grid",
      ru: "Понимание макета CSS Grid",
      pl: "Zrozumienie układu CSS Grid",
      pt: "Entendendo o layout CSS Grid",
      zh: "理解CSS Grid布局",
      it: "Capire il layout CSS Grid",
      ja: "CSS Gridレイアウトを理解する"
    },
    excerpt: {
      en: "A comprehensive guide to mastering CSS Grid for modern web layouts.",
      de: "Ein umfassender Leitfaden zur Beherrschung von CSS Grid für moderne Web-Layouts.",
      fr: "Un guide complet pour maîtriser CSS Grid pour les mises en page web modernes.",
      es: "Una guía completa para dominar CSS Grid para diseños web modernos.",
      cs: "Komplexní průvodce ovládnutím CSS Grid pro moderní webové layouty.",
      ru: "Полное руководство по освоению CSS Grid для современных веб-макетов.",
      pl: "Kompleksowy przewodnik po opanowaniu CSS Grid dla nowoczesnych układów stron internetowych.",
      pt: "Um guia abrangente para dominar o CSS Grid para layouts web modernos.",
      zh: "掌握现代网页布局CSS Grid的综合指南。",
      it: "Una guida completa per padroneggiare CSS Grid per layout web moderni.",
      ja: "モダンなWebレイアウトのためのCSS Gridをマスターするための包括的なガイド。"
    },
    content: {
      en: "CSS Grid Layout is a powerful tool that allows for two-dimensional layouts. This post explores the basics and advanced techniques.",
      de: "CSS Grid Layout ist ein leistungsstarkes Werkzeug, das zweidimensionale Layouts ermöglicht. Dieser Beitrag untersucht die Grundlagen und fortgeschrittenen Techniken.",
      fr: "CSS Grid Layout est un outil puissant qui permet des mises en page bidimensionnelles. Cet article explore les techniques de base et avancées.",
      es: "CSS Grid Layout es una herramienta poderosa que permite diseños bidimensionales. Esta publicación explora las técnicas básicas y avanzadas.",
      cs: "CSS Grid Layout je výkonný nástroj, který umožňuje dvourozměrné rozložení. Tento příspěvek zkoumá základní a pokročilé techniky.",
      ru: "CSS Grid Layout — мощный инструмент, позволяющий создавать двумерные макеты. В этом посте рассматриваются основные и продвинутые техники.",
      pl: "CSS Grid Layout to potężne narzędzie umożliwiające tworzenie dwuwymiarowych układów. Ten post analizuje podstawowe i zaawansowane techniki.",
      pt: "O CSS Grid Layout é uma ferramenta poderosa que permite layouts bidimensionais. Este post explora técnicas básicas e avançadas.",
      zh: "CSS Grid布局是一个强大的工具，允许二维布局。这篇文章探讨了基础和高级技术。",
      it: "CSS Grid Layout è uno strumento potente che consente layout bidimensionali. Questo post esplora le tecniche di base e avanzate.",
      ja: "CSS Gridレイアウトは、二次元レイアウトを可能にする強力なツールです。この投稿では、基本的および高度なテクニックを探ります。"
    },
    date: "2025-02-28",
    imageUrl: "/placeholder.svg",
    slug: "understanding-css-grid-layout"
  },
  {
    id: '3',
    title: {
      en: "State Management in Modern React Applications",
      de: "State Management in modernen React-Anwendungen",
      fr: "Gestion de l'état dans les applications React modernes",
      es: "Gestión de estado en aplicaciones modernas de React",
      cs: "Správa stavu v moderních aplikacích React",
      ru: "Управление состоянием в современных приложениях React",
      pl: "Zarządzanie stanem w nowoczesnych aplikacjach React",
      pt: "Gerenciamento de estado em aplicações React modernas",
      zh: "现代React应用中的状态管理",
      it: "Gestione dello stato nelle applicazioni React moderne",
      ja: "モダンなReactアプリケーションにおける状態管理"
    },
    excerpt: {
      en: "Explore different approaches to managing state in React applications, from Context API to Redux.",
      de: "Erkunden Sie verschiedene Ansätze zur Verwaltung des Zustands in React-Anwendungen, von der Context API bis hin zu Redux.",
      fr: "Explorez différentes approches pour gérer l'état dans les applications React, de l'API Context à Redux.",
      es: "Explora diferentes enfoques para gestionar el estado en aplicaciones React, desde Context API hasta Redux.",
      cs: "Prozkoumejte různé přístupy ke správě stavu v aplikacích React, od Context API až po Redux.",
      ru: "Изучите различные подходы к управлению состоянием в приложениях React, от Context API до Redux.",
      pl: "Poznaj różne podejścia do zarządzania stanem w aplikacjach React, od Context API po Redux.",
      pt: "Explore diferentes abordagens para gerenciar o estado em aplicações React, da API Context ao Redux.",
      zh: "探索React应用中管理状态的不同方法，从Context API到Redux。",
      it: "Esplora diversi approcci alla gestione dello stato nelle applicazioni React, dall'API Context a Redux.",
      ja: "Context APIからReduxまで、Reactアプリケーションで状態を管理するさまざまなアプローチを探ります。"
    },
    content: {
      en: "This blog post compares different state management solutions in React and helps you choose the right one for your project.",
      de: "Dieser Blogbeitrag vergleicht verschiedene State-Management-Lösungen in React und hilft Ihnen, die richtige für Ihr Projekt zu wählen.",
      fr: "Cet article de blog compare différentes solutions de gestion d'état dans React et vous aide à choisir la bonne pour votre projet.",
      es: "Esta publicación de blog compara diferentes soluciones de gestión de estado en React y te ayuda a elegir la adecuada para tu proyecto.",
      cs: "Tento blogový příspěvek porovnává různá řešení správy stavu v Reactu a pomáhá vám vybrat to správné pro váš projekt.",
      ru: "В этом блоге сравниваются различные решения для управления состоянием в React и помогают выбрать подходящее для вашего проекта.",
      pl: "Ten wpis na blogu porównuje różne rozwiązania do zarządzania stanem w React i pomaga wybrać odpowiednie dla Twojego projektu.",
      pt: "Este post de blog compara diferentes soluções de gerenciamento de estado no React e ajuda você a escolher a certa para seu projeto.",
      zh: "这篇博文比较了React中不同的状态管理解决方案，帮助你为项目选择合适的方案。",
      it: "Questo post del blog confronta diverse soluzioni di gestione dello stato in React e ti aiuta a scegliere quella giusta per il tuo progetto.",
      ja: "このブログ投稿では、Reactでのさまざまな状態管理ソリューションを比較し、プロジェクトに適したものを選ぶのに役立ちます。"
    },
    date: "2025-01-10",
    imageUrl: "/placeholder.svg",
    slug: "state-management-in-modern-react"
  }
];
