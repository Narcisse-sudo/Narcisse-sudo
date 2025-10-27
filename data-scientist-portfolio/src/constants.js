// Informations personnelles
export const personalInfo = {
  name: "Alex Durand",
  title: "Data Scientist",
  bio: "Passionné par l'intelligence artificielle et l'analyse de données, je transforme des données complexes en insights exploitables pour aider les entreprises à prendre des décisions éclairées. Spécialisé en Machine Learning, Deep Learning et visualisation de données.",
  location: "Paris, France",
  email: "alex.durand@email.com",
  phone: "+33 6 12 34 56 78",
  profileImage: "/images/profile.jpg",
  cvUrl: "/cv-alex-durand.pdf"
};

// Réseaux sociaux
export const socialLinks = {
  linkedin: "https://linkedin.com/in/alex-durand",
  github: "https://github.com/alex-durand",
  twitter: "https://twitter.com/alex_durand",
  kaggle: "https://kaggle.com/alexdurand",
  medium: "https://medium.com/@alex.durand"
};

// Compétences techniques
export const skills = {
  programmation: [
    { name: "Python", level: 95, icon: "SiPython" },
    { name: "R", level: 85, icon: "SiR" },
    { name: "SQL", level: 90, icon: "SiPostgresql" },
    { name: "JavaScript", level: 75, icon: "SiJavascript" },
    { name: "Scala", level: 70, icon: "SiScala" }
  ],
  machineLearning: [
    { name: "Scikit-learn", level: 95, icon: "SiScikitlearn" },
    { name: "TensorFlow", level: 90, icon: "SiTensorflow" },
    { name: "PyTorch", level: 88, icon: "SiPytorch" },
    { name: "Keras", level: 85, icon: "SiKeras" },
    { name: "XGBoost", level: 80, icon: "FaChartLine" }
  ],
  dataViz: [
    { name: "Matplotlib", level: 90, icon: "SiPlotly" },
    { name: "Seaborn", level: 88, icon: "FaChartBar" },
    { name: "Plotly", level: 85, icon: "SiPlotly" },
    { name: "Tableau", level: 80, icon: "SiTableau" },
    { name: "Power BI", level: 75, icon: "SiPowerbi" }
  ],
  cloud: [
    { name: "AWS", level: 85, icon: "SiAmazonaws" },
    { name: "Google Cloud", level: 80, icon: "SiGooglecloud" },
    { name: "Azure", level: 75, icon: "SiMicrosoftazure" },
    { name: "Docker", level: 85, icon: "SiDocker" },
    { name: "Kubernetes", level: 70, icon: "SiKubernetes" }
  ]
};

