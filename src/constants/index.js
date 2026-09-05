export const myProjects = [
  {
    id: 1,
    title: "Archaeon — Code Intelligence & RAG Platform",
    description:
      "A semantic code RAG platform that clones GitHub repositories, reconstructs architecture via AST parsing, and answers technical questions with source-grounded citations.",
    subDescription: [
      "Engineered an asynchronous code intelligence engine that clones repositories and reconstructs architecture using Python AST parsing.",
      "Built a semantic code RAG pipeline using Google embeddings and ChromaDB with AST-bounded chunking and LRU query caching.",
      "Implemented a grounded Q&A API with Gemini 3.6 Flash and exact line-level code citations.",
      "Added background job tracking with SQLite/FastAPI and a comprehensive automated test suite with 100% pass coverage.",
    ],
    href: "",
    github: "https://github.com/manuwastaken/software-archaeologist",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/archaeon.png`,
    tags: [
      { id: 1, name: "Python", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 2, name: "FastAPI", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 3, name: "RAG", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 4, name: "AI", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
    ],
  },

  {
    id: 2,
    title: "Word2Vec — Neural Word Embeddings",
    description:
      "A PyTorch implementation of Skip-Gram with Negative Sampling for learning semantic word vectors from raw text.",
    subDescription: [
      "Implemented SGNS architecture in PyTorch for learning embeddings from text corpora.",
      "Built a modular training pipeline with subsampling, negative sampling, and vocabulary filtering.",
      "Used cosine similarity and nearest-neighbor search to evaluate vector quality and analogy solving.",
      "Created an interactive Streamlit interface for semantic exploration and embedding visualization.",
    ],
    href: "",
    github: "https://github.com/manuwastaken/word2vec-engine",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/word2vec.png`,
    tags: [
      { id: 1, name: "Python", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 2, name: "PyTorch", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 3, name: "NLP", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 4, name: "Embeddings", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
    ],
  },

  {
    id: 3,
    title: "TinyC Compiler",
    description:
      "A compiler for the TinyC language, including AST generation, semantic analysis, and RISC-V code generation.",
    subDescription: [
      "Implemented an abstract syntax tree and semantic analysis for the TinyC language.",
      "Built name resolution, scoping, and type checking according to the TinyC type system.",
      "Generated RISC-V machine code from semantically checked programs.",
      "Implemented verification-condition generation to reason about program correctness.",
    ],
    href: "",
    github: "https://github.com/manuwastaken/TinyCC-Compiler",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/tinyc.png`,
    tags: [
      { id: 1, name: "Java", path: `${import.meta.env.BASE_URL}assets/logos/java.svg` },
      { id: 2, name: "RISC-V", path: `${import.meta.env.BASE_URL}assets/logos/riscv.png` },
      { id: 3, name: "Compiler Design", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
    ],
  },

  {
    id: 4,
    title: "RayCaster",
    description:
      "A Wolfenstein-style raycasting engine in C with perspective rendering, texture mapping, and CLI map tooling.",
    subDescription: [
      "Implemented a raycasting engine using DDA grid traversal for wall intersection detection.",
      "Built the pinhole camera model and perspective projection with configurable field of view.",
      "Added texture mapping with wall orientation detection and surface sampling.",
      "Rendered floors, ceilings, minimaps, and continuous frame generation for a playable graphics prototype.",
    ],
    href: "",
    github: "https://github.com/manuwastaken/raycast-3d-engine",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/raycast.png`,
    tags: [
      { id: 1, name: "C", path: `${import.meta.env.BASE_URL}assets/logos/c.svg` },
      { id: 2, name: "Graphics", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
      { id: 3, name: "Raycasting", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
    ],
  },
];
export const mySocials = [
  /*{
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },*/
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/abdulrehmanhasan/",
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`,
  },
  /*{
    name: "Email",
    href: "abdulrehmanhasan6@gmail.com",
    icon: `${import.meta.env.BASE_URL}assets/socials/email.png`,
  },*/
];