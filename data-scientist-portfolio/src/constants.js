// Personal Information
export const PERSONAL_INFO = {
  name: "Narcisse DALKO",
  title: "Data Scientist",
  email: "narcisse.dalko@example.com",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France",
  bio: "Passionné par l'intelligence artificielle et l'analyse de données, je transforme des données complexes en insights stratégiques. Avec plus de 5 ans d'expérience, je spécialise dans le machine learning, le NLP et la visualisation de données pour aider les entreprises à prendre des décisions éclairées.",
  cvUrl: "/cv-narcisse-dalko.pdf",
  profileImage: "/profile-image.jpg"
};

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/narcissedalko",
  linkedin: "https://linkedin.com/in/narcissedalko",
  twitter: "https://twitter.com/narcissedalko",
  kaggle: "https://kaggle.com/narcissedalko",
  email: "mailto:narcisse.dalko@example.com"
};

// Skills Data
export const SKILLS = {
  programming: [
    { name: "Python", level: 95, icon: "SiPython" },
    { name: "R", level: 85, icon: "SiR" },
    { name: "SQL", level: 90, icon: "SiPostgresql" },
    { name: "JavaScript", level: 75, icon: "SiJavascript" },
    { name: "Scala", level: 70, icon: "SiScala" }
  ],
  frameworks: [
    { name: "TensorFlow", level: 90, icon: "SiTensorflow" },
    { name: "PyTorch", level: 85, icon: "SiPytorch" },
    { name: "Scikit-learn", level: 95, icon: "SiScikitlearn" },
    { name: "Pandas", level: 95, icon: "SiPandas" },
    { name: "Apache Spark", level: 80, icon: "SiApachespark" }
  ],
  tools: [
    { name: "Docker", level: 85, icon: "SiDocker" },
    { name: "AWS", level: 80, icon: "SiAmazonaws" },
    { name: "Git", level: 90, icon: "SiGit" },
    { name: "Jupyter", level: 95, icon: "SiJupyter" },
    { name: "Tableau", level: 85, icon: "SiTableau" }
  ]
};

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: "Prédiction des Prix Immobiliers",
    description: "Modèle de machine learning pour prédire les prix immobiliers en utilisant des algorithmes d'ensemble et des techniques de feature engineering avancées.",
    image: "/project1.jpg",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
    github: "https://github.com/narcissedalko/real-estate-prediction",
    demo: "https://real-estate-predictor.herokuapp.com",
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "Analyse de Sentiment Twitter",
    description: "Système d'analyse de sentiment en temps réel sur les tweets utilisant des modèles de NLP et une interface de visualisation interactive.",
    image: "/project2.jpg",
    tech: ["Python", "NLTK", "Transformers", "Streamlit", "Twitter API"],
    github: "https://github.com/narcissedalko/twitter-sentiment",
    demo: "https://twitter-sentiment-analyzer.streamlit.app",
    category: "NLP"
  },
  {
    id: 3,
    title: "Dashboard Analytics E-commerce",
    description: "Tableau de bord interactif pour analyser les performances d'une boutique en ligne avec des métriques KPI et des prédictions de ventes.",
    image: "/project3.jpg",
    tech: ["Python", "Plotly", "Dash", "PostgreSQL", "Docker"],
    github: "https://github.com/narcissedalko/ecommerce-dashboard",
    demo: "https://ecommerce-analytics-dashboard.herokuapp.com",
    category: "Data Visualization"
  },
  {
    id: 4,
    title: "Détection de Fraude",
    description: "Modèle d'apprentissage automatique pour détecter les transactions frauduleuses en temps réel avec une précision de 99.2%.",
    image: "/project4.jpg",
    tech: ["Python", "TensorFlow", "Kafka", "Redis", "AWS"],
    github: "https://github.com/narcissedalko/fraud-detection",
    demo: "https://fraud-detection-demo.herokuapp.com",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Recommandation de Films",
    description: "Système de recommandation collaboratif et basé sur le contenu pour suggérer des films personnalisés aux utilisateurs.",
    image: "/project5.jpg",
    tech: ["Python", "TensorFlow", "Surprise", "Flask", "React"],
    github: "https://github.com/narcissedalko/movie-recommender",
    demo: "https://movie-recommender-app.netlify.app",
    category: "Recommendation System"
  },
  {
    id: 6,
    title: "Classification d'Images Médicales",
    description: "CNN pour classifier les images radiologiques et aider au diagnostic médical avec une précision de 94%.",
    image: "/project6.jpg",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    github: "https://github.com/narcissedalko/medical-image-classification",
    demo: "https://medical-classifier.herokuapp.com",
    category: "Deep Learning"
  }
];

// Experience Data
export const EXPERIENCE = [
  {
    id: 1,
    type: "work",
    title: "Senior Data Scientist",
    company: "TechCorp Solutions",
    location: "Paris, France",
    period: "2021 - Présent",
    description: "Lead de l'équipe data science, développement de modèles ML en production, mentoring d'une équipe de 5 data scientists juniors.",
    achievements: [
      "Amélioration de 35% des prédictions de churn client",
      "Mise en production de 12 modèles ML",
      "Réduction de 50% du temps de traitement des données"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Data Scientist",
    company: "StartupAI",
    location: "Lyon, France",
    period: "2019 - 2021",
    description: "Développement de solutions d'IA pour l'analyse prédictive, création de pipelines de données automatisés.",
    achievements: [
      "Développement du moteur de recommandation principal",
      "Augmentation de 25% de l'engagement utilisateur",
      "Optimisation des algorithmes de recherche"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Analyste Données Junior",
    company: "DataCorp",
    location: "Marseille, France",
    period: "2018 - 2019",
    description: "Analyse de données business, création de rapports automatisés, support aux équipes métier.",
    achievements: [
      "Automatisation de 80% des rapports mensuels",
      "Création du dashboard exécutif principal",
      "Formation de 20+ utilisateurs métier"
    ]
  }
];

// Education Data
export const EDUCATION = [
  {
    id: 1,
    type: "education",
    degree: "Doctorat en Intelligence Artificielle",
    school: "École Polytechnique",
    location: "Palaiseau, France",
    period: "2015 - 2018",
    description: "Spécialisation en apprentissage automatique et traitement du langage naturel. Thèse sur les réseaux de neurones récurrents pour l'analyse de séquences temporelles.",
    grade: "Mention Très Bien"
  },
  {
    id: 2,
    type: "education",
    degree: "Master en Data Science",
    school: "Université Paris-Saclay",
    location: "Saclay, France",
    period: "2013 - 2015",
    description: "Formation approfondie en statistiques, machine learning, et big data. Projet de fin d'études sur la prédiction de séries temporelles financières.",
    grade: "Mention Bien (16/20)"
  },
  {
    id: 3,
    type: "education",
    degree: "Licence en Mathématiques Appliquées",
    school: "Sorbonne Université",
    location: "Paris, France",
    period: "2010 - 2013",
    description: "Fondamentaux en mathématiques, statistiques et informatique. Spécialisation en mathématiques pour l'informatique.",
    grade: "Mention Assez Bien (14/20)"
  }
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-ML-2023-ND"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2022",
    credentialId: "TF-DEV-2022-ND"
  },
  {
    name: "Professional Data Scientist",
    issuer: "Microsoft",
    year: "2021",
    credentialId: "MS-DS-2021-ND"
  }
];

// Navigation Items
export const NAV_ITEMS = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "Expérience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];