// Projets
export const projects = [
  {
    id: 1,
    title: "Système de Recommandation E-commerce",
    description: "Développement d'un système de recommandation hybride utilisant le collaborative filtering et le content-based filtering pour améliorer les ventes d'une plateforme e-commerce de 25%.",
    image: "/images/project1.jpg",
    technologies: ["Python", "TensorFlow", "Pandas", "Flask", "AWS"],
    githubUrl: "https://github.com/alex-durand/ecommerce-recommender",
    liveUrl: "https://ecommerce-recommender.herokuapp.com",
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "Analyse Prédictive des Prix Immobiliers",
    description: "Modèle de prédiction des prix immobiliers utilisant des algorithmes de régression avancés et des données géospatiales. Précision de 92% sur les prédictions.",
    image: "/images/project2.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "Folium", "Streamlit"],
    githubUrl: "https://github.com/alex-durand/real-estate-prediction",
    liveUrl: "https://real-estate-predictor.streamlit.app",
    category: "Data Analysis"
  },
  {
    id: 3,
    title: "Classification d'Images Médicales",
    description: "Réseau de neurones convolutionnel pour la détection de pneumonie sur des radiographies pulmonaires. Accuracy de 94% validée par des radiologues.",
    image: "/images/project3.jpg",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker"],
    githubUrl: "https://github.com/alex-durand/medical-image-classifier",
    liveUrl: "https://medical-classifier-api.herokuapp.com",
    category: "Deep Learning"
  },
  {
    id: 4,
    title: "Analyse de Sentiment sur Twitter",
    description: "Système d'analyse de sentiment en temps réel sur les tweets utilisant BERT et une pipeline de traitement de données streaming avec Apache Kafka.",
    image: "/images/project4.jpg",
    technologies: ["Python", "BERT", "Kafka", "MongoDB", "React"],
    githubUrl: "https://github.com/alex-durand/twitter-sentiment-analysis",
    liveUrl: "https://twitter-sentiment-dashboard.netlify.app",
    category: "NLP"
  },
  {
    id: 5,
    title: "Dashboard Analytics Business",
    description: "Dashboard interactif pour l'analyse des KPIs business avec visualisations dynamiques et rapports automatisés. Utilisé par plus de 50 managers.",
    image: "/images/project5.jpg",
    technologies: ["Python", "Dash", "Plotly", "PostgreSQL", "Heroku"],
    githubUrl: "https://github.com/alex-durand/business-analytics-dashboard",
    liveUrl: "https://business-analytics-dashboard.herokuapp.com",
    category: "Data Visualization"
  },
  {
    id: 6,
    title: "Détection de Fraudes Bancaires",
    description: "Modèle de machine learning pour la détection de transactions frauduleuses en temps réel avec un taux de faux positifs < 0.1%.",
    image: "/images/project6.jpg",
    technologies: ["Python", "XGBoost", "Apache Spark", "MLflow", "AWS"],
    githubUrl: "https://github.com/alex-durand/fraud-detection",
    liveUrl: null,
    category: "Machine Learning"
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
    startDate: "Jan 2022",
    endDate: "Présent",
    description: "Lead d'une équipe de 4 data scientists. Développement de modèles ML pour l'optimisation des processus métier. Mise en place d'une infrastructure MLOps complète.",
    achievements: [
      "Amélioration de 30% de l'efficacité opérationnelle grâce aux modèles prédictifs",
      "Déploiement de 12 modèles ML en production",
      "Formation de 20+ développeurs aux bonnes pratiques ML"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Data Scientist",
    company: "DataViz Analytics",
    location: "Lyon, France",
    startDate: "Mars 2020",
    endDate: "Déc 2021",
    description: "Développement de solutions d'analyse prédictive pour des clients dans le retail et la finance. Spécialisation en NLP et computer vision.",
    achievements: [
      "Création d'un système de recommandation augmentant les ventes de 25%",
      "Développement de 8 modèles de classification d'images",
      "Réduction de 40% du temps de traitement des données"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Junior Data Analyst",
    company: "StartupIA",
    location: "Marseille, France",
    startDate: "Sept 2018",
    endDate: "Fév 2020",
    description: "Analyse de données clients et création de dashboards business. Premier poste dans la data science avec focus sur l'apprentissage des fondamentaux.",
    achievements: [
      "Automatisation de 80% des rapports mensuels",
      "Création de 15 dashboards interactifs",
      "Analyse de plus de 10M de points de données"
    ]
  }
];

// Formation
export const education = [
  {
    id: 1,
    type: "education",
    title: "Master en Data Science et Intelligence Artificielle",
    institution: "École Polytechnique",
    location: "Palaiseau, France",
    startDate: "Sept 2016",
    endDate: "Juin 2018",
    description: "Formation approfondie en machine learning, deep learning, statistiques avancées et big data.",
    achievements: [
      "Major de promotion (18.5/20)",
      "Projet de fin d'études sur la vision par ordinateur",
      "Stage de recherche au CNRS"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Licence en Mathématiques Appliquées",
    institution: "Université de Sorbonne",
    location: "Paris, France",
    startDate: "Sept 2013",
    endDate: "Juin 2016",
    description: "Solides bases en mathématiques, statistiques, probabilités et programmation.",
    achievements: [
      "Mention Très Bien",
      "Spécialisation en statistiques",
      "Projet recherche en modélisation stochastique"
    ]
  }
];

// Certifications
export const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    url: "https://www.tensorflow.org/certificate"
  },
  {
    name: "Professional Data Scientist",
    issuer: "DataCamp",
    date: "2021",
    url: "https://www.datacamp.com/certification"
  }
];

// Navigation
export const navigation = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "Expérience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];