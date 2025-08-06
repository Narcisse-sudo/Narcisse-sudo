// Informations personnelles
export const personalInfo = {
  name: "Marie Dubois",
  title: "Data Scientist",
  email: "marie.dubois@email.com",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France",
  bio: "Passionnée par l'analyse de données et l'intelligence artificielle, je transforme les données complexes en insights stratégiques. Avec plus de 4 ans d'expérience en Data Science, je maîtrise les technologies modernes de Machine Learning et développe des solutions innovantes pour résoudre des problématiques métier.",
  cvUrl: "/cv-marie-dubois.pdf",
  profileImage: "/images/profile.jpg"
};

// Liens réseaux sociaux
export const socialLinks = {
  linkedin: "https://linkedin.com/in/marie-dubois-data",
  github: "https://github.com/marie-dubois",
  twitter: "https://twitter.com/marie_data",
  kaggle: "https://kaggle.com/mariedubois",
  medium: "https://medium.com/@marie.dubois"
};

// Compétences techniques
export const skills = [
  {
    category: "Langages de Programmation",
    items: [
      { name: "Python", level: 95, icon: "FaPython" },
      { name: "R", level: 85, icon: "FaRProject" },
      { name: "SQL", level: 90, icon: "FaDatabase" },
      { name: "JavaScript", level: 75, icon: "FaJs" },
      { name: "Scala", level: 70, icon: "SiScala" }
    ]
  },
  {
    category: "Machine Learning & IA",
    items: [
      { name: "Scikit-learn", level: 95, icon: "SiScikitlearn" },
      { name: "TensorFlow", level: 90, icon: "SiTensorflow" },
      { name: "PyTorch", level: 85, icon: "SiPytorch" },
      { name: "Keras", level: 90, icon: "SiKeras" },
      { name: "XGBoost", level: 88, icon: "FaChartLine" }
    ]
  },
  {
    category: "Data Engineering",
    items: [
      { name: "Apache Spark", level: 85, icon: "SiApachespark" },
      { name: "Hadoop", level: 75, icon: "SiApachehadoop" },
      { name: "Airflow", level: 80, icon: "SiApacheairflow" },
      { name: "Docker", level: 85, icon: "FaDocker" },
      { name: "Kubernetes", level: 70, icon: "SiKubernetes" }
    ]
  },
  {
    category: "Visualisation & BI",
    items: [
      { name: "Tableau", level: 90, icon: "SiTableau" },
      { name: "Power BI", level: 85, icon: "SiPowerbi" },
      { name: "Matplotlib", level: 95, icon: "FaChartArea" },
      { name: "Plotly", level: 90, icon: "SiPlotly" },
      { name: "D3.js", level: 75, icon: "SiD3dotjs" }
    ]
  },
  {
    category: "Cloud & Bases de Données",
    items: [
      { name: "AWS", level: 85, icon: "FaAws" },
      { name: "Google Cloud", level: 80, icon: "FaGoogle" },
      { name: "Azure", level: 75, icon: "SiMicrosoftazure" },
      { name: "PostgreSQL", level: 90, icon: "SiPostgresql" },
      { name: "MongoDB", level: 80, icon: "SiMongodb" }
    ]
  }
];

// Projets portfolio
export const projects = [
  {
    id: 1,
    title: "Prédiction de la Churn Client",
    description: "Développement d'un modèle de Machine Learning pour prédire le risque de désabonnement des clients d'une entreprise de télécommunications. Utilisation de techniques d'ensemble learning et optimisation des hyperparamètres.",
    image: "/images/project1.jpg",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/marie-dubois/churn-prediction",
    liveUrl: "https://churn-prediction-demo.streamlit.app",
    category: "Machine Learning",
    features: [
      "Analyse exploratoire approfondie",
      "Feature engineering avancé",
      "Modèles d'ensemble (Random Forest, XGBoost)",
      "Interface utilisateur interactive",
      "Métriques de performance détaillées"
    ]
  },
  {
    id: 2,
    title: "Analyse de Sentiments Twitter",
    description: "Système de classification automatique des sentiments sur les tweets en temps réel utilisant des techniques de NLP et deep learning. Déployé sur AWS avec une architecture scalable.",
    image: "/images/project2.jpg",
    technologies: ["Python", "NLTK", "TensorFlow", "AWS", "Docker", "FastAPI"],
    githubUrl: "https://github.com/marie-dubois/sentiment-analysis",
    liveUrl: "https://sentiment-api.herokuapp.com",
    category: "NLP",
    features: [
      "Preprocessing avancé du texte",
      "Modèles LSTM et BERT",
      "API REST scalable",
      "Pipeline CI/CD automatisé",
      "Monitoring en temps réel"
    ]
  },
  {
    id: 3,
    title: "Dashboard BI Ventes Interactif",
    description: "Création d'un tableau de bord business intelligence complet pour analyser les performances de vente d'une chaîne de magasins. Intégration de multiples sources de données et visualisations dynamiques.",
    image: "/images/project3.jpg",
    technologies: ["Power BI", "SQL Server", "Python", "DAX", "Power Query"],
    githubUrl: "https://github.com/marie-dubois/sales-dashboard",
    liveUrl: "https://app.powerbi.com/sales-dashboard",
    category: "Business Intelligence",
    features: [
      "KPIs dynamiques et interactifs",
      "Analyses temporelles avancées",
      "Segmentation client automatique",
      "Forecasting des ventes",
      "Reports automatisés"
    ]
  },
  {
    id: 4,
    title: "Système de Recommandation E-commerce",
    description: "Développement d'un moteur de recommandation hybride combinant filtrage collaboratif et content-based pour une plateforme e-commerce. Amélioration de 35% du taux de conversion.",
    image: "/images/project4.jpg",
    technologies: ["Python", "Apache Spark", "MLlib", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/marie-dubois/recommendation-engine",
    liveUrl: "https://ecommerce-reco-demo.com",
    category: "Recommandation",
    features: [
      "Algorithmes hybrides (CF + CB)",
      "Traitement big data avec Spark",
      "Cache Redis pour performance",
      "A/B testing intégré",
      "Métriques business trackées"
    ]
  },
  {
    id: 5,
    title: "Détection d'Anomalies IoT",
    description: "Système de détection d'anomalies en temps réel pour capteurs IoT industriels utilisant des techniques d'apprentissage non supervisé et des seuils adaptatifs.",
    image: "/images/project5.jpg",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "scikit-learn"],
    githubUrl: "https://github.com/marie-dubois/iot-anomaly-detection",
    liveUrl: "https://iot-monitoring.demo.com",
    category: "IoT & Monitoring",
    features: [
      "Streaming en temps réel",
      "Algorithmes d'isolation forest",
      "Alertes automatiques",
      "Visualisation temps réel",
      "Historique des anomalies"
    ]
  },
  {
    id: 6,
    title: "Optimisation de Portfolio Financier",
    description: "Application d'algorithmes d'optimisation pour la construction de portefeuilles financiers diversifiés. Utilisation de la théorie moderne du portefeuille et techniques de Monte Carlo.",
    image: "/images/project6.jpg",
    technologies: ["Python", "NumPy", "SciPy", "Plotly", "Yahoo Finance API"],
    githubUrl: "https://github.com/marie-dubois/portfolio-optimization",
    liveUrl: "https://portfolio-optimizer.streamlit.app",
    category: "Finance Quantitative",
    features: [
      "Optimisation de Markowitz",
      "Simulations Monte Carlo",
      "Backtesting automatisé",
      "Gestion des risques",
      "Interface utilisateur intuitive"
    ]
  }
];

// Expérience professionnelle
export const experience = [
  {
    id: 1,
    type: "work",
    title: "Senior Data Scientist",
    company: "TechCorp Solutions",
    location: "Paris, France",
    period: "2022 - Présent",
    description: "Lead d'une équipe de 4 data scientists. Développement de modèles prédictifs pour l'optimisation des processus métier. Mise en place d'une architecture MLOps complète.",
    achievements: [
      "Réduction de 40% des coûts opérationnels grâce à l'optimisation prédictive",
      "Déploiement de 15+ modèles ML en production",
      "Formation de 20+ collaborateurs aux techniques de Data Science",
      "Mise en place d'un pipeline CI/CD pour les modèles ML"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    type: "work",
    title: "Data Scientist",
    company: "DataMinds Analytics",
    location: "Lyon, France",
    period: "2020 - 2022",
    description: "Développement de solutions d'intelligence artificielle pour différents secteurs (retail, finance, santé). Collaboration étroite avec les équipes métier pour identifier les use cases prioritaires.",
    achievements: [
      "Augmentation de 25% du ROI client grâce aux modèles prédictifs",
      "Création de 8 proof-of-concepts innovants",
      "Implémentation de systèmes de recommandation performants",
      "Contribution à 5 publications scientifiques"
    ],
    technologies: ["Python", "R", "Scikit-learn", "Apache Spark", "Tableau"]
  },
  {
    id: 3,
    type: "work",
    title: "Junior Data Analyst",
    company: "Startup InnoData",
    location: "Marseille, France",
    period: "2019 - 2020",
    description: "Analyse de données business et création de tableaux de bord pour le pilotage d'activité. Développement de premiers modèles prédictifs simples.",
    achievements: [
      "Automatisation de 80% des reportings manuels",
      "Création de 12 dashboards interactifs",
      "Amélioration de la qualité des données de 60%",
      "Formation aux outils de BI pour 15 utilisateurs"
    ],
    technologies: ["SQL", "Power BI", "Excel", "Python", "PostgreSQL"]
  }
];

// Formation et éducation
export const education = [
  {
    id: 1,
    type: "education",
    title: "Master en Data Science",
    company: "École Centrale Paris",
    location: "Paris, France",
    period: "2017 - 2019",
    description: "Spécialisation en Machine Learning et Intelligence Artificielle. Projet de fin d'études sur la prédiction de séries temporelles financières.",
    achievements: [
      "Major de promotion (17.5/20)",
      "Mémoire sur les réseaux de neurones récurrents",
      "Stage de recherche au CNRS",
      "Participation à 3 compétitions Kaggle (Top 10%)"
    ],
    technologies: ["Machine Learning", "Deep Learning", "Statistiques", "Python", "R"]
  },
  {
    id: 2,
    type: "education",
    title: "Licence Mathématiques Appliquées",
    company: "Université Pierre et Marie Curie",
    location: "Paris, France",
    period: "2014 - 2017",
    description: "Formation solide en mathématiques, statistiques et informatique. Initiation à la programmation et aux bases de données.",
    achievements: [
      "Mention Très Bien (16.2/20)",
      "Projet tutoré en statistiques bayésiennes",
      "Bourse d'excellence académique",
      "Représentante étudiante au conseil de faculté"
    ],
    technologies: ["Mathématiques", "Statistiques", "Programmation", "Bases de données"]
  }
];

// Certifications
export const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-MLS-2023-001",
    url: "https://aws.amazon.com/certification/"
  },
  {
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PDE-2022-001",
    url: "https://cloud.google.com/certification/"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2022",
    credentialId: "TF-DEV-2022-001",
    url: "https://www.tensorflow.org/certificate"
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2021",
    credentialId: "TB-DS-2021-001",
    url: "https://www.tableau.com/learn/certification"
  }
];

// Configuration du formulaire de contact
export const contactConfig = {
  emailjsServiceId: "service_YOUR_ID",
  emailjsTemplateId: "template_YOUR_ID",
  emailjsPublicKey: "YOUR_PUBLIC_KEY"
};

// Métadonnées SEO
export const seoData = {
  title: "Marie Dubois - Data Scientist Portfolio",
  description: "Portfolio professionnel de Marie Dubois, Data Scientist spécialisée en Machine Learning, IA et analyse de données. 4+ ans d'expérience dans la transformation digitale.",
  keywords: "data scientist, machine learning, intelligence artificielle, python, tensorflow, analytics, big data, paris",
  author: "Marie Dubois",
  url: "https://marie-dubois-portfolio.com",
  image: "/images/profile.jpg"
